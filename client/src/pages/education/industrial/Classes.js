import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import TotalClasses from "../../../component/education/industrial/classes/TotalClasses";
import MiddleClasses from "../../../component/education/industrial/classes/MiddleClasses";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import { addClassesIndAction } from "../../../redux/actions/educationsAction/education";
const Classes = () => {
  const cities = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",
    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  const [city, setCity] = useState("Egypt");
  const [total, setTotal] = useState(true);
  useEffect(() => {
    if (city == "Egypt") {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [city]);
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file.size > 20000000) {
      setErr("file size must less than 20MB");
    } else {
      setLoad(true);
      const dataRef = ref(storage, `/files/${file.name}`);
      uploadBytes(dataRef, file).then(() => {
        getDownloadURL(dataRef).then((url) => {
          setLoad(true);
          console.log(url);
          if (url) {
            setLoad(false);
            setJson(url);
            console.log(file);
            setLoad(false);
          }
        });
      });
    }
  };

  const addClassesReducer = useSelector((state) => state.addClassesReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addClassesReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addClassesIndAction(data));
    setJson("");
  };
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  useEffect(() => {
    if (success) {
      alert("import data successed");
    }
  }, [success]);
  return (
    <Container style={{ marginTop: "20px" }}>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "10px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Egypt">Egypt</option>
        {cities.map((dep) => (
          <option value={dep}>{dep}</option>
        ))}
      </Form.Select>
      <Alert variant="secondary" style={{ width: "300px" }}>
        Note: Click To Filter,Sort
      </Alert>
      <>
        {userInfo?.user?.isAdmin ? (
          <div style={{ marginBottom: "10px" }}>
            <ButtonMaterial variant="contained" component="label">
              <UploadFileIcon />
              <input hidden onChange={uploadFileHandler} type="file" />
            </ButtonMaterial>
            <ButtonMaterial
              onClick={handleSubmit}
              variant="outlined"
              disabled={load || json == ""}
              style={{ marginLeft: "10px" }}
            >
              import
            </ButtonMaterial>
            {load ? <p>loading....</p> : err ? <Error error={err} /> : null}
            {loadingAdd ? (
              <Loader />
            ) : errorAdd ? (
              <Error error={errorAdd} />
            ) : null}
          </div>
        ) : null}
      </>
      {total ? (
        <>
          <TotalClasses />
        </>
      ) : (
        <MiddleClasses city={city} />
      )}
    </Container>
  );
};

export default Classes;
