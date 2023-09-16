const Area = require("../../models/inds/IndArea");
const getKids = async (req, res) => {
  try {
    const kids = await Area.aggregate([
      {
        $group: {
          _id: {
            الكلية: "$الكلية",
            المحافظة: "$المحافظة",
            "% المساحة": "$% المساحة",
            "المساحة المأهولة كم2": "$المساحة الكلية كم2",
            السكان: "$السكان",
            area: "$المساحة المأهولة كم2",
            السنة: "$السنة",
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
