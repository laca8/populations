import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Female", "Male"],
  datasets: [
    {
      label: "# of Votes",
      data: [49, 51],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartPie = () => {
  return (
    <div>
      <Row style={{ width: "100%", height: "100%" }}>
        <Col style={{ width: "500px", height: "500px" }}>
          <Pie
            data={data}
            className="pie-can"
            style={{
              display: "block",
              height: "500px",
              width: "500px",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ChartPie;
