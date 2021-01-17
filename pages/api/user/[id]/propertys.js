export default function getAllPropertysByUserId(req, res) {
  res.send({ byId: req.query.id, message: 'getAllPropertysByUserId' });
}
