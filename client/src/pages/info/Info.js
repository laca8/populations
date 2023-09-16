import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Info = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "grey" }}>
      <Typography variant="h4">معلومات عامة</Typography>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card
            style={{ padding: "30px", fontSize: "35px", fontWeight: "bold" }}
          >
            <Link
              to="/info/incRate"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              معدل التزاحم في المحافظات -
            </Link>
            {/*     <Link
              to="/international/united"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              -United Nation
  </Link>*/}
            <Link
              to="/info/crowRate"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              متوسط حجم الاسرة للمحافظات -
            </Link>
            <Link
              to="/info/indRate"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              مؤشرات السكان -
            </Link>
            <Link
              to="/info/areaRate"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              المساحة وكثافة السكان -
            </Link>

            <Link
              to="/info/suppRate"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              الاعالة وكبار السن و صغار السن -
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
