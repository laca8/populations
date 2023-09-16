const PrimaryStudents = require("../../../models/edu/azhar/institutes");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getStudents = async (req, res) => {
  try {
    const students = await PrimaryStudents.aggregate([
      {
        $group: {
          _id: {
            residence: "$محل الاقامة",
            العام: "$العام",
            //  type_institute: "$type_institute",
            stage: "$المرحلة",
          },

          total_institute: {
            $sum: {
              $toInt: "$عدد المعاهد",
            },
          },
        },
      },
    ]);

    res.json(students);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const importData = async (req, res) => {
  const { json } = req.body;
  console.log(json);
  try {
    await PrimaryStudents.deleteMany();
    /*fs.readFile(json, "utf8", async function (err, data) {
      if (err) {
        console.log(err);
        //  res.json({ msg: err.message });
      }
      console.log(data);
      //const createdData = await PrimaryStudents.insertMany(data)
      // Display the file content
    });*/
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
        const createdData = await PrimaryStudents.insertMany(data);
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
  getStudents,
  importData,
};
