import { query } from '../../../lib/db';

// main function to handle different request methods for route users/id.

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getUserById(req, res);
      break;

    case 'PUT':
      updateUser(req, res);
      break;

    case 'DELETE':
      deleteUser(req, res);
      break;

    default:
      console.log(req.method);
      break;
  }
}
export async function getUserById(req, res) {
  try {
    const results = await query(
      `
      SELECT *
      FROM user
      WHERE user_id = ?
    `,
      req.query.id
    );
    return res.json(results[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { user } = req.body;
    const { id } = req.query;
    if (!id || !user) {
      return res.status(400).json({ message: '`id`,`user` are required' });
    }
    const array = [];
    Object.keys(user).forEach((element) => {
      array.push(user[element]);
    });
    const results = await query(
      `
      UPDATE user
      SET 
      first_name=?,
      last_name=?,
      email=?,
      phone1=?,
      phone2=?,
      password=? 
      WHERE user_id = ?
      `,
      array
    );
    return res.json({ message: 'user updated successfully', user });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: '`id` required' });
    }
    if (typeof parseInt(id.toString()) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' });
    }
    const results = await query(
      `
      DELETE FROM user
      WHERE user_id = ?
      `,
      req.query.id
    );
    res.json({ message: 'user deleted successfully' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
