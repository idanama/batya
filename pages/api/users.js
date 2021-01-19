import { query } from '../../lib/db';

// main function to handle different request methods for route api/users.

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      addUser(req, res);
      break;

    case 'GET':
      getUsers(req, res);
      break;

    default:
      console.log(req.method);
      break;
  }
}

export async function addUser(req, res) {
  const { user } = req.body;

  try {
    if (!user) {
      return res.status(400).json({ message: 'must send a user' });
    }
    const array = [];
    Object.keys(user).forEach((element) => {
      array.push(user[element]);
    });
    const results = await query(
      `
      INSERT INTO user (
      first_name,
      last_name,
      email,
      phone1,
      phone2,
      password)
      VALUES (?,?,?,?,?,?)
      `,
      array
    );
    console.log(results);
    user.id = results.insertId;
    return res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function getUsers(req, res) {
  try {
    const results = await query(`
      SELECT * FROM user
      ORDER BY first_name ASC
  `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
