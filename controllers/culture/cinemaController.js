const Cinema = require("../../models/culture/Cimena");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getCinema = async (req, res) => {
  try {
    const cinema = await Cinema.aggregate([
      {
        $group: {
          _id: {
            year: "$العام",
            city: "$المحافظة",
          },
          total_cinema: {
            $sum: {
              $convert: {
                input: "$عدد السينمات",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(cinema);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Cinema.deleteMany();

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
        const createdData = await Cinema.insertMany(data);
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
  getCinema,
  importData,
};
