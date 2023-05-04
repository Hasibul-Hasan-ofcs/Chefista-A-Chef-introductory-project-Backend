const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allChefs = require("./data/allchefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! Chefista.");
});

app.get("/allchefs", (req, res) => {
  res.send(allChefs);
});

app.listen(port, () => {
  console.log(`Chefista server-side app listening on port ${port}`);
});
