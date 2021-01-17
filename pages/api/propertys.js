export default function getAllPropertys(req, res) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'sry we only accept get requests' });
  }
  res.json({ hello: 'ALL propertys', method: req.method });
}
