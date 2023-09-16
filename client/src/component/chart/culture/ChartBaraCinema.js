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

const labels = ["2014", "2018", "2019"];

const ChartBar = ({ data1 }) => {
  let arr1 = data1
    .filter((c) => c._id.year == 2014)
    .reduce((acc, val) => acc + val.total_cinema, 0);
  let arr2 = data1
    .filter((c) => c._id.year == 2018)
    .reduce((acc, val) => acc + val.total_cinema, 0);
  let arr3 = data1
    .filter((c) => c._id.year == 2019)
    .reduce((acc, val) => acc + val.total_cinema, 0);
  let arr4 = [arr1, arr2, arr3];
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
        label: "Total Cinemas",
        data: arr4?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
