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
const labels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const ChartLine = ({ data1 }) => {
  //males
  let total15 = data1
    .filter((a) => a._id?.العام == 2015)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total16 = data1
    .filter((a) => a._id?.العام == 2016)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total17 = data1
    .filter((a) => a._id?.العام == 2017)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total18 = data1
    .filter((a) => a._id?.العام == 2018)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total19 = data1
    .filter((a) => a._id?.العام == 2019)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total20 = data1
    .filter((a) => a._id?.العام == 2020)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total21 = data1
    .filter((a) => a._id?.العام == 2021)
    .reduce((acc, val) => acc + val.total_institute, 0);
  let total22 = data1
    .filter((a) => a._id?.العام == 2022)
    .reduce((acc, val) => acc + val.total_institute, 0);
  //females

  let fullArr = [total15, total16, total17, total18, total19, total20, total21];

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
        label: "Total",
        data: fullArr?.map((x) => x),
        borderColor: "#111",
        backgroundColor: "#111",
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
