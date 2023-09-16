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

import { listIndRate } from "../../redux/actions/info/infoAction";
const Child = () => {
  const listIndRateReducer = useSelector((state) => state.listIndRateReducer);
  const { data, error, loading } = listIndRateReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listIndRate());
  }, []);

  const data1 = data?.sort((a, b) =>
    a._id.المحافظة?.localeCompare(b._id.المحافظة)
  );
  //.sort((a, b) => a._id.السنة?.localeCompare(b._id.السنة));

  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "_id.المحافظة",
    },
    {
      headerName: "السنة",
      field: "_id.السنة",
      width: 300,
    },

    {
      headerName: "الإعالة الصغرى",
      field: "_id.الإعالة الصغرى",
      //  width: 300,
    },
    {
      headerName: "الإعالة الكبرى",
      field: "_id.الإعالة الكبرى",
      //  width: 300,
    },

    {
      headerName: "الإعالة الكلية",
      field: "_id.الإعالة الكلية",
      //  width: 300,
    },

    {
      headerName: "نسبة صغار السن",
      field: "_id.نسبة صغار السن",
      //  width: 300,
    },
    {
      headerName: "نسبة النوع",
      field: "_id.نسبة النوع",
      //  width: 300,
    },
    {
      headerName: "نسبة الحضر",
      field: "_id.نسبة الحضر",
      //  width: 300,
    },
    {
      headerName: "الكثافة المأهولة",
      field: "_id.الكثافة المأهولة",
      //  width: 300,
    },
    {
      headerName: "نسبة المساحة المأهولة للمساحة الكلية",
      field: "_id.نسبة المساحة المأهولة للمساحة الكلية",
      //  width: 300,
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
            مؤشرات السكان
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
