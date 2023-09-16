const Area = require("../../models/info/Area");
const getKids = async (req, res) => {
  try {
    const kids = await Area.aggregate([
      {
        $group: {
          _id: {
            الكلية: "$الكلية",
            المحافظة: "$المحافظة",
            "% المساحة": "$% المساحة",
            area: "$المســاحة كم)1( 2",
            الســكــان: "$الســكــان",
            "الكثافة المأهولة": "$الكثافة المأهولة",
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
