import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Azhar = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "grey" }}>
      <Typography variant="h4">الازهر</Typography>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card
            style={{ padding: "10px", fontSize: "30px", fontWeight: "bold" }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم الازهري
            </Card.Title>
            <Link to="/azhar/primary" style={{ textDecoration: "none" }}>
              عدد الطلاب المرحلة الابتدائية / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/secondary"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              عدد الطلاب المرحلة الاعدادية / حضر ريف / خاصة حكومي
            </Link>
            <Link to="/azhar/high" style={{ textDecoration: "none" }}>
              عدد الطلاب الثانوية العامة / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/kids"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              عدد الطلاب رياض اطفال / حضر ريف / خاصة حكومي
            </Link>
            <Link to="/azhar/reads" style={{ textDecoration: "none" }}>
              عدد الطلاب قراءات / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/instituide"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              المعاهد / حضر ريف / خاصة حكومي{" "}
            </Link>
            <Link to="/azhar/teachers" style={{ textDecoration: "none" }}>
              عدد المدرسين / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/classes"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي{" "}
            </Link>
            <Link to="/azhar/disabled" style={{ textDecoration: "none" }}>
              عدد الطلاب ذو الاعاقة / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Azhar;
