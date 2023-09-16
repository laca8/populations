import { Typography } from "@mui/material";
import React from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import Club from "../../component/sports/Clubs";
import Council from "../../component/sports/Council";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ChartLineClub from "../../component/chart/sport/ChartLineClub";
import ChartBarClub from "../../component/chart/sport/ChartBarClub";
import ChartBarCouncil from "../../component/chart/sport/ChartBarCouncil";
import ChartLineCouncil from "../../component/chart/sport/ChartLineCouncil";
import ChartLineCouncilType from "../../component/chart/sport/ChartLineCouncilType";
import ChartBarCouncilType from "../../component/chart/sport/ChartBarCouncilType";
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

const Culture = () => {
  const clubReducer = useSelector((state) => state.clubReducer);
  const { clubs } = clubReducer;
  const councilReducer = useSelector((state) => state.councilReducer);
  const { councils } = councilReducer;
  const cinemaReducer = useSelector((state) => state.cinemaReducer);
  const { cinema } = cinemaReducer;
  const theaterReducer = useSelector((state) => state.theaterReducer);
  const { theaters } = theaterReducer;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Typography
        variant="h4"
        style={{ textAlign: "right", marginTop: "20px" }}
      >
        الرياضة
      </Typography>
      <Alert variant="secondary" style={{ width: "300px" }}>
        Note: Click To Filter,Sort
      </Alert>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Club />
        <Council />
      </div>

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
                <ChartLineClub data1={clubs} />
              </Card>
            </Col>
            <Col>
              <Card>
                <ChartLineCouncil data1={councils} />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card>
                <ChartLineCouncilType data1={councils} />
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Row>
            <Col>
              <Card>
                <ChartBarClub data1={clubs} />
              </Card>
            </Col>
            <Col>
              <Card>
                <ChartBarCouncil data1={councils} />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card>
                <ChartBarCouncilType data1={councils} />
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Culture;
