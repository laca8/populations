import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["2014", "2018", "2019"];

const ChartBar = ({ data1 }) => {
  // console.log(data1);
  const [azhar, setAzhar] = useState(Number(0));
  const [one, setOne] = useState(Number(0));
  const [two, setTwo] = useState(Number(0));
  const [three, setThree] = useState(Number(0));
  const [four, setFour] = useState(Number(0));
  const [five, setFive] = useState(Number(0));
  const [six, setSix] = useState(Number(0));

  useEffect(() => {
    setAzhar(
      data1
        ?.filter((x) => x._id.dep == "الازهر")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setOne(
      data1
        ?.filter((x) => x._id.dep == "المجلس القومي للرياضه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTwo(
      data1
        ?.filter((x) => x._id.dep == "تربيه وتعليم")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setThree(
      data1
        ?.filter((x) => x._id.dep == "وزارة الدفاع")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFour(
      data1
        ?.filter((x) => x._id.dep == "داخليه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFive(
      data1
        ?.filter((x) => x._id.dep == "المجلس القومي للشباب")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setSix(
      data1
        ?.filter((x) => x._id.dep == "تعليم عالى")
        .reduce((acc, val) => acc + val.total, 0)
    );
  }, [data1]);
  const arr1 = [azhar, one, two, three, four, five, six];
  //console.log(arr1);
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
    labels: data1
      ?.filter(
        (x, i) => data1?.findLastIndex((y) => y._id.dep == x._id.dep) == i
      )
      ?.map((x) => x._id.dep),
    datasets: [
      {
        label: "تبعية الاندية",
        data: arr1?.map((x) => x),
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
