const IncRate = require("../../models/info/IncRate");
const getKids = async (req, res) => {
  try {
    const kids = await IncRate.aggregate([
      {
        $group: {
          _id: {
            السنة: "$السنة",
            المحافظة: "$المحافظة",
            "معدل التزاحم": "$معدل التزاحم",
          },
        },
      },
    ]);

    res.json(kids);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getKids,
};
