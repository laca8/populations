import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
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
        ?.filter((x) => x._id.stad == "ملاعب فرعيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setOne(
      data1
        ?.filter((x) => x._id.stad == "الصالات")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTwo(
      data1
        ?.filter((x) => x._id.stad == "حمام سباحه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setThree(
      data1
        ?.filter((x) => x._id.stad == "صالات الانشطه الرياضيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFour(
      data1
        ?.filter((x) => x._id.stad == "ملاعب فرعيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFive(
      data1
        ?.filter((x) => x._id.stad == "ملاعب كره قدم")
        .reduce((acc, val) => acc + val.total, 0)
    );
  }, [data1]);
  const arr1 = [azhar, one, two, three, four, five, six];
  //console.log(arr1);
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
    labels: data1
      ?.filter(
        (x, i) => data1?.findLastIndex((y) => y._id.stad == x._id.stad) == i
      )
      ?.map((x) => x._id.stad),
    datasets: [
      {
        label: "مجلس الرياضة بالصالات",
        data: arr1?.map((x) => x),
        borderColor: "yellow",
        backgroundColor: "yellow",
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
