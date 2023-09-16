const SuppInd = require("../../models/info/SuppInd");
const getKids = async (req, res) => {
  try {
    const kids = await SuppInd.aggregate([
      {
        $group: {
          _id: {
            "نسبة كبار السن (65 فأكثر)": "$نسبة كبار السن (65 فأكثر)",
            "الجهاز المركزى للتعبئة العامة والإحصاء":
              "$الجهاز المركزى للتعبئة العامة والإحصاء",
            "نسبة صغار السن(أقل من 15)": "$نسبة صغار السن(أقل من 15)",
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
