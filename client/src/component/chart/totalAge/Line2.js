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
const labels = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];

const ChartLine = ({ arr }) => {
  //console.log(arr);
  let arr1, arr2;
  const arrB = arr.filter((a) => a.sex != "الجملة");
  //console.log(arrB);
  if (arr[0]) {
    arr1 = Object.values(arrB[0]).splice(2);
    //.sort((a, b) => a - b);

    // console.log(arr1);
    arr2 = Object.values(arrB[1]).splice(2);
    //.sort((a, b) => a - b);

    //console.log(arr2);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Male & Female",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Male",
        data: arr1?.map((x) => x),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Female",
        data: arr2?.map((x) => x),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
