import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Education = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "grey" }}>
      <Typography variant="h4">التعليم</Typography>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px", height: "100%" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الاعدادية
            </Card.Title>
            <Link to="/secondary/students" style={{ textDecoration: "none" }}>
              عدد الطلاب / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/secondary/classes" style={{ textDecoration: "none" }}>
              عدد الفصول / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/secondary/schools" style={{ textDecoration: "none" }}>
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الابتدائية
            </Card.Title>
            <Link to="/primary/students" style={{ textDecoration: "none" }}>
              عدد الطلاب / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/primary/classes" style={{ textDecoration: "none" }}>
              عدد الفصول / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/primary/schools" style={{ textDecoration: "none" }}>
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px", height: "100%" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة قبل الابتدائية
            </Card.Title>

            <Link to="/pre-primary/students" style={{ textDecoration: "none" }}>
              عدد الطلاب / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/pre-primary/classes" style={{ textDecoration: "none" }}>
              عدد الفصول / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/pre-primary/schools" style={{ textDecoration: "none" }}>
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية التجاري
            </Card.Title>

            <Link to="/comm/students" style={{ textDecoration: "none" }}>
              عدد الطلاب الثانوية التجاري / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/comm/classes" style={{ textDecoration: "none" }}>
              عدد الفصول الثانوية التجاري / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/comm/schools" style={{ textDecoration: "none" }}>
              عدد المدارس الثانوية التجاري / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الصناعي
            </Card.Title>
            <Link to="/ind/students" style={{ textDecoration: "none" }}>
              عدد الطلاب الثانوية الصناعي / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/ind/classes" style={{ textDecoration: "none" }}>
              عدد الفصول الثانوية الصناعي / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/ind/schools" style={{ textDecoration: "none" }}>
              عدد المدارس الثانوية الصناعي / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>

        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية العامة
            </Card.Title>

            <Link to="/high/students" style={{ textDecoration: "none" }}>
              عدد الطلاب الثانوية العامة / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/high/classes" style={{ textDecoration: "none" }}>
              عدد الفصول الثانوية العامة / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/high/schools" style={{ textDecoration: "none" }}>
              عدد المدارس الثانوية العامة / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التربية الخاصة
            </Card.Title>
            <Link to="/special/students" style={{ textDecoration: "none" }}>
              عدد الطلاب / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/special/classes" style={{ textDecoration: "none" }}>
              عدد الفصول / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/special/schools" style={{ textDecoration: "none" }}>
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الزراعي
            </Card.Title>

            <Link to="/argi/students" style={{ textDecoration: "none" }}>
              عدد الطلاب الثانوية الزراعي / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/agri/classes" style={{ textDecoration: "none" }}>
              عدد الفصول الثانوية الزراعي / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/agri/schools" style={{ textDecoration: "none" }}>
              عدد المدارس الثانوية الزراعي / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px", height: "100%" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الفندقي
            </Card.Title>

            <Link to="/hotel/classes" style={{ textDecoration: "none" }}>
              عدد الفصول الثانوية الفندقي / حضر ريف / خاصة حكومي -
            </Link>

            <Link to="/hotel/schools" style={{ textDecoration: "none" }}>
              عدد المدارس الثانوية الفندقي / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم المجتمعي
            </Card.Title>
            <Link to="/community/students" style={{ textDecoration: "none" }}>
              عدد الطلاب / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/community/classes" style={{ textDecoration: "none" }}>
              عدد الفصول / حضر ريف / خاصة حكومي -
            </Link>
            <Link to="/community/schools" style={{ textDecoration: "none" }}>
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px", height: "100%" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              المدرسين
            </Card.Title>
            <Link to="/total/teachers" style={{ textDecoration: "none" }}>
              عدد المدرسين / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/total/teachers/students"
              style={{ textDecoration: "none" }}
            >
              عدد المدرسين لكل طالب / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              النسب المئوية
            </Card.Title>
            <Link to="/edu/precentage/girls" style={{ textDecoration: "none" }}>
              قيد البنات
            </Link>
            <Link
              to="/edu/precentage/classes"
              style={{ textDecoration: "none" }}
            >
              كثافة الفصول
            </Link>
            <Link
              to="/edu/precentage/schools"
              style={{ textDecoration: "none" }}
            >
              نصيب المدرس من الطلاب
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
