import { query } from '../../../lib/db';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getPropertyById(req, res);
      break;

    case 'PUT':
      updateProperty(req, res);
      break;

    case 'DELETE':
      deleteProperty(req, res);
      break;

    default:
      console.log('Method Requested:', req.method);
      break;
  }
}
export async function getPropertyById(req, res) {
  try {
    const results = await query(
      `
      SELECT *
      FROM property
      WHERE property_id = ?
    `,
      req.query.id
    );
    return res.json(results[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function updateProperty(req, res) {
  try {
    const { property } = req.body;
    const { id } = req.query;
    if (!id || !property) {
      return res.status(400).json({ message: '`id`,`property` are required' });
    }
    const array = [];
    console.log(property);
    Object.keys(property).forEach((element) => {
      array.push(property[element]);
    });
    const results = await query(
      `
      UPDATE property
      SET    
      date_registered=?,
      sqm=?,
      beds=?,
      baths=?,
      year_built=?,
      cooling=?,
      heating=?,
      furnished=?,
      details=?,
      arnona=?,
      user_id=?,
      parking_name=?,
      view=?,
      total_floors=?,
      apartment_floor=?,
      lot_size=?,
      rooms=?,
      balconies=?,
      shelter=?,
      elevator=?,
      renovated=?,
      solar_water=?,
      wheelchair=?,
      storage=?,
      vaadbait=?,
      type_type=?
      WHERE property_id = ?
      `,
      array
    );
    return res.json({ message: 'property updated successfully', property });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function deleteProperty(req, res) {
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
      DELETE FROM property
      WHERE property_id = ?
      `,
      req.query.id
    );
    res.json({ message: 'property deleted successfully' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
