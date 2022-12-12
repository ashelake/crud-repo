const express = require("express");

var jwt = require("jsonwebtoken");
const UserModal = require("../Modal/user.modal");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    var decoded = jwt.verify(token, "shhhhh");
    const { userID } = decoded;
    console.log(userID);
    req.body.userID = userID;
    const Data = await UserModal.findOne({ _id: userID });
    console.log("auth completed");
    next();
    // res.send("Logged In");
  } catch (err) {
    console.log(err);
    res.send("Please log");
  }
};
module.exports = { auth };
