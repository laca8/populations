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
const labels = ["2017", "2018", "2019", "2020", "2021"];

const ChartLine = ({ data1 }) => {
  //console.log(arr1);

  //males
  let total17 = data1
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total_classes_urban, 0);
  let total18 = data1
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total_classes_urban, 0);
  let total19 = data1
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total_classes_urban, 0);
  let total20 = data1
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total_classes_urban, 0);
  let total21 = data1
    .filter((a) => a._id?.year == 2021)
    .reduce((acc, val) => acc + val.total_classes_urban, 0);

  let totalF17 = data1
    .filter((a) => a._id?.year == 2017)
    .reduce((acc, val) => acc + val.total_classes_rural, 0);
  let totalF18 = data1
    .filter((a) => a._id?.year == 2018)
    .reduce((acc, val) => acc + val.total_classes_rural, 0);
  let totalF19 = data1
    .filter((a) => a._id?.year == 2019)
    .reduce((acc, val) => acc + val.total_classes_rural, 0);
  let totalF20 = data1
    .filter((a) => a._id?.year == 2020)
    .reduce((acc, val) => acc + val.total_classes_rural, 0);
  let totalF21 = data1
    .filter((a) => a._id?.year == 2021)
    .reduce((acc, val) => acc + val.total_classes_rural, 0);

  let fullArr = [total17, total18, total19, total20, total21];
  let fullFArr = [totalF17, totalF18, totalF19, totalF20, totalF21];

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
        label: "Urban",
        data: fullArr?.map((x) => x),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "Rural",
        data: fullFArr?.map((x) => x),
        borderColor: "brown",
        backgroundColor: "brown",
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
