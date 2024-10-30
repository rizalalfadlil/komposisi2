const { Komposisi, Umur } = require("../models");

const getAll = async (req, res) => {
  try {
    const komposisiData = await Komposisi.findAll();
    const umurData = await Umur.findAll();
    res.json({ komposisi: komposisiData, umur: umurData[0] });
  } catch (e) {
    console.error(e);
    res.send("gagal");
  }
};

const update = async (req, res) => {
  const { komposisi, umur } = req.body;
  try {
    komposisi.forEach(async (data) => {
      const komposisiData = await Komposisi.findByPk(data.id);
      await komposisiData.update({
        produk: data.produk,
        admin: data.admin,
        ff: data.ff,
      });
      const umurData = await Umur.findByPk(1);
      umurData.update({ umur });
    });
    res.send("berhasil");
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};
module.exports = { getAll, update };
