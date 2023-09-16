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

const labels = ["2017", "2018", "2019", "2020", "2021"];

const ChartBar = ({ data1 }) => {
  // console.log(data1);
  let total17 = data1
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total_classes_private, 0);
  let total18 = data1
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total_classes_private, 0);
  let total19 = data1
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total_classes_private, 0);
  let total20 = data1
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total_classes_private, 0);
  let total21 = data1
    .filter((a) => a._id?.year == 2021)
    .reduce((acc, val) => acc + val.total_classes_private, 0);

  let totalF17 = data1
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total_classes_public, 0);
  let totalF18 = data1
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total_classes_public, 0);
  let totalF19 = data1
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total_classes_public, 0);
  let totalF20 = data1
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total_classes_public, 0);
  let totalF21 = data1
    .filter((a) => a._id?.year == 2021)
    .reduce((acc, val) => acc + val.total_classes_public, 0);

  let fullArr = [total17, total18, total19, total20, total21];
  let fullFArr = [totalF17, totalF18, totalF19, totalF20, totalF21];
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
        label: "Special",
        data: fullArr?.map((x) => x),
        borderColor: "darkslategray",
        backgroundColor: "darkslategray",
      },
      {
        label: "Public",
        data: fullFArr?.map((x) => x),
        borderColor: "lightblue",
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
