import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  listPopTotal,
  addPopTotal,
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

import ChartBar from "../chart/totalPopulation/Bar";
import FamilyBar from "../chart/family/FamilyBar";
import ChartLine from "../chart/totalPopulation/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import TotalLine from "../chart/totalPopulation/TotalLine";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Family from "./Family";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import TotalBar from "../chart/totalPopulation/BarTotal";
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
const PopulationTotal = () => {
  const [value, setValue] = React.useState(0);
  const [familyMale, setFamilyMale] = useState(0);
  const [familyFemale, setFamilyFemale] = useState(0);
  const [total, setTotal] = useState(Number(102872283));
  const [date, setDate] = useState("1/1/2022");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listPopTotalReducer = useSelector((state) => state.listPopTotalReducer);
  const { popTotal, loading, error } = listPopTotalReducer;
  useEffect(() => {
    dispatch(listPopTotal());
  }, []);
  const columns = [
    {
      name: "Sex",
      selector: (row) => row.sex,
    },
    {
      name: "1996",
      selector: (row) => row.total_96.toLocaleString(),
    },
    {
      name: "1997",
      selector: (row) => row.total_97.toLocaleString(),
    },
    {
      name: "1998",
      selector: (row) => row.total_98.toLocaleString(),
    },
    {
      name: "1999",
      selector: (row) => row.total_99.toLocaleString(),
    },
    {
      name: "2000",
      selector: (row) => row.total_2000.toLocaleString(),
    },
    {
      name: "2001",
      selector: (row) => row.total_2001.toLocaleString(),
    },
    {
      name: "2002",
      selector: (row) => row.total_2002.toLocaleString(),
    },
    {
      name: "2003",
      selector: (row) => row.total_2003.toLocaleString(),
    },
    {
      name: "2004",
      selector: (row) => row.total_2004.toLocaleString(),
    },
    {
      name: "2005",
      selector: (row) => row.total_2005.toLocaleString(),
    },
    {
      name: "2006",
      selector: (row) => row.total_2006.toLocaleString(),
    },
    {
      name: "2007",
      selector: (row) => row.total_2007.toLocaleString(),
    },
    {
      name: "2008",
      selector: (row) => row.total_2008.toLocaleString(),
    },
    {
      name: "2009",
      selector: (row) => row.total_2009.toLocaleString(),
    },
    {
      name: "2010",
      selector: (row) => row.total_2010.toLocaleString(),
    },
    {
      name: "2011",
      selector: (row) => row.total_2011.toLocaleString(),
    },
    {
      name: "2012",
      selector: (row) => row.total_2012.toLocaleString(),
    },
    {
      name: "2013",
      selector: (row) => row.total_2013.toLocaleString(),
    },
    {
      name: "2014",
      selector: (row) => row.total_2014.toLocaleString(),
    },
    {
      name: "2015",
      selector: (row) => row.total_2015.toLocaleString(),
    },
    {
      name: "2016",
      selector: (row) => row.total_2016.toLocaleString(),
    },
    {
      name: "2017",
      selector: (row) => row.total_2017.toLocaleString(),
    },
    {
      name: "2018",
      selector: (row) => row.total_2018.toLocaleString(),
    },
    {
      name: "2019",
      selector: (row) => row.total_2019.toLocaleString(),
    },
    {
      name: "2020",
      selector: (row) => row.total_2020.toLocaleString(),
    },
    {
      name: "2021",
      selector: (row) => row.total_2021.toLocaleString(),
    },
    {
      name: "2022",
      selector: (row) => row.total_2022.toLocaleString(),
    },
  ];
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

  const addPopMiddleReducer = useSelector((state) => state.addPopMiddleReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopMiddleReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addPopTotal(data));
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
      ) : popTotal ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h4"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              ({total?.toLocaleString()}) {date} اجمالي عدد السكان في
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="h4" style={{ justifyContent: "flex-end" }}>
              تسلسل عدد السكان من سنة 1996 الي 2022
            </Typography>
          </div>

          <Typography variant="h6" style={{ textAlign: "right" }}>
            في عام 2021 ، بلغ عدد سكان مصر 102 مليون نسمة. على مدى الخمسين عامًا
            الماضية ، نما عدد سكان مصر بشكل كبير من 36.1 مليون إلى 102 مليون شخص
            ، حيث ارتفع بمعدل سنوي متزايد وصل إلى 2.75٪ كحد أقصى في عام 1987 ثم
            انخفض بعد ذلك إلى 1.88٪ في عام 2021
          </Typography>
          <>
            {/*    <Typography variant="h6">Import Data Total</Typography>

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
                ) : null}*/}
          </>
          <DataTable
            style={{ padding: "20px", marginTop: "30px" }}
            columns={columns}
            data={popTotal}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450"
            highlightOnHover
          />
          <Row style={{ marginTop: "40px" }}>
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h6>Male Population </h6>
              <div style={{ color: "#1b7ced" }}>
                <ManIcon style={{ fontSize: "50px" }} />
                <ManIcon style={{ fontSize: "50px" }} />
                <ManIcon style={{ fontSize: "50px" }} />
                <ManIcon style={{ fontSize: "50px" }} />
                <ManIcon style={{ fontSize: "50px" }} />
              </div>
              <h6>51%</h6>
            </Col>
          </Row>

          <Row
            style={{ marginTop: "40px", marginBottom: "20px", width: "100%" }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h6>Female Population </h6>
              <div style={{ color: "pink" }}>
                <WomanIcon style={{ fontSize: "50px" }} />
                <WomanIcon style={{ fontSize: "50px" }} />
                <WomanIcon style={{ fontSize: "50px" }} />
                <WomanIcon style={{ fontSize: "50px" }} />
                <WomanIcon style={{ fontSize: "50px" }} />
              </div>
              <h6>49%</h6>
            </Col>
          </Row>
          <Family
            setFamilyMale={setFamilyMale}
            setFamilyFemale={setFamilyFemale}
          />
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
                <Tab label="Line " {...a11yProps(0)} />
                <Tab label="Bar" {...a11yProps(1)} />
                <Tab label="Pie" {...a11yProps(2)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Row>
                <Col>
                  <ChartLine arr={popTotal} />
                </Col>
                <Col>
                  <TotalLine arr={popTotal} />
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <ChartBar arr={popTotal} />
                </Col>
                <Col>
                  <TotalBar />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FamilyBar data1={familyMale} data2={familyFemale} />
                </Col>

                <Col></Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ChartPie arr={popTotal} />
            </TabPanel>
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default PopulationTotal;
