const PopulationMiddle = require("../../models/populations/PopulationMiddleYear");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getPopulations = async (req, res) => {
  try {
    const populations = await PopulationMiddle.aggregate([
      {
        $match: { Govern: req.params.city },
      },
      {
        $group: {
          _id: {
            Govern: "$Govern",
            Sex: "$Sex",
            Urban: "$Urban",
          },
          total_2017: {
            $sum: "$2017",
          },
          total_2018: {
            $sum: {
              $toInt: "$2018",
            },
          },
          total_2019: {
            $sum: "$2019",
          },
        },
      },
    ]);

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await PopulationMiddle.deleteMany();

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
        const createdData = await PopulationMiddle.insertMany(data);
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
  getPopulations,
  importData,
};
