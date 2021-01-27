const formidable = require('formidable');

import { query } from '../../lib/db';
import { parser } from './imgUpload';
import fs from 'fs';
// main function to handle different request methods for route api/properties.

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

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

// async function imageUploadHandler(req, res) {
//   parser.single('img');
// }

export async function addProperty(req, res) {
  try {
    parser.single('img')(req, res, (err) => {});
    const path = req.file.path;
    console.log(path);
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      console.log(fields, err, 'im here');
      const property = {};
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
    });

    if (err) console.log(err);
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
