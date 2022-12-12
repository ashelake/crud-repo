const { Router } = require("express");
const express = require("express");
const { auth } = require("../middleware/auth");
const DataModal = require("../Modal/data.modal");

const Datarouter = Router();

Datarouter.get("/data", async (req, res) => {
  const data = await DataModal.find();
  res.send(data);
});

Datarouter.post("/data/post", auth, async (req, res) => {
  await DataModal.insertMany(req.body);
  console.log(req.body);
  res.send("Data");
});
Datarouter.delete("/data/:id", auth, async (req, res) => {
  console.log(req.body.userID);
  let fordelete = req.params.id;

  let deleteObj = await DataModal.findOne({ _id: fordelete });
  console.log(deleteObj.userID);
  if (req.body.userID == deleteObj.userID) {
    let result = await DataModal.deleteMany({ _id: req.params.id });
    console.log(result);
    res.send("Data");
  } else {
    res.send("You are not authorised");
  }
});

Datarouter.patch("/data/patch/:id", auth, async (req, res) => {
  let foredit = req.params.id;
  let editObj = await DataModal.findOne({ _id: foredit });
  let Title = req.body;
  if (req.body.userID == editObj.userID) {
    await DataModal.updateOne(
      { _id: req.params.id },
      { $set: { title: Title.title } }
    );
    console.log(req.body);
    res.send("Data");
  } else {
    res.send("Not Authorised");
  }
});
module.exports = Datarouter;
