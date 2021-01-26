import { query } from '../../lib/db';

// main function to handle different request methods for route api/properties.

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      addProperty(req, res);
      break;

    case 'GET':
      getProperties(req, res);
      break;

    default:
      console.log(req.method);
      break;
  }
}

export async function addProperty(req, res) {
  const { property } = req.body;
  console.log(Object.keys(property).join(', '));
  console.log(Object.values(property));
  console.log(
    Object.keys(property)
      .map(() => '? ')
      .join(',')
  );

  try {
    if (!property) {
      return res.status(400).json({ message: 'must send a property' });
    }
    const results = await query(
      `
      INSERT INTO property (
        ${Object.keys(property).join(', ')}
     )
      VALUES (${Object.keys(property)
        .map(() => '? ')
        .join(',')})
      `,
      Object.values(property)
    );

    property.id = results.insertId;
    return res.json({ message: 'property added successfully', property });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function getProperties(req, res) {
  try {
    const results = await query(`
      SELECT * FROM property
      ORDER BY property_id ASC
  `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
