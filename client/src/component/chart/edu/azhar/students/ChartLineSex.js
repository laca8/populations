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
const labels = ["2015", "2017", "2017", "2018", "2019", "2020", "2021"];

const ChartLine = ({ data1 }) => {
  //console.log(arr1);
  let arrMales = data1
    .filter((c) => c._id.النوع == "بنون")
    .sort((a, b) => a._id.العام - b._id.العام);
  //console.log(arrMales);
  let arrFemales = data1
    .filter((c) => c._id.النوع == "بنات")
    .sort((a, b) => a._id.العام - b._id.العام);

  let total = arrMales.reduce((acc, val) => acc + val.total, 0);
  //males
  let total15 = arrMales
    .filter((a) => a._id?.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total16 = arrMales
    .filter((a) => a._id?.العام == 2016)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total17 = arrMales
    .filter((a) => a._id?.العام == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total18 = arrMales
    .filter((a) => a._id?.العام == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total19 = arrMales
    .filter((a) => a._id?.العام == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total20 = arrMales
    .filter((a) => a._id?.العام == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total21 = arrMales
    .filter((a) => a._id?.العام == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total22 = arrMales
    .filter((a) => a._id?.العام == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);
  //females
  let totalF15 = arrFemales
    .filter((a) => a._id?.العام == 2015)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF16 = arrFemales
    .filter((a) => a._id?.العام == 2016)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF17 = arrFemales
    .filter((a) => a._id?.العام == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF18 = arrFemales
    .filter((a) => a._id?.العام == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF19 = arrFemales
    .filter((a) => a._id?.العام == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF20 = arrFemales
    .filter((a) => a._id?.العام == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);

  let totalF21 = arrFemales
    .filter((a) => a._id?.العام == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF22 = arrFemales
    .filter((a) => a._id?.العام == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);

  let fullArr = [total15, total16, total17, total18, total19, total20, total21];
  let fullFArr = [
    total15,
    total16,
    totalF17,
    totalF18,
    totalF19,
    totalF20,
    totalF21,
  ];

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
        label: "Males",
        data: fullArr?.map((x) => x),
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: fullFArr?.map((x) => x),
        borderColor: "rgba(255, 99, 132, 0.5)",
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
