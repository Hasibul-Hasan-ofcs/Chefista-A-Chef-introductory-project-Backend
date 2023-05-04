const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allChefs = require("./data/allchefs.json");
const recipesJSON = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! Chefista.");
});

app.get("/allchefs", (req, res) => {
  res.send(allChefs);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const { recipesData } = recipesJSON;
  const foundObject = recipesData.find((elm) => elm._id === id);
  const { recipes } = foundObject;
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`Chefista server-side app listening on port ${port}`);
});
