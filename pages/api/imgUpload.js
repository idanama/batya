const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.uploader.upload_stream(function (error, result) {
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
