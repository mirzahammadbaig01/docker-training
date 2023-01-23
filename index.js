const { response } = require("express");
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.listen(3000, () => {
  console.log("App is listing on this post 3000");
});
app.get("/", (req, res) => {
  MongoClient.connect("mongodb://admin:admin@localhost:27017"),
    function (err, client) {
      if (err) throw err;
      console.log(client);
      res.send("hello");
    };
});
