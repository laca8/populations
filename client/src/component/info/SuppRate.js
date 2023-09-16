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

import { listSuppRate } from "../../redux/actions/info/infoAction";
const Child = () => {
  const listSuppRateReducer = useSelector((state) => state.listSuppRateReducer);
  const { data, error, loading } = listSuppRateReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSuppRate());
  }, []);

  const data1 = data?.sort((a, b) =>
    a._id.المحافظات?.localeCompare(b._id.المحافظات)
  );

  const columnsDefs = [
    {
      headerName: "الجهاز المركزى للتعبئة العامة والإحصاء",
      field: "_id.الجهاز المركزى للتعبئة العامة والإحصاء",
      width: 300,
    },
    {
      headerName: "نسبة كبار السن (65 فأكثر)",
      field: "_id.نسبة كبار السن (65 فأكثر)",
      width: 500,
    },

    {
      headerName: "نسبة صغار السن(أقل من 15)",
      field: "_id.نسبة صغار السن(أقل من 15)",
      width: 400,
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
            نسبة كبار السن ونسبة صغار السن لمحافظات الجمهورية في 1-7-2020
            <br />
            <br /> نسبة الإعالة العمرية الكلية 61.6
            <br /> نسبة الإعالة العمرية الكبرى 6.2
            <br />
            نسبة الإعالة العمرية الصغري 55.3
          </Typography>

          <div
            className="ag-theme-alpine"
            style={{ height: 500, textAlign: "left" }}
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
