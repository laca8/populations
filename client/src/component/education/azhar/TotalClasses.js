import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listHighStuAzhar,
  listPrimryStuAzhar,
  listSecondaryStuAzhar,
  listClassesAzhar,
  addAzharClassesAction,
} from "../../../redux/actions/educationsAction/eduAzharAction";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import TotalLineChart from "../../chart/edu/azhar/classes/TotalLineChart";
import LineChart from "../../chart/edu/azhar/classes/LineChart";
import BarChartTotal from "../../chart/edu/azhar/classes/BarChartTotal";
import BarChart from "../../chart/edu/azhar/classes/BarChart";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
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
const TotalClasses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listClassesAzhar());
  }, []);
  const azharReducer = useSelector((state) => state.azharReducer);
  const { data, error, loading } = azharReducer;
  const data1 = data?.sort((a, b) => a?._id?.العام - b?._id?.العام);
  //?.sort((a, b) => a?._id?.residence.localeCompare(b?._id?.residence));
  const columnsDefs = [
    {
      headerName: "العام",
      field: "_id.العام",
      sortable: true,
      filter: true,
    },

    {
      headerName: "محل الاقامة",
      field: "_id.residence",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد الفصول",
      field: `total_classes`,
      sortable: true,
      filter: true,
      width: 350,
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

  const addAzharReducer = useSelector((state) => state.addAzharReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addAzharReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addAzharClassesAction(data));
    setJson("");

    //dispatch(listPrimryStuAzhar());
  };
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  useEffect(() => {
    if (success) {
      alert("import data successed");

      dispatch(listClassesAzhar());
    }
  }, [success]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
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
          <div
            className="ag-theme-alpine"
            style={{ height: 500, width: "100%" }}
          >
            <AgGridReact
              rowData={data}
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
                    <TotalLineChart data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <LineChart data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <BarChartTotal data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <BarChart data1={data} />
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

export default TotalClasses;
