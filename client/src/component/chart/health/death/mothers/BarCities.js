import React from "react";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "aswan",
  "sohag",
  "assiut",
  "beni suef",
  "fayoum",
  "alexandria",
  "portsaid",
  "suez",
  "matrouh",
  "red sea",
  "dakahlia",
  "ismailia",
  "luxor",
  "cairo",
  "giza",
  "sharkia",
  "gharbiya",
  "menoufia",
  "minya",
  "south sinai",
  "north sinai",
  "damieeeta",
  "qena",
  "kafr al-sheikh",
  "al-Qalubiah",
  "new valley",
  "beheira",
];

const ChartBar = ({ data1 }) => {
  let arrAs = data1
    .filter((c) => c._id.city == "اسوان")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSo = data1
    .filter((c) => c._id.city == "سوهاج ")
    .sort((a, b) => a._id.year - b._id.year);
  let arrAss = data1
    .filter((c) => c._id.city == "اسيوط")
    .sort((a, b) => a._id.year - b._id.year);
  let arrBeni = data1
    .filter((c) => c._id.city == "بنى سويف")
    .sort((a, b) => a._id.year - b._id.year);
  let arrFa = data1
    .filter((c) => c._id.city == "الفيوم")
    .sort((a, b) => a._id.year - b._id.year);
  let arrAlex = data1
    .filter((c) => c._id.city == "الاسكندرية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrBort = data1
    .filter((c) => c._id.city == "بور سعيد ")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSuez = data1
    .filter((c) => c._id.city == "السويس")
    .sort((a, b) => a._id.year - b._id.year);
  let arrMat = data1
    .filter((c) => c._id.city == "مطروح")
    .sort((a, b) => a._id.year - b._id.year);
  let arrRed = data1
    .filter((c) => c._id.city == "البحر الاحمر")
    .sort((a, b) => a._id.year - b._id.year);
  let arrDa = data1
    .filter((c) => c._id.city == "الدقهلية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrIs = data1
    .filter((c) => c._id.city == "الاسماعيلية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrLu = data1
    .filter((c) => c._id.city == "الاقصر")
    .sort((a, b) => a._id.year - b._id.year);
  let arrCa = data1
    .filter((c) => c._id.city == "القاهرة")
    .sort((a, b) => a._id.year - b._id.year);
  let arrGi = data1
    .filter((c) => c._id.city == "الجيزة")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSh = data1
    .filter((c) => c._id.city == "الشرقية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrGa = data1
    .filter((c) => c._id.city == "الغربية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrMf = data1
    .filter((c) => c._id.city == "المنوفية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrMin = data1
    .filter((c) => c._id.city == "المنيا")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSouth = data1
    .filter((c) => c._id.city == "جنوب سيناء")
    .sort((a, b) => a._id.year - b._id.year);
  let arrNorth = data1
    .filter((c) => c._id.city == "شمال سيناء")
    .sort((a, b) => a._id.year - b._id.year);
  let arrDom = data1
    .filter((c) => c._id.city == "دمياط")
    .sort((a, b) => a._id.year - b._id.year);
  let arrQena = data1
    .filter((c) => c._id.city == "قنا")
    .sort((a, b) => a._id.year - b._id.year);
  let arrKafr = data1
    .filter((c) => c._id.city == "كفر الشيخ")
    .sort((a, b) => a._id.year - b._id.year);
  let arrQ = data1
    .filter((c) => c._id.city == "القليوبية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrVall = data1
    .filter((c) => c._id.city == "الوادى الجديد")
    .sort((a, b) => a._id.year - b._id.year);
  let arrBe = data1
    .filter((c) => c._id.city == "البحيرة")
    .sort((a, b) => a._id.year - b._id.year);

  let arr4 = [
    ...arrAs,
    ...arrSo,
    ...arrAss,
    ...arrBeni,
    ...arrFa,
    ...arrAlex,
    ...arrBort,
    ...arrSuez,
    ...arrMat,
    ...arrRed,
    ...arrDa,
    ...arrIs,
    ...arrLu,
    ...arrCa,
    ...arrGi,
    ...arrSh,
    ...arrGa,
    ...arrMf,
    ...arrMin,
    ...arrSouth,
    ...arrNorth,
    ...arrDom,
    ...arrQena,
    ...arrKafr,
    ...arrQ,
    ...arrVall,
    ...arrBe,
  ];
  const arr17 = arr4.filter((a) => a._id.year == 2017);
  const arr18 = arr4.filter((a) => a._id.year == 2018);
  const arr19 = arr4.filter((a) => a._id.year == 2019);
  const options = {
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "2017",
        data: arr17?.map((x) => x.total),
        backgroundColor: "brown",
      },
      {
        label: "2018",
        data: arr18?.map((x) => x.total),
        backgroundColor: "yellow",
      },
      {
        label: "2019",
        data: arr19?.map((x) => x.total),
        backgroundColor: "lightblue",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartBar;
