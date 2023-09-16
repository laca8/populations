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

const labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const ChartBar = ({ arr }) => {
  //console.log(arr);
  let arr1, arr2, arr3;
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
        text: "Children Growth Rate",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Boys",
        data: arr1?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Girls",
        data: arr2?.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5) ",
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
