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

const labels = ["2017", "2018", "2019", "2020"];

const ChartBar = ({ data1 }) => {
  // console.log(data1);
  let arr = data1?.filter((c) => c._id.sex == "ذكور");
  //  .reduce((acc, val) => acc + val.total_theaters, 0);
  let arr17 = arr
    .filter((c) => c._id.year == 2017)
    .reduce((acc, val) => acc + val.total, 0);

  let arr18 = arr
    .filter((c) => c._id.year == 2018)
    .reduce((acc, val) => acc + val.total, 0);

  let arr19 = arr
    .filter((c) => c._id.year == 2019)
    .reduce((acc, val) => acc + val.total, 0);

  let arr20 = arr
    .filter((c) => c._id.year == 2020)
    .reduce((acc, val) => acc + val.total, 0);

  let arr4 = [arr17, arr18, arr19, arr20];
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
        label: "Males",
        data: arr4?.map((x) => x),
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
