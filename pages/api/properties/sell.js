import { query } from '../../../lib/db';

// main function to handle GET ALL properties for Sell !

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getAllPropertiesForSell(req, res);
    default:
      console.log('Method Requested:', req.method);
      break;
  }
}

async function getAllPropertiesForSell(req, res) {
  try {
    const results = await query(`
      SELECT * FROM sell_add
      ORDER BY property_property_id ASC
  `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
