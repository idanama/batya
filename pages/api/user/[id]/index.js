export default function getUserById(req, res) {
  res.json({ byId: req.query.id, message: 'getPropertyById' });
}
