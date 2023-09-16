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
const labels = [
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const TotalLine = ({ arr }) => {
  //console.log(arr);
  let arr1;
  let arr3 = arr.filter((a) => a.sex == "الجملة");
  //console.log(arr3);
  if (arr3[0]) {
    arr1 = Object.values(arr3[0])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr1.sort((a, b) => a - b));
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Populations",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: arr1?.map((x) => x),
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

export default TotalLine;
