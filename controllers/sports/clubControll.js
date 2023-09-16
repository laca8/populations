const Club = require("../../models/sport/Club");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getClubs = async (req, res) => {
  try {
    const club = await Club.aggregate([
      {
        $group: {
          _id: {
            dep: "$اتبعية",
            city: "$المحافظه",
          },
          total: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json(club);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Club.deleteMany();

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
        const createdData = await Club.insertMany(data);
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
  getClubs,
  importData,
};
