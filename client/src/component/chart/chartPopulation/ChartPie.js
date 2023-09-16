import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);
const ChartPie = ({ data1, data2, label1, label2, color1, color2 }) => {
  const sex = [label1, label2];
  const total = [data1, data2];

  let fields = {
    labels: sex.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: total.map((x) => x),
        backgroundColor: [color1, color2],
      },
    ],
  };

  return (
    <div style={{ width: "90%" }}>
      <Pie
        data={fields}
        style={{ width: "100%", height: "100%", margin: "auto" }}
      />
    </div>
  );
};

export default ChartPie;
