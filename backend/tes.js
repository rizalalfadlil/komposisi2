const Komposisi = require("./models");

async function getData() {
  const data = await Komposisi.findAll();
  console.log(data);
}
getData();
