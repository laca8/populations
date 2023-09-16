import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Alert,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import { listIndsAreaRate } from "../../redux/actions/indsRate/indsRateAction";
import { useSelector, useDispatch } from "react-redux";
const PopGroRate = () => {
  const years = ["2020"];
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const listIndsAreaRateReducer = useSelector(
    (state) => state.listIndsAreaRateReducer
  );
  const { data, error, loading } = listIndsAreaRateReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listIndsAreaRate());
  }, []);

  const data1 = data?.sort((a, b) =>
    a._id.المحافظة?.localeCompare(b._id.المحافظة)
  );

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography
        style={{
          textAlign: "right",
          fontWeight: "bold",
          color: "gray",
          marginBottom: "10px",
        }}
      >
        مؤشر كثافة السكان
      </Typography>
      <Row>
        <Col>
          <Form.Select
            aria-label="Default select example"
            style={{
              marginBottom: "10px",
              textAlign: "right",
              fontWeight: "bold",
            }}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={"اختر السنة"}>اختر السنة</option>

            {data1
              ?.filter(
                (v, i, a) =>
                  a.findIndex((v2) => v2?._id.السنة === v?._id.السنة) === i
              )
              ?.map((dep) => (
                <option value={dep?._id.السنة}>{dep?._id.السنة}</option>
              ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            style={{
              marginBottom: "10px",
              textAlign: "right",
              fontWeight: "bold",
            }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value={"اختر المحافظة"}>اختر المحافظة</option>
            {data1
              .filter(
                (v, i, a) =>
                  a.findIndex((v2) => v2?._id.المحافظة === v?._id.المحافظة) ===
                  i
              )
              ?.map((dep) => (
                <option value={dep._id.المحافظة}>{dep._id.المحافظة}</option>
              ))}
          </Form.Select>
        </Col>
      </Row>
      {city && year && data1 && (
        <>
          {data1
            ?.filter((a) => a?._id.المحافظة === city && a?._id.السنة == year)
            ?.map((dov) => (
              <>
                <Row>
                  <Form>
                    <Row>
                      <Col
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Form.Group style={{ textAlign: "center" }}>
                          <Form.Label style={{ textAlign: "center" }}>
                            المساحة كم2
                          </Form.Label>
                          <Form.Control value={dov?._id?.area}></Form.Control>
                        </Form.Group>
                        <Typography>/</Typography>
                        <Form.Group style={{ textAlign: "right" }}>
                          <Form.Label>عدد الســكــان </Form.Label>
                          <Form.Control value={dov?._id?.السكان}></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                      <Col>
                        <Card>
                          <Table
                            striped
                            bordered
                            hover
                            style={{ textAlign: "right" }}
                          >
                            <thead>
                              <tr>
                                <th>القيمة</th>
                                <th>السنة</th>
                                <th>المعادلة</th>
                                <th>اسم المؤشر</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  {Number(dov?._id?.السكان) /
                                    Number(dov?._id.area)}
                                </td>
                                <td>{dov._id.السنة}</td>
                                <td>عدد السكان / المساحة كم2</td>
                                <td>معدل كثافة السكان</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
                </Row>
              </>
            ))}
        </>
      )}
    </Container>
  );
};

export default PopGroRate;
