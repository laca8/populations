import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { Typography } from "@mui/material";

import { listAreaRate } from "../../redux/actions/info/infoAction";
const Child = () => {
  const listAreaRateReducer = useSelector((state) => state.listAreaRateReducer);
  const { data, error, loading } = listAreaRateReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAreaRate());
  }, []);

  const data1 = data?.sort((a, b) =>
    a._id.المحافظة?.localeCompare(b._id.المحافظة)
  );

  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "_id.المحافظة",
    },
    {
      headerName: "الكلية",
      field: "_id.الكلية",
    },
    {
      headerName: "المســاحة كم2",
      field: "_id.area",
    },
    {
      headerName: "% المساحة",
      field: "_id.% المساحة",
    },
    {
      headerName: "الســكــان",
      field: "_id.الســكــان",
    },
    {
      headerName: "الكثافة المأهولة",
      field: "_id.الكثافة المأهولة",
      width: 300,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const userLoginReducer = useSelector((state) => state.userLoginReducer);

  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <Typography
            variant="h6"
            style={{ marginBottom: "10px", textAlign: "right" }}
          >
            المساحة و كثافة السكان
          </Typography>

          <div
            className="ag-theme-alpine"
            style={{ height: 500, textAlign: "right" }}
          >
            <AgGridReact
              rowData={data1}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default Child;
