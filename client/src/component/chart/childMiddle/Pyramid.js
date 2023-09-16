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
  "0-1",
  "0-2",
  "0-3",
  "0-4",
  "0-5",
  "0-6",
  "0-7",
  "0-8",
  "0-9",
  "0-10",
  "0-11",
  "0-12",
  "0-13",
  "0-14",
  "0-15",
  "0-16",
  "0-17",
  "0-18",
];

const ChartPyramid = ({ arr }) => {
  const totalFemale1 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 1)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale1 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 1)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale2 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 2)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale2 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 2)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale3 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 3)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale3 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 3)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale4 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 4)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale4 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 4)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale5 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 5)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale5 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 5)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale6 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 6)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale6 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 6)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale7 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 7)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale7 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 7)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale8 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 8)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale8 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 8)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale9 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 9)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale9 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 9)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale10 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 10)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale10 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 10)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale11 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 11)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale11 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 11)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale12 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 12)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale12 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 12)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale13 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 13)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale13 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 13)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale14 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 14)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale14 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 14)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale15 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 15)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale15 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 15)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale16 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 16)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale16 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 16)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale17 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 17)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale17 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 17)
    .reduce((acc, val) => acc + val.total, 0);

  const totalFemale18 = arr
    .filter((p) => p._id.Sex == "اناث" && p._id.age <= 18)
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale18 = arr
    .filter((p) => p._id.Sex == "ذكور" && p._id.age <= 18)
    .reduce((acc, val) => acc + val.total, 0);

  let arr1 = [
    -totalMale1,
    -totalMale2,
    -totalMale3,
    -totalMale4,
    -totalMale5,
    -totalMale6,
    -totalMale7,
    -totalMale8,
    -totalMale9,
    -totalMale10,
    -totalMale11,
    -totalMale12,
    -totalMale13,
    -totalMale14,
    -totalMale15,
    -totalMale16,
    -totalMale17,
    -totalMale18,
  ];
  let arr2 = [
    totalFemale1,
    totalFemale2,
    totalFemale3,
    totalFemale4,
    totalFemale5,
    totalFemale6,
    totalFemale7,
    totalFemale8,
    totalFemale9,
    totalFemale10,
    totalFemale11,
    totalFemale12,
    totalFemale13,
    totalFemale14,
    totalFemale15,
    totalFemale16,
    totalFemale17,
    totalFemale18,
  ];

  const options = {
    indexAxis: "y",
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
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
        data: arr1?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5) ",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartPyramid;
