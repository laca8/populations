const Mother = require("../../models/health/MotherDeathPlace");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getMothers = async (req, res) => {
  try {
    const mothers = await Mother.aggregate([
      {
        $group: {
          _id: {
            year: "$السنة",
            city: "$المحافظة",
          },
          total: {
            $sum: "$وفيات الامهات وفقا لمكان الوفاه",
          },
        },
      },
    ]);

    res.json(mothers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Mother.deleteMany();

    request(
      {
        url: json,
        json: true,
      },
      async (err, res, data) => {
        if (err) {
          console.log(err);
          //res.send({ msg: err.message });
        }
        //console.log(data);
        const createdData = await Mother.insertMany(data);
        //res.send("data imported");
      }
    );
    res.json("Data Imported");

    //console.log("Data Imported");
  } catch (err) {
    //console.error(`${err}`);
    res.json({ msg: err.message });
    process.exit(1);
  }
};
module.exports = {
  getMothers,
  importData,
};
