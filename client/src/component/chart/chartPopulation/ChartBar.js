import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const Chart = ({ arr3, arr4, label1, label2, color1, color2 }) => {
  const arr = [...arr4, ...arr3];
  //console.log(arr);
  let arr1, arr2;
  if (arr[0] && arr[1]) {
    arr1 = Object.values(arr[0])
      .splice(1)
      .sort((a, b) => a - b);
    // console.log(arr1.sort((a, b) => a - b));
    arr2 = Object.values(arr[1])
      .splice(1)
      .sort((a, b) => a - b);
    // console.log(arr2.sort((a, b) => a - b));
  }

  const sex = ["2017", "2018", "2019"];
  let fields = {
    labels: sex.map((x) => x),
    datasets: [
      {
        label: label1,
        data: arr2?.map((x) => x),
        backgroundColor: color1,
      },
      {
        label: label2,
        data: arr1?.map((x) => x),
        backgroundColor: color2,
      },
    ],
  };
  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar data={fields} options={options} />
    </div>
  );
};

export default Chart;
