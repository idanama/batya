// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.array('theFiles'));

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.uploader.upload_stream(function (error, result) {
  console.log(result);
  return result;
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Batya',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => {
      return `${file.originalname}`;
    },
  },
});

export const parser = multer({ storage: storage });
