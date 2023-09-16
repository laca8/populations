const CrowRate = require("../../models/info/CroRate");
const getKids = async (req, res) => {
  try {
    const kids = await CrowRate.aggregate([
      {
        $group: {
          _id: {
            السنة: "$السنة",
            المحافظة: "$المحافظة",
            "متوسط حجم الأسرة": "$متوسط حجم الأسرة",
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
