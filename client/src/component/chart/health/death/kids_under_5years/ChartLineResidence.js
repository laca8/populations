import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["2017", "2018", "2019", "2020"];

const ChartLine = ({ data1 }) => {
  //console.log(arr1);
  let arrUrban = data1
    .filter((c) => c._id.residence == "حضر")
    .sort((a, b) => a._id.year - b._id.year);
  let arrRural = data1
    .filter((c) => c._id.residence == "ريف")
    .sort((a, b) => a._id.year - b._id.year);

  //urban
  let total17 = arrUrban
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total, 0);
  let total18 = arrUrban
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total, 0);
  let total19 = arrUrban
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total, 0);
  let total20 = arrUrban
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total, 0);
  //rural
  let totalF17 = arrRural
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total, 0);
  let totalF18 = arrRural
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total, 0);
  let totalF19 = arrRural
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total, 0);
  let totalF20 = arrRural
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total, 0);

  let fullArr = [total17, total18, total19, total20];
  let fullFArr = [totalF17, totalF18, totalF19, totalF20];

  const options = {
    responsive: true,
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
        label: "Urban",
        data: fullArr?.map((x) => x),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "Rural",
        data: fullFArr?.map((x) => x),
        borderColor: "brown",
        backgroundColor: "brown",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
