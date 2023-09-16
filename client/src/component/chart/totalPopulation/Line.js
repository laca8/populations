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

const ChartLine = ({ arr }) => {
  let arr1, arr2;
  let arr3 = arr
    .filter((a) => a.sex !== "الجملة")
    .sort((a, b) => a.sex.localeCompare(b.sex));
  //console.log(arr3);
  if (arr3[0]) {
    arr1 = Object.values(arr3[0])
      .splice(2)
      .sort((a, b) => a - b);
    // console.log(arr1.sort((a, b) => a - b));
    arr2 = Object.values(arr3[1])
      .splice(2)
      .sort((a, b) => a - b);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Males & Females",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr2?.map((x) => x),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr1?.map((x) => x),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      {/*  <Typography variant="h4" style={{ marginTop: "40px" }}>
        Population Growth Rate
      </Typography>
      <hr style={{ width: "160px" }} />
      <Typography variant="p">
        Annual population growth rate from 1996 to 2022 is the exponential rate
        of growth of midyear , expressed as a percentage . Population is based
        on the de facto definition of population, which counts all residents
        regardless of legal status or citizenship--except for refugees not
        permanently settled in the country of asylum, who are generally
        considered part of the population of the country of origin.
  </Typography>*/}
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
