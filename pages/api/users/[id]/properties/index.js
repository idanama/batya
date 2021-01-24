import { query } from '../../../../../lib/db';

// main function to handle different request methods for route users/id/properties/id.

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getPropertiesByUserId(req, res);
      break;

    case 'POST':
      addPropertyToUser(req, res);
      break;
    case 'PATCH':
      toggleLikePropertyToUser(req, res);
      break;
    case 'DELETE':
      removePropertyFromUser(req, res);
      break;

    default:
      console.log(req.method);
      break;
  }
}

export async function getPropertiesByUserId(req, res) {
  try {
    console.log(req.query.id);
    const results = await query(
      `
      SELECT *
      FROM property
      WHERE user_id = ?
    `,
      req.query.id
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function toggleLikePropertyToUser(req, res) {
  try {
    const queryResults = await query(
      `
      SELECT *
      FROM TABLENAME
      WHERE user_id = ? AND property_id =?
    `,
      [req.query.id, req.body.propertyId]
    );
    if (queryResults.length > 0) {
      const updateResults = await query(
        `
      DELETE 
      FROM TABLENAME
      WHERE user_id = ? AND property_id =?
    `,
        [req.query.id, req.body.propertyId]
      );
      return res.json({ message: 'Property removed from user Successfully', updateResults });
    } else {
      const insertResults = await query(
        `
      INSERT INTO TABLENAME 
      (user_id,property_id)
      VALUES (?,?)
    `,
        [req.query.id, req.body.propertyId]
      );
      return res.json({ message: 'Property added to user Successfully', insertResults });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
