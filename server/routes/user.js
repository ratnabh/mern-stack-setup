const express = require("express");
const router = express.Router();
const userConstroller=require('../controllers/user')
router.get("/api/customers", userConstroller.getCustomer);
module.exports=router
