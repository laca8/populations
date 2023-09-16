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
  let arr1 = data1.filter(
    (c) => c._id.sex == "ذكور" && c._id.residence == "حضر"
  );
  let arr2 = data1.filter(
    (c) => c._id.sex == "ذكور" && c._id.residence == "ريف"
  );
  //  .reduce((acc, val) => acc + val.total_theaters, 0);
  let arr17 = arr1
    .filter((c) => c._id.year == 2017)
    .reduce((acc, val) => acc + val.total, 0);

  let arr18 = arr1
    .filter((c) => c._id.year == 2018)
    .reduce((acc, val) => acc + val.total, 0);

  let arr19 = arr1
    .filter((c) => c._id.year == 2019)
    .reduce((acc, val) => acc + val.total, 0);

  let arr20 = arr1
    .filter((c) => c._id.year == 2020)
    .reduce((acc, val) => acc + val.total, 0);

  let arrR17 = arr2
    .filter((c) => c._id.year == 2017)
    .reduce((acc, val) => acc + val.total, 0);

  let arrR18 = arr2
    .filter((c) => c._id.year == 2018)
    .reduce((acc, val) => acc + val.total, 0);

  let arrR19 = arr2
    .filter((c) => c._id.year == 2019)
    .reduce((acc, val) => acc + val.total, 0);

  let arrR20 = arr2
    .filter((c) => c._id.year == 2020)
    .reduce((acc, val) => acc + val.total, 0);

  let arrUrban = [arr17, arr18, arr19, arr20];
  let arrRural = [arrR17, arrR18, arrR19, arrR20];
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
        label: "Males Urban",
        data: arrUrban?.map((x) => x),
        backgroundColor: "darkslategray",
      },

      {
        label: "Males Rural",
        data: arrRural?.map((x) => x),
        backgroundColor: "skyblue",
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
