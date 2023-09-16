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

const labels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const ChartBar = ({ data1 }) => {
  let total15 = data1
    .filter((a) => a._id?.العام == 2015)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total16 = data1
    .filter((a) => a._id?.العام == 2016)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total17 = data1
    .filter((a) => a._id?.العام == 2017)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total18 = data1
    .filter((a) => a._id?.العام == 2018)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total19 = data1
    .filter((a) => a._id?.العام == 2019)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total20 = data1
    .filter((a) => a._id?.العام == 2020)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total21 = data1
    .filter((a) => a._id?.العام == 2021)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let total22 = data1
    .filter((a) => a._id?.العام == 2022)
    .reduce((acc, val) => acc + val.total_classes, 0);
  let arrUrban = [
    total15,
    total16,
    total17,
    total18,
    total19,
    total20,
    total21,
  ];

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
        label: "Total",
        data: arrUrban?.map((x) => x),
        backgroundColor: "#111",
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
