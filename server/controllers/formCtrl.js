const read = (req, res, next) => {
  const db = req.app.get("db");
  db.forms
    .get_all_forms()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const create = (req, res, next) => {
  let {
    machinetype,
    shift,
    shopordernumber,
    productid,
    workstation,
    temp,
    productspeed,
    hrid,
    productdensity,
    rejects,
    waterpressure,
    drylevel,
    issuelog,
    machineoperating,
    comments,
    issuecategory,
    issueresolution,
    packagingissue,
    training,
    trainingcategory,
    imgurl
  } = req.body;

  const db = req.app.get("db");
  console.log(req.body);
  db.forms
    .create_form([
      machinetype,
      shift,
      parseInt(shopordernumber, 10),
      parseInt(productid, 10),
      workstation,
      parseInt(temp, 10),
      parseInt(productspeed, 10),
      parseInt(hrid, 10),
      parseInt(productdensity, 10),
      parseInt(rejects),
      parseInt(waterpressure),
      parseFloat(drylevel).toFixed(2),
      issuelog,
      Boolean(machineoperating),
      comments,
      issuecategory,
      issueresolution,
      Boolean(packagingissue),
      Boolean(training),
      trainingcategory,
      imgurl
    ])
    .then(response => {
      // console.log("Createform response=>>", response);
      res.status(200).send(response);
    })
    .catch(err => {
      // console.log("log error abhi:", err);
      res.status(500).send(err);
    });
};

const deleteForm = (req, res, next) => {
  let { formid } = req.params;

  const db = req.app.get("db");
  console.log(formid);

  db.forms
    .delete_form(formid)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  read,
  create,
  deleteForm
};
