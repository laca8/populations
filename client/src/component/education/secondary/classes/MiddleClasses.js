import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../../features/Error";
import Loader from "../../../features/Loader";
import { Typography } from "@mui/material";
import { classesSecondaryMid } from "../../../../redux/actions/educationsAction/education";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import ChartLineDependency from "../../../chart/edu/classes/ChartLineDependency";
import ChartLineResidence from "../../../chart/edu/classes/ChartLineResidence";
import ChartBarDependency from "../../../chart/edu/classes/ChartBarDependency";
import ChartBarResidence from "../../../chart/edu/classes/ChartBarResidence";

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
const MiddleStudents = ({ city }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(classesSecondaryMid(city));
  }, [city]);
  const listClassesMidReducer = useSelector(
    (state) => state.listClassesMidReducer
  );
  const { classes, error, loading } = listClassesMidReducer;
  const data = classes.sort((a, b) => a._id.year - b._id.year);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : classes ? (
        <>
          <Typography variant="p">
            The total number of classes in secondary school in {city}
            2017,2018,2019,2020,2021,2022 with division urban and rural,
            governmental and private , boys and girls
          </Typography>
          <hr style={{ width: "240px" }} />
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
                <th>Year</th>
                <th>حضر</th>

                <th>ريف</th>
                <th>حكومي</th>

                <th>خاص</th>
              </tr>
            </thead>
            <tbody>
              {data.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop?._id.year}</td>
                  <td>{pop?.total_classes_urban}</td>
                  <td>{pop?.total_classes_rural}</td>
                  <td>{pop?.total_classes_public}</td>
                  <td>{pop?.total_classes_private}</td>
                </tr>
              ))}
            </tbody>
          </Table>

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
                    <ChartLineResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineDependency data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <ChartBarResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarDependency data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default MiddleStudents;
