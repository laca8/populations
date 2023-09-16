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
  let arrMales = data1
    .filter((c) => c._id.dependency == "خاص")
    .sort((a, b) => a._id.السنة - b._id.السنة);

  let arrFemales = data1
    .filter((c) => c._id.dependency == "حكومى")
    .sort((a, b) => a._id.السنة - b._id.السنة);

  let total = arrMales.reduce((acc, val) => acc + val.total, 0);
  //males
  let total17 = arrMales
    .filter((a) => a._id?.السنة == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total18 = arrMales
    .filter((a) => a._id?.السنة == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total19 = arrMales
    .filter((a) => a._id?.السنة == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total20 = arrMales
    .filter((a) => a._id?.السنة == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total21 = arrMales
    .filter((a) => a._id?.السنة == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);
  let total22 = arrMales
    .filter((a) => a._id?.السنة == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);
  //females
  let totalF17 = arrFemales
    .filter((a) => a._id?.السنة == 2017)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF18 = arrFemales
    .filter((a) => a._id?.السنة == 2018)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF19 = arrFemales
    .filter((a) => a._id?.السنة == 2019)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF20 = arrFemales
    .filter((a) => a._id?.السنة == 2020)
    .reduce((acc, val) => acc + val.total_students, 0);

  let totalF21 = arrFemales
    .filter((a) => a._id?.السنة == 2021)
    .reduce((acc, val) => acc + val.total_students, 0);
  let totalF22 = arrFemales
    .filter((a) => a._id?.السنة == 2022)
    .reduce((acc, val) => acc + val.total_students, 0);

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
        label: "Special",
        data: fullArr?.map((x) => x),
        borderColor: "darkslategray",
        backgroundColor: "darkslategray",
      },
      {
        label: "Public",
        data: fullFArr?.map((x) => x),
        borderColor: "lightblue",
        backgroundColor: "lightblue",
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
