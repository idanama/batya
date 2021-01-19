import { query } from '../../../../lib/db';

// main function to handle different request methods for route properties/id.

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      addPropertyForSale(req, res);
      break;
    default:
      console.log('Method Requested:', req.method);
      break;
  }
}
async function addPropertyForSale(req, res) {
  const { sellData } = req.body;

  try {
    if (!sellData) {
      return res.status(400).json({ message: 'must send a sellData' });
    }
    const array = [];
    Object.keys(sellData).forEach((element) => {
      array.push(sellData[element]);
    });
    const results = await query(
      `
      INSERT INTO sell_add (
      date_added,
      price,
      user_user_id,
      property_property_id
      )
      VALUES (?,?,?,?)
      `,
      array
    );
    console.log(results);
    sellData.id = results.insertId;
    return res.json({ message: 'Property Listed for Sell' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
