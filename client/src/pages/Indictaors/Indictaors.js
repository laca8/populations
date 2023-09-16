import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";

import ButtonMaterial from "@mui/material/Button";
import PopGroRate from "../../component/indicators/PopGroRate";
import EduGroRate from "../../component/indicators/EduGroRate";
const Indictaors = () => {
  const [ind, setInd] = useState("");
  const inds = ["مؤشر كثافة السكان", "مؤشر التعليم"];
  return (
    <Container style={{ marginTop: "20px" }}>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "10px", textAlign: "right", fontWeight: "bold" }}
        value={ind}
        onChange={(e) => setInd(e.target.value)}
      >
        <option value={"اختر المؤشر"}>اختر المؤشر</option>

        {inds.map((dep) => (
          <option value={dep}>{dep}</option>
        ))}
      </Form.Select>

      {ind && ind == "مؤشر كثافة السكان" ? (
        <>
          <PopGroRate />
        </>
      ) : ind == "مؤشر التعليم" ? (
        <>
          <EduGroRate />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Indictaors;
