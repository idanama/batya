import { query } from '../../../../lib/db';

// main function to handle different request methods for route users/id/properties/id.

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getPropertiesByUserId(req, res);
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

export function getPropertiesByUserId(req, res) {}
