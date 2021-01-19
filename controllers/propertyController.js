// POST Property

export function addProperty(req, res, next) {
  const newProperty = {
    id: 21,
    date_registered: '01/01/21',
    square_meters: '120',
    beds: '4',
    baths: '3',
    year_built: '2001',
    cooling: 'airCondition',
    heating: 'airCondition',
    laundry: 'true',
    parking: 'false',
    view: 'centralPark',
    arnona: '120',
    details: 'none',
    type: 'appartment',
  };
  try {
    req.send(newProperty);
  } catch (error) {
    console.log(error);
  }
}

// Read Property
export function getProperty(req, res, next) {
  try {
    res.statusCode = 200;
    res.json({ property });
  } catch (error) {
    console.log(error);
  }
}

// Update Property
export function patchProperty(req, res, next) {
  try {
    const { propertyId } = req.params;
    propertys = propertys.filter((u) => u.propertyId !== propertyId);
    //add code to update Property from DB
  } catch (error) {
    console.log(error);
  }
}

// Delete Property
export function deleteProperty(req, res, next) {
  try {
    const { propertyId } = req.params;
    propertys = propertys.filter((u) => u.propertyId !== propertyId);
    //add Code to remove Property from DB
  } catch (error) {
    console.log(error);
  }
}

// Get ALL Listings
export function getAllPropertys(req, res, next) {
  try {
    res.statusCode = 200;
    res.json({ ...propertys });
  } catch (error) {
    console.log(error);
  }
}
