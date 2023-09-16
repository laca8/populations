import React, { useState, useEffect, useMemo, useCallback } from "react";

import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

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
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";
import { Typography } from "@mui/material";
import {
  listDeathKidsFrom1to5years,
  addDeathKidsFrom1to5years,
} from "../../../redux/actions/health/healthAction";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import ChartLineSex from "../../../component/chart/health/death/kids_under_5years/ChartLineSex";
import ChartLineResidence from "../../../component/chart/health/death/kids_under_5years/ChartLineResidence";
import ChartBarFemales from "../../../component/chart/health/death/kids_under_5years/ChartBarFemales";
import ChartBarMales from "../../../component/chart/health/death/kids_under_5years/ChartBarMales";
import ChartBarFemalResidence from "../../../component/chart/health/death/kids_under_5years/ChartBarFemalResidence";
import ChartBarMaleResidence from "../../../component/chart/health/death/kids_under_5years/ChartBarMaleResidence";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const KidsFrom1To5Years = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeathKidsFrom1to5years());
  }, []);
  const listDeathRed = useSelector((state) => state.listDeathRed);
  const { data, error, loading } = listDeathRed;
  const data1 = data
    .sort((a, b) => a._id.year - b._id.year)
    .sort((a, b) => a._id.residence?.localeCompare(b._id.residence));

  const columnsDefs = [
    {
      headerName: "Year",
      field: "_id.year",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Sex",
      field: "_id.sex",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Residence",
      field: "_id.residence",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Total Childs",
      field: `total`,
      sortable: true,
      filter: true,
      width: 300,
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

  const addDeathRed = useSelector((state) => state.addDeathRed);
  const { loading: loadingAdd, error: errorAdd, success } = addDeathRed;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addDeathKidsFrom1to5years(data));
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
      ) : data ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Alert variant="secondary" style={{ width: "300px" }}>
              Note: Click To Filter,Sort
            </Alert>
            <Typography
              variant="h4"
              style={{ textAlign: "right", marginBottom: "20px" }}
            >
              وفيات الاطفال (من سنة - أقل من 5 سنوات)
            </Typography>
          </div>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data1}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Graphs
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Line" {...a11yProps(0)} />
                <Tab label="Bar" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Row>
                <Col>
                  <Card>
                    <ChartLineSex data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineResidence data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <ChartBarMales data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarFemales data1={data} />
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Card>
                    <ChartBarMaleResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarFemalResidence data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </Container>
  );
};

export default KidsFrom1To5Years;
