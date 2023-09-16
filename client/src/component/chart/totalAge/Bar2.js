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

const labels = ["2018", "2019", "2020", "2021", "2022"];

const ChartBar = ({ arr }) => {
  console.log(arr);
  let arr1, arr2;
  if (arr[0]) {
    arr1 = Object.values(arr ? arr[0] : null)
      .splice(2)
      .sort((a, b) => a - b);
    // console.log(arr1.sort((a, b) => a - b));
    arr2 = Object.values(arr[1])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr2.sort((a, b) => a - b));
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Urban && Rural",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Urban",
        data: arr1?.map((x) => x),
        backgroundColor: "yellow",
      },
      {
        label: "Rural",
        data: arr2?.map((x) => x),
        backgroundColor: "brown",
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
