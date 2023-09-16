const Agri = require("../../../models/edu/schools/Secondary");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getSchools = async (req, res) => {
  try {
    const schools = await Agri.aggregate([
      {
        $group: {
          _id: {
            year: "$العام",
          },

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);

    res.json(schools);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getSchoolsByCity = async (req, res) => {
  try {
    const schools = await Agri.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      {
        $group: {
          _id: {
            year: "$العام",
          },

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);

    res.json(schools);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await Agri.deleteMany();

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
        const createdData = await Agri.insertMany(data);
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
  getSchools,
  getSchoolsByCity,
  importData,
};
