const express = require("express");
const user=require('./routes/user')
const mongoconnect = require("./utils/db").mongoconnect;
const app = express();


app.use(user)


const port = 5000;

mongoconnect(() => {
  app.listen(5000, () => {
    console.log("running 5000");
  });
});

