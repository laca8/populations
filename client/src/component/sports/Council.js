import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
  Alert,
} from "react-bootstrap";
import Error from "../features/Error";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { listClubs, listCouncil } from "../../redux/actions/sport/sport";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import { addClubs, addCouncil } from "../../redux/actions/sport/sport";
const Council = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCouncil());
  }, []);
  const councilReducer = useSelector((state) => state.councilReducer);
  const { councils, error, loading } = councilReducer;
  const data = councils
    ?.sort((a, b) => a._id.type?.localeCompare(b._id.type))
    ?.sort((a, b) => a._id.stad?.localeCompare(b._id.stad))
    ?.sort((a, b) => a._id.city?.localeCompare(b._id.city));
  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "_id.city",
      sortable: true,
      filter: true,
    },
    {
      headerName: "الصالات",
      field: "_id.stad",
      sortable: true,
      filter: true,
    },
    {
      headerName: "النوع",
      field: "_id.type",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد",
      field: `total`,
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked", e);
  });
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);

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

  const addCouncilReducer = useSelector((state) => state.addCouncilReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addCouncilReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addCouncil(data));
    setJson("");
    //dispatch(listPrimryStuAzhar());
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : councils ? (
        <>
          <Typography variant="h6" style={{ textAlign: "right" }}>
            مجلس الرياضة
          </Typography>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default Council;
