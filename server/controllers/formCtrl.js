const read = (req, res, next) => {
  const db = req.app.get("db");
  db.get_all_forms()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  read
};
