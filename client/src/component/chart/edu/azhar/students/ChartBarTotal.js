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
  const total15 = data1
    .filter((x) => x._id.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total16 = data1
    .filter((x) => x._id.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total17 = data1
    .filter((x) => x._id.العام == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total18 = data1
    .filter((x) => x._id.العام == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total19 = data1
    .filter((x) => x._id.العام == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total20 = data1
    .filter((x) => x._id.العام == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total21 = data1
    .filter((x) => x._id.العام == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);
  const total22 = data1
    .filter((x) => x._id.العام == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);
  const arr = [total15, total16, total17, total18, total19, total20, total21];
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
        data: arr?.map((x) => x),
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
