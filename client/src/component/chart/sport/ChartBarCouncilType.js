import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
  const [one1, setOne1] = useState(Number(0));
  const [one, setOne] = useState(Number(0));
  const [two, setTwo] = useState(Number(0));
  const [two2, setTwo2] = useState(Number(0));
  const [three3, setThree3] = useState(Number(0));
  const [three, setThree] = useState(Number(0));
  const [four4, setFour4] = useState(Number(0));
  const [four, setFour] = useState(Number(0));
  const [five5, setFive5] = useState(Number(0));
  const [five, setFive] = useState(Number(0));
  const [six6, setSix6] = useState(Number(0));
  const [six, setSix] = useState(Number(0));
  const [seven7, setSeven7] = useState(Number(0));
  const [seven, setSeven] = useState(Number(0));
  const [eight8, setEight8] = useState(Number(0));
  const [eight88, setEight88] = useState(Number(0));
  const [eight, setEight] = useState(Number(0));
  const [nine9, setNine9] = useState(Number(0));
  const [nine99, setNine99] = useState(Number(0));
  const [nine, setNine] = useState(Number(0));
  const [ten, setTen] = useState(Number(0));
  const [ten1, setTen1] = useState(Number(0));
  const [ten2, setTen2] = useState(Number(0));
  const [ten3, setTen3] = useState(Number(0));
  const [ten4, setTen4] = useState(Number(0));
  const [ten5, setTen5] = useState(Number(0));
  const [ten6, setTen6] = useState(Number(0));
  const [ten7, setTen7] = useState(Number(0));
  const [ten8, setTen8] = useState(Number(0));
  const [ten9, setTen9] = useState(Number(0));

  useEffect(() => {
    setAzhar(
      data1
        ?.filter((x) => x._id.type == "اسكواش")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setOne1(
      data1
        ?.filter((x) => x._id.type == "تراك مشي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setOne(
      data1
        ?.filter((x) => x._id.type == "تزحلق")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTwo(
      data1
        ?.filter((x) => x._id.type == "سله")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTwo2(
      data1
        ?.filter((x) => x._id.type == "تنس ارضي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setThree(
      data1
        ?.filter((x) => x._id.type == "طائره")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setThree(
      data1
        ?.filter((x) => x._id.type == "كاراتيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFour4(
      data1
        ?.filter((x) => x._id.type == "كروكيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFour(
      data1
        ?.filter((x) => x._id.type == "ملاكمه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFive5(
      data1
        ?.filter((x) => x._id.type == "ملعب متعدد")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setFive(
      data1
        ?.filter((x) => x._id.type == "هوكي انزلاق")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setSix6(
      data1
        ?.filter((x) => x._id.type == "يد")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setSix(
      data1
        ?.filter((x) => x._id.type == "صاله انشطه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setSeven7(
      data1
        ?.filter((x) => x._id.type == "صاله مغطاه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setSeven(
      data1
        ?.filter((x) => x._id.type == "ترفيهي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setEight8(
      data1
        ?.filter((x) => x._id.type == "غطس")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setEight88(
      data1
        ?.filter((x) => x._id.type == "ملعب اوليمبي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setEight(
      data1
        ?.filter((x) => x._id.type == "ملعب تدريبي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setNine9(
      data1
        ?.filter((x) => x._id.type == "انشطة مختلفة")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setNine99(
      data1
        ?.filter((x) => x._id.type == "بلياردو")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setNine(
      data1
        ?.filter((x) => x._id.type == "بولينج")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen(
      data1
        ?.filter((x) => x._id.type == "تنس طاوله")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen1(
      data1
        ?.filter((x) => x._id.type == "جمانيزيوم")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen2(
      data1
        ?.filter((x) => x._id.type == "لياقه بدنيه")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen3(
      data1
        ?.filter((x) => x._id.type == "ثلاثي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen4(
      data1
        ?.filter((x) => x._id.type == "خماسي")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen5(
      data1
        ?.filter((x) => x._id.type == "بدون مدرجات")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen6(
      data1
        ?.filter((x) => x._id.type == "بمدرجات")
        .reduce((acc, val) => acc + val.total, 0)
    );
    setTen7(
      data1
        ?.filter((x) => x._id.type == "ملعب تدريبي")
        .reduce((acc, val) => acc + val.total, 0)
    );
  }, [data1]);
  const arr1 = [
    azhar,
    one1,
    one,
    two2,
    two,
    three3,
    three,
    four4,
    four,
    five5,
    five,
    six6,
    six,
    seven7,
    seven,
    eight8,
    eight88,
    eight,
    nine9,
    nine99,
    nine,
    ten,
    ten1,
    ten2,
    ten3,
    ten4,
    ten5,
    ten6,
    ten7,
  ];
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
        (x, i) => data1?.findLastIndex((y) => y._id.type == x._id.type) == i
      )
      ?.map((x) => x._id.type),
    datasets: [
      {
        label: "مجلس الرياضة بالنوع",
        data: arr1?.map((x) => x),
        borderColor: "brown",
        backgroundColor: "brown",
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
