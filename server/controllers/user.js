const getdb = require("../utils/db").getdb;
exports.getCustomer = async (req, res, next) => {
  const db = getdb();
  console.log(db);
  const customers = [{ id: 1, firstName: "ram", lastName: "mohan" }];
  await db.collection("data").insertOne({ customers });
  res.json(customers);

};
