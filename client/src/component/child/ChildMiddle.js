import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPopAgeByCity } from "../../redux/actions/populationAction/population";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../features/Error";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Pyramid from "../chart/childMiddle/Pyramid";
const ChildMiddle = ({ city }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPopAgeByCity(city));
  }, [city]);
  const listPopAgeReducer = useSelector((state) => state.listPopAgeReducer);
  const { popAge, error, loading } = listPopAgeReducer;
  //console.log(popAge);
  const data = popAge

    .sort((a, b) => a._id.Sex.localeCompare(b._id.Sex))
    .sort((a, b) => a._id.age - b._id.age);
  const totalFemales = popAge
    .filter((p) => p._id.Sex == "اناث")
    .reduce((acc, val) => acc + val.total, 0);

  const totalMales = popAge
    .filter((p) => p._id.Sex == "ذكور")
    .reduce((acc, val) => acc + val.total, 0);

  const totalUrban = popAge
    .filter((p) => p._id.Urban == "حضر")
    .reduce((acc, val) => acc + val.total, 0);

  const totalRural = popAge
    .filter((p) => p._id.Urban == "ريف")
    .reduce((acc, val) => acc + val.total, 0);
  //console.log(totalMales, totalFemales, totalRural, totalUrban);
  //console.log(total);
  const columnsDefs = [
    {
      headerName: "Sex",
      field: "_id.Sex",
      width: 300,
    },
    {
      headerName: "Urban",
      field: "_id.Urban",
      width: 300,
    },
    {
      headerName: "Less Than",
      field: "_id.age",
      width: 300,
    },
    {
      headerName: "Total",
      field: `total`,
      width: 350,
    },
  ];
  const total1 = popAge
    .filter((p) => p._id.age <= 3)
    .reduce((acc, val) => acc + val.total, 0);

  const total2 = popAge
    .filter((p) => p._id.age <= 6)
    .reduce((acc, val) => acc + val.total, 0);

  const total3 = popAge
    .filter((p) => p._id.age <= 9)
    .reduce((acc, val) => acc + val.total, 0);

  const total4 = popAge
    .filter((p) => p._id.age <= 12)
    .reduce((acc, val) => acc + val.total, 0);
  const total5 = popAge
    .filter((p) => p._id.age <= 15)
    .reduce((acc, val) => acc + val.total, 0);

  const total6 = popAge
    .filter((p) => p._id.age <= 18)
    .reduce((acc, val) => acc + val.total, 0);

  const arr = [
    { total: total1, id: 3 },
    { total: total2, id: 6 },
    { total: total3, id: 9 },
    { total: total4, id: 12 },
    { total: total5, id: 15 },
    { total: total6, id: 18 },
  ];
  //console.log(arr);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popAge ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px 0",
              textAlign: "right",
            }}
          >
            <Typography variant="h5">
              تسلسل عدد الاطفال تحت 18 لسنة 2021 في محافظة {city}
            </Typography>
          </div>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>

          <div style={{ width: "100%", textAlign: "center" }}>
            <ListGroup horizontal style={{ marginTop: "30px", width: "100%" }}>
              <ListGroup.Item style={{ width: "25%" }}>
                <ManIcon fontSize="large" style={{ fontSize: "80px" }} />
                <Typography variant="h6">
                  {totalMales?.toLocaleString()}
                </Typography>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "25%" }}>
                <WomanIcon fontSize="large" style={{ fontSize: "80px" }} />
                <Typography variant="h6">
                  {totalFemales?.toLocaleString()}
                </Typography>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "25%" }}>
                <LocationCityIcon
                  fontSize="large"
                  style={{ fontSize: "80px" }}
                />
                <Typography variant="h6">
                  {totalUrban?.toLocaleString()}
                </Typography>
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "25%" }}>
                <AgricultureIcon
                  fontSize="large"
                  style={{ fontSize: "80px" }}
                />
                <Typography variant="h6">
                  {totalRural?.toLocaleString()}
                </Typography>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <ListGroup as="ol" numbered style={{ marginTop: "30px" }}>
            {arr.map((p, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Under {p.id} Year(s)</div>
                </div>
                <Badge bg="primary" pill style={{ padding: "10px" }}>
                  {p.total?.toLocaleString()}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <Card>
                <Pyramid arr={popAge} />
              </Card>
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default ChildMiddle;
