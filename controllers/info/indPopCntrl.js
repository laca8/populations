const IndPop = require("../../models/info/IndPop");
const getKids = async (req, res) => {
  try {
    const kids = await IndPop.aggregate([
      {
        $group: {
          _id: {
            السنة: "$السنة",
            المحافظة: "$المحافظة",
            "الإعالة الصغرى": "$الإعالة الصغرى",
            "الإعالة الكبرى": "$الإعالة الكبرى",
            "الإعالة الكلية": "$الإعالة الكلية",
            "نسبة صغار السن": "$نسبة صغار السن",
            "نسبة النوع": "$نسبة النوع",
            "نسبة الحضر": "$نسبة الحضر",
            "الكثافة المأهولة": "$الكثافة المأهولة",
            "نسبة المساحة المأهولة للمساحة الكلية":
              "$نسبة المساحة المأهولة للمساحة الكلية",
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
