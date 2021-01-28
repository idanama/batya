const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;

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
      // imageUploadHandler(req, res);
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
  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      console.log(fields, files, err, 'formidable ==>    im here');
      const property = fields;
      const user_id = req.params && req.params.id ? req.params.id : 1;
      property.user_id = user_id;
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

      if (files) {
        Object.values(files).forEach(async (file) => {
          const uploadedImage = await cloudinary.uploader.upload(file.path, { folder: 'Batya' });
          console.log(uploadedImage);
          const results1 = await query(
            `INSERT INTO images (
              property_property_id,
              link1
            ) 
            VALUES (?,?)`,
            [property.id, uploadedImage.secure_url]
          );
        });
      }

      return res.json({ message: 'property added successfully', property });
    });
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
