import { query } from '../../../../lib/db';

// main function to handle different request methods for route properties/rent.

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      addPropertyForRent(req, res);
      break;
    default:
      console.log('Method Requested:', req.method);
      break;
  }
}
async function addPropertyForRent(req, res) {
  const { rentData } = req.body;

  try {
    if (!rentData) {
      return res.status(400).json({ message: 'must send a rentData' });
    }
    const array = [];
    Object.keys(rentData).forEach((element) => {
      array.push(rentData[element]);
    });
    const results = await query(
      `
      INSERT INTO rent_add (     
      whole_or_room,
      pets,
      price_month,
      deposit,
      date_available,
      user_user_id,
      property_property_id,
      rooms_busy
      )
      VALUES (?,?,?,?,?,?,?,?)
      `,
      array
    );
    console.log(results);
    rentData.id = results.insertId;
    return res.json({ message: 'Property Listed for Rent' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
