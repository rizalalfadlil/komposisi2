const express = require("express");
const { getAll, update } = require("./controllers/controller");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/get-data", getAll);
app.post("/update-data", update)

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
