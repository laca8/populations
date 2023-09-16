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
      <Typography variant="h4">الصحة</Typography>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card
            style={{ padding: "10px", fontSize: "35px", fontWeight: "bold" }}
          >
            <Card.Title>الوفيات</Card.Title>
            <Link
              to="/health/death/kids-under-5years"
              style={{ textDecoration: "none" }}
            >
              وفيات الاطفال (دون الخامسة)-
            </Link>
            <Link
              to="/health/death/kids-from-1-to-5years"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              وفيات الاطفال (من سنة - أقل من 5 سنوات)
            </Link>
            <Link
              to="/health/death/kids-under-1year"
              style={{ textDecoration: "none" }}
            >
              وفيات الاطفال الرضع ( أقل من سنة )-
            </Link>
            <Link
              to="/health/death/kids-under-28"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              وفيات الاطفال حديثى الولادة ( أقل من 28 يوم )
            </Link>
            <Link
              to="/health/death/kids-under-7days"
              style={{ textDecoration: "none" }}
            >
              وفيات المواليد المبكرة ( أقل من 7 أيام )-
            </Link>

            <Link
              to="/health/death/mother-residence"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              وفيات الامهات طبقا لمحل الاقامة
            </Link>
            <Link
              to="/health/death/mother-place"
              style={{ textDecoration: "none" }}
            >
              وفيات الامهات وفقا لمكان الوفاه-
            </Link>
            <Link
              to="/health/female/rate"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              معدل الاناث
            </Link>
            <Link
              to="/health/death/kids/rate"
              style={{ textDecoration: "none" }}
            >
              معدل الوفيات الاطفال-
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Azhar;
