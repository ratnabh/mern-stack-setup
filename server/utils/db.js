const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Mongoclient = mongodb.MongoClient;
let db;
const mongoconnect = (callback) => {
  Mongoclient
    .connect(
        "mongodb+srv://ananya:LDO9F8tc1Yq88dcu@cluster0-bxzzc.mongodb.net/shop?retryWrites=true&w=majority",
      { useNewUrlParser: true ,useUnifiedTopology:true},
    )
    .then((result) => {
      console.log("connected");
      db=result.db()
      callback(result);
    })
    .catch((err) => console.log(err));
};
const getdb = () => {
  if (db) {
    return db;
  } else {
    throw "No db";
  }
};
exports.mongoconnect = mongoconnect;
exports.getdb = getdb;
