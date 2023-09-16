const Theater = require("../../models/culture/Theater");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getTheaters = async (req, res) => {
  try {
    const theater = await Theater.aggregate([
      {
        $group: {
          _id: {
            year: "$العام",
            city: "$المحافظة",
          },
          total_theaters: {
            $sum: {
              $convert: {
                input: "$عدد المسارح",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(theater);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Theater.deleteMany();

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
        const createdData = await Theater.insertMany(data);
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
  getTheaters,
  importData,
};
