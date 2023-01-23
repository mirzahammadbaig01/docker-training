const { response } = require("express");
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.get("/", async (req, res) => {
  const db = new MongoClient("mongodb://admin:admin@localhost:27018");
  if (await db.connect()) {
    console.log("connected");
    console.log(db);
  }
  res.send("hello");
});
app.listen(3000, () => {
  console.log("App is listing on this post 3000");
});
