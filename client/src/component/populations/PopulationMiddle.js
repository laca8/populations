import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  addPopMiddle,
} from "../../redux/actions/populationAction/population";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Error from "../features/Error";
import Loader from "../features/Loader";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChartBar from "../chart/chartPopulation/ChartBar";
import ChartLine from "../chart/chartPopulation/ChartLine";
import ChartPie from "../chart/chartPopulation/ChartPie";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../firebase";
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
const PopulationMiddle = ({ city }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listPopMiddleReducer = useSelector(
    (state) => state.listPopMiddleReducer
  );
  const { popMiddle, loading, error } = listPopMiddleReducer;
  useEffect(() => {
    dispatch(listPopMiddle(city));
  }, [city]);

  let arr1 = popMiddle
    .filter((pop) => pop._id.Sex !== "جملة")
    .sort((a, b) => a._id.Sex.localeCompare(b._id.Sex))
    .sort((a, b) => b._id.Urban.localeCompare(a._id.Urban));

  let arr2 = popMiddle.filter((pop) => pop._id.Sex == "جملة");
  let arr22 = popMiddle.filter((pop) => pop._id.Urban == "جملة");
  let arr3 = popMiddle.filter(
    (pop) => pop._id.Urban == "جملة" && pop._id.Sex == "ذكور"
  );
  let arr4 = popMiddle.filter(
    (pop) => pop._id.Urban == "جملة" && pop._id.Sex == "اناث"
  );

  let arr33 = popMiddle.filter(
    (pop) => pop._id.Urban == "ريف" && pop._id.Sex == "جملة"
  );
  let arr44 = popMiddle.filter(
    (pop) => pop._id.Urban == "حضر" && pop._id.Sex == "جملة"
  );
  // console.log(arr33);
  //console.log(arr44);
  let arrFemale = popMiddle.filter(
    (pop) => pop._id.Sex == "اناث" && pop._id.Urban == "جملة"
  );
  let arrMale = popMiddle.filter(
    (pop) => pop._id.Sex == "ذكور" && pop._id.Urban == "جملة"
  );
  let arrTotal = popMiddle.filter(
    (pop) => pop._id.Urban == "جملة" && pop._id.Sex !== "جملة"
  );
  let arrUrban = popMiddle.filter(
    (pop) => pop._id.Sex == "جملة" && pop._id.Urban == "حضر"
  );
  let arrRural = popMiddle.filter(
    (pop) => pop._id.Sex == "جملة" && pop._id.Urban == "ريف"
  );
  let arrTotalResidence = popMiddle.filter(
    (pop) => pop._id.Urban !== "جملة" && pop._id.Sex == "جملة"
  );
  //console.log(arrTotal);
  //console.log(arrTotalResidence);
  let totalMales = arrMale.reduce((acc, val) => acc + val.total_2019, 0);
  let totalFemales = arrFemale.reduce((acc, val) => acc + val.total_2019, 0);
  let totalTotal = arrTotal.reduce((acc, val) => acc + val.total_2019, 0);

  let totalUrban = arrUrban.reduce((acc, val) => acc + val.total_2019, 0);
  let totalRural = arrRural.reduce((acc, val) => acc + val.total_2019, 0);
  let totalResidence = arrTotalResidence.reduce(
    (acc, val) => acc + val.total_2019,
    0
  );
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

  const addPopMiddleReducer = useSelector((state) => state.addPopMiddleReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopMiddleReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addPopMiddle(data));
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
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popMiddle ? (
        <>
          <Typography variant="h4">Total Population</Typography>
          <hr style={{ width: "240px" }} />
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

          <Table
            striped
            bordered
            hover
            style={{
              marginBottom: "30px",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Sex</th>
                <th>Residence</th>
                <th>2017</th>
                <th>2018</th>
                <th>2019</th>
              </tr>
            </thead>
            <tbody>
              {arr1.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop._id.Sex}</td>
                  <td>{pop._id.Urban}</td>
                  <td>{pop.total_2017?.toLocaleString()}</td>
                  <td>{pop.total_2018?.toLocaleString()}</td>
                  <td>{pop.total_2019?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row style={{ marginTop: "40px" }}>
            <Typography variant="h4">Graphs</Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Line " {...a11yProps(0)} />
                  <Tab label="Bar" {...a11yProps(1)} />
                  <Tab label="Pie" {...a11yProps(2)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <Row>
                  <Col>
                    <ChartLine
                      arr2={arr2}
                      color="lightblue"
                      label="Grouth Rate Of Total Population Males && Females"
                    />
                  </Col>
                  <Col>
                    <ChartLine
                      arr2={arr22}
                      color="brown"
                      label="Grouth Rate Of Total Population Urban && Rural"
                    />
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Row>
                  <Col>
                    <ChartBar
                      arr3={arr3}
                      arr4={arr4}
                      label1="Males"
                      label2="Females"
                      color1="rgba(53, 162, 235, 0.5)"
                      color2="rgba(255, 99, 132, 0.5)"
                    />
                  </Col>
                  <Col>
                    <ChartBar
                      arr3={arr33}
                      arr4={arr44}
                      label2="Urban"
                      label1="Rural"
                      color1="brown"
                      color2="yellow"
                    />
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Row
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Col>
                    <ChartPie
                      data1={Math.round((totalMales * 100) / totalTotal)}
                      data2={Math.round((totalFemales * 100) / totalTotal)}
                      label1="Males"
                      label2="Females"
                      color1="rgba(53, 162, 235, 0.5)"
                      color2="rgba(255, 99, 132, 0.5)"
                    />
                  </Col>
                  <Col>
                    <ChartPie
                      data1={Math.round((totalUrban * 100) / totalResidence)}
                      data2={Math.round((totalRural * 100) / totalResidence)}
                      label2="Rural"
                      label1="Urban"
                      color1="yellow"
                      color2="brown"
                    />
                  </Col>
                </Row>
              </TabPanel>
            </Box>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default PopulationMiddle;
