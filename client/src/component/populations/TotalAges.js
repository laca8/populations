import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  listPopTotal,
  listTotalAge,
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
import ChartBar from "../chart/totalAge/Bar";
import ChartLine from "../chart/totalAge/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ChartLine2 from "../chart/totalAge/Line2";
import ChartBar2 from "../chart/totalAge/Bar2";
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
const TotalAges = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);
  const arr1 = popTotalAge.filter(
    (pop) => pop.sex != "حضر" && pop.sex != "ريف" && pop.sex != "الجملة"
  );
  const arr2 = popTotalAge.filter(
    (pop) => pop.sex != "ذكور" && pop.sex != "إناث" && pop.sex != "الجملة"
  );

  const columns = [
    {
      name: "Sex",
      selector: (row) => row?.sex,
      sortable: true,
      filter: true,
    },
    {
      name: "2016",
      selector: (row) => row?.total_2016?.toLocaleString(),
    },

    {
      name: "2017",
      selector: (row) => row?.total_2017?.toLocaleString(),
    },
    {
      name: "2018",
      selector: (row) => row?.total_2018?.toLocaleString(),
    },

    {
      name: "2019",
      selector: (row) => row?.total_2019?.toLocaleString(),
    },
    {
      name: "2020",
      selector: (row) => row?.total_2020?.toLocaleString(),
    },

    {
      name: "2021",
      selector: (row) => row?.total_2021?.toLocaleString(),
    },
    {
      name: "2022",
      selector: (row) => row?.total_2022?.toLocaleString(),
    },
  ];
  const columns2 = [
    {
      name: "Residence",
      selector: (row) => row?.sex,
      sortable: true,
      filter: true,
    },

    {
      name: "2018",
      selector: (row) => row?.total_2018?.toLocaleString(),
    },

    {
      name: "2019",
      selector: (row) => row?.total_2019?.toLocaleString(),
    },
    {
      name: "2020",
      selector: (row) => row?.total_2020?.toLocaleString(),
    },

    {
      name: "2021",
      selector: (row) => row?.total_2021?.toLocaleString(),
    },
    {
      name: "2022",
      selector: (row) => row?.total_2022?.toLocaleString(),
    },
  ];
  return (
    <div style={{ marginTop: "40px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popTotalAge ? (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="h4">
              تسلسل عدد الاطفال تحت 18 سنة من سنة 2016 لسنة 2022
            </Typography>
          </div>
          <DataTable
            style={{ padding: "20px", marginTop: "30px", fontSize: "40px" }}
            columns={columns}
            data={arr1}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450"
            selectableRowsHighlight
            highlightOnHover
          />
          <DataTable
            style={{ padding: "20px", marginTop: "30px" }}
            columns={columns2}
            data={arr2}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450"
            selectableRowsHighlight
            highlightOnHover
          />
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
                  <ChartLine2 arr={arr1} />
                </Col>
                <Col>
                  <ChartLine arr={arr2} />
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <ChartBar arr={arr1} />
                </Col>
                <Col>
                  <ChartBar2 arr={arr2} />
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default TotalAges;
