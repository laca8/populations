import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { schoolInd } from "../../../../redux/actions/educationsAction/education";
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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import ChartLineDependency from "../../../chart/edu/schools2/ChartLineDependency";
import ChartLineResidence from "../../../chart/edu/schools2/ChartLineResidence";

import ChartBarResidence from "../../../chart/edu/schools2/ChartBarResidence";
import ChartBarDependency from "../../../chart/edu/schools2/ChartBarDependency";
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
const TotalStudents = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(schoolInd());
  }, []);
  const listSchoolReducer = useSelector((state) => state.listSchoolReducer);
  const { schools, error, loading } = listSchoolReducer;
  const data = schools.sort((a, b) => a._id.year - b._id.year);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : schools ? (
        <>
          <Typography variant="p">
            The total number of schools in industrial education in egypt
            2017,2018,2019,2020,2021,2022 with division urban and rural,
            governmental and private , boys and girls
          </Typography>
          <Table
            striped
            bordered
            hover
            style={{
              marginBottom: "30px",
              marginTop: "20px",
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
                  <td>{pop?.total_schools_urban}</td>
                  <td>{pop?.total_schools_rural}</td>
                  <td>{pop?.total_schools_public}</td>
                  <td>{pop?.total_schools_private}</td>
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
              <Row style={{ marginTop: "10px" }}>
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
    </Container>
  );
};

export default TotalStudents;
