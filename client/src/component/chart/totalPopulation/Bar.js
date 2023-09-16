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

const ChartBar = ({ arr }) => {
  let arr1, arr2;
  let arr3 = arr
    .filter((a) => a.sex !== "الجملة")
    .sort((a, b) => a.sex.localeCompare(b.sex));
  //console.log(arr3);
  if (arr[0]) {
    arr1 = Object.values(arr3[0])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr1);
    arr2 = Object.values(arr3[1])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr2);
  }

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
        text: "Total Population",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr2?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr1?.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5) ",
      },
    ],
  };

  return (
    <>
      {/*<Typography variant="h4" style={{ marginTop: "30px" }}>
        Bar Graph
      </Typography>
      <hr style={{ width: "40px" }} />
      <Typography>
        descripes the comparison between the numbers of men and women in the
        country
      </Typography>
  */}
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartBar;
