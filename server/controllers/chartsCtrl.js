const readRejects = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_rejects()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const readHrUsersFacility = (req, res, next) => {
  const db = req.app.get("db");
  db.charts
    .get_hrUsers_facility()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  readRejects,
  readHrUsersFacility
};
