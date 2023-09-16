const IndStudent = require("../../models/edu/IndStudent");
var fs = require("fs");
const request = require("request");
const path = require("path");
const getStudents = async (req, res) => {
  try {
    const students = await IndStudent.aggregate([
      {
        $group: {
          _id: {
            النوع: "$النوع",
            dependency: "$تبعية المدرسة",
            residence: "$محل الإقامة",
            السنة: "$السنة",
          },

          total_students: {
            $sum: {
              $toInt: "$عدد التلاميذ",
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
const getStuByCity = async (req, res) => {
  try {
    const students = await IndStudent.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $group: {
          _id: {
            النوع: "$النوع",
            dependency: "$تبعية المدرسة",
            residence: "$محل الإقامة",
            السنة: "$السنة",
          },

          total_students: {
            $sum: {
              $toInt: "$عدد التلاميذ",
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
    await IndStudent.deleteMany();

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
        const createdData = await IndStudent.insertMany(data);
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
  getStuByCity,
  importData,
};
