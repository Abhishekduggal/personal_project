const readSpecs = (req, res, next) => {
  const db = req.app.get("db");
  db.specifications
    .get_all_spec()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const createProduct = (req, res, next) => {
  let { productdescription, productcost } = req.body;

  const db = req.app.get("db");
  db.product
    .create_product([productdescription, parseFloat(productcost).toFixed(2)])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(arr);
    });
};

const createSpec = (req, res, next) => {
  let {
    productid,
    temp,
    productspeed,
    productdensity,
    rejects,
    waterpressure,
    drylevel,
    machinespeed
  } = req.body;

  const db = req.app.get("db");
  db.specifications
    .create_spec([
      productid,
      parseInt(temp, 10),
      parseInt(productspeed, 10),
      parseInt(productdensity, 10),
      parseInt(rejects, 10),
      parseInt(waterpressure, 10),
      parseFloat(drylevel).toFixed(2),
      parseInt(machinespeed, 10)
    ])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  readSpecs,
  createProduct,
  createSpec
};
