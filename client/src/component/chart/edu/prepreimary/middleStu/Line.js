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

const ChartLine = ({ students }) => {
  const arr17 = students
    .filter((a) => a._id.السنة == "2017")
    .reduce((acc, val) => acc + val.total_students, 0);

  const arr18 = students
    .filter((a) => a._id.السنة == "2018")
    .reduce((acc, val) => acc + val.total_students, 0);
  const arr19 = students
    .filter((a) => a._id.السنة == "2019")
    .reduce((acc, val) => acc + val.total_students, 0);
  const arr20 = students
    .filter((a) => a._id.السنة == "2020")
    .reduce((acc, val) => acc + val.total_students, 0);
  const arr21 = students
    .filter((a) => a._id.السنة == "2021")
    .reduce((acc, val) => acc + val.total_students, 0);

  let fields = [arr17, arr18, arr19, arr20, arr21];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Students",
      },
    },
  };
  const arr2 = [1, 2, 3, 4, 5, 5];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Students",
        data: fields?.map((x) => x),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Students Growth Rate
      </Typography>
      <hr style={{ width: "160px" }} />

      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
