import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HouseIcon from "@mui/icons-material/House";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaidIcon from "@mui/icons-material/Paid";
import SportsIcon from "@mui/icons-material/Sports";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import popImg from "../../img/population.png";
import eduImg from "../../img/edu.png";
import childImg from "../../img/child.png";
import culImg from "../../img/culture.png";
import envImg from "../../img/env.png";
import azhar from "../../img/azhar1.jpg";
import workImg from "../../img/manpower.png";
const Category = () => {
  return (
    <Container className="categories">
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>السكان</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/populations"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>

                  <img
                    src={popImg}
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>التعليم</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/education"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={eduImg}
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>الازهر</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/edu/azhar"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img src={azhar} style={{ width: "100px", height: "70px" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>الاطفال</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/child"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={childImg}
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>الثقافة</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/culture"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={culImg}
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>الرياضة</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/sport"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/857/857455.png"
                    }
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>الصحة</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/health"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://www.pngfind.com/pngs/m/85-858511_health-icon-hd-png-download.png"
                    }
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <h4>international indicator</h4>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/international"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={workImg}
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>معلومات عامة</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link to="/info" style={{ marginTop: "10px", color: "gray" }}>
                    Click to view this theme
                  </Link>

                  <img
                    src={
                      "https://w7.pngwing.com/pngs/759/924/png-transparent-logo-personally-identifiable-information-others-miscellaneous-service-logo.png"
                    }
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col></Col>
        <Col></Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
              textAlign: "right",
            }}
          >
            <Card.Body>
              <h3>المؤشرات</h3>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/indicators"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://e7.pngegg.com/pngimages/157/194/png-clipart-logo-trademark-brand-human-development-index-information-technology-scorecard-icon-blue-text.png"
                    }
                    style={{ width: "100px", height: "70px" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
