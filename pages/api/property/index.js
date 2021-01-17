const controller = require('../../../controllers/propertyController');


export default function getPropertyById(req, res) {
  
  res.json({ byId: req.query.id, message:'getPropertyById'});
  
}

export  function handler(req, res) {
  switch (req.method) {
    case 'Post':
      addProperty(req, res);
      break;

    case 'Get':
      getProperty(req, res);
      break;

    case 'Patch':
      patchProperty(req, res);
      break;

    case 'Delete':
      deleteProperty(req, res);
      break;
    case 'GetAll':
      getAllPropertys(req, res);
      break;

    default:
      break;
  }
}
