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
  // console.log(data1);
  let arr1 = data1.filter((c) => c._id.النوع == "بنون");
  let arr2 = data1.filter((c) => c._id.النوع == "بنات");

  let arr15 = arr1
    .filter((c) => c._id.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr16 = arr1
    .filter((c) => c._id.العام == 2016)
    .reduce((acc, val) => acc + val.total_students, 0);
  let arr17 = arr1
    .filter((c) => c._id.العام == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr18 = arr1
    .filter((c) => c._id.العام == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr19 = arr1
    .filter((c) => c._id.العام == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr20 = arr1
    .filter((c) => c._id.العام == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr21 = arr1
    .filter((c) => c._id.العام == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arr22 = arr1
    .filter((c) => c._id.العام == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR15 = arr2
    .filter((c) => c._id.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR16 = arr2
    .filter((c) => c._id.العام == 2016)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR17 = arr2
    .filter((c) => c._id.العام == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR18 = arr2
    .filter((c) => c._id.العام == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR19 = arr2
    .filter((c) => c._id.العام == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR20 = arr2
    .filter((c) => c._id.العام == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR21 = arr2
    .filter((c) => c._id.العام == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrR22 = arr2
    .filter((c) => c._id.العام == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);

  let arrUrban = [arr15, arr17, arr17, arr18, arr19, arr20, arr21];
  let arrRural = [arrR15, arrR17, arrR17, arrR18, arrR19, arrR20, arrR21];
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
        label: "Male",
        data: arrUrban?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },

      {
        label: "Female",
        data: arrRural?.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
