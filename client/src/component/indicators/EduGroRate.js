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
import {
  studentsMidPriPrimary,
  studentsMidHigh,
  studentsMidSecondary,
  classesSecondaryMid,
  classesHighMid,
  classesPrimaryMid,
} from "../../redux/actions/educationsAction/education";
import { useSelector, useDispatch } from "react-redux";
const EduGroRate = () => {
  const years = ["2017", "2018", "2019", "2020"];
  const cities = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",
    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  const ages = ["المرحلة الأبتدائية", "المرحلة الأعدادية", "المرحلة الثانوية"];
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [sex, setSex] = useState("");
  const [res, setRes] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      if (age == "المرحلة الأبتدائية") {
        dispatch(studentsMidPriPrimary(city));
        dispatch(classesPrimaryMid(city));
      } else if (age == "المرحلة الأعدادية") {
        dispatch(studentsMidSecondary(city));
        dispatch(classesSecondaryMid(city));
      } else if (age == "المرحلة الثانوية") {
        dispatch(studentsMidHigh(city));
        dispatch(classesHighMid(city));
      }
    }
  }, [city, age]);

  const data1 = [{}];
  const listClassesMidReducer = useSelector(
    (state) => state.listClassesMidReducer
  );
  const { classes } = listClassesMidReducer;
  console.log(classes);
  const listMidPreStuReducer = useSelector(
    (state) => state.listMidPreStuReducer
  );
  const { studentsMid, error, loading } = listMidPreStuReducer;
  const data = studentsMid?.sort((a, b) => a._id.السنة - b._id.السنة);
  const total = studentsMid
    ?.filter(
      (x) =>
        x?._id.السنة == year &&
        x?._id.dependency == type &&
        x?._id.residence == res
    )
    ?.reduce((acc, val) => acc + val.total_students, 0);
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
        مؤشر التعليم
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
            value={res}
            onChange={(e) => setRes(e.target.value)}
          >
            <option value={"اختر محل الأقامة"}>اختر محل الأقامة</option>
            {data
              ?.filter(
                (v, i, a) =>
                  a.findIndex(
                    (v2) => v2?._id.residence === v?._id.residence
                  ) === i
              )
              ?.map((dep) => (
                <option value={dep?._id.residence}>{dep?._id.residence}</option>
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
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={"اختر تبعية المدرسة"}>اختر تبعية المدرسة</option>
            {data
              ?.filter(
                (v, i, a) =>
                  a.findIndex(
                    (v2) => v2?._id?.dependency === v?._id?.dependency
                  ) === i
              )
              ?.map((dep) => (
                <option value={dep?._id?.dependency}>
                  {dep?._id?.dependency}
                </option>
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
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={"اختر السنة"}>اختر السنة</option>

            {years
              ?.filter((v, i, a) => a.findIndex((v2) => v2 === v) === i)
              ?.map((dep) => (
                <option value={dep}>{dep}</option>
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value={"اختر المرحلة العمرية"}>اختر المرحلة العمرية</option>
            {ages
              ?.filter((v, i, a) => a.findIndex((v2) => v2 === v) === i)
              ?.map((dep) => (
                <option value={dep}>{dep}</option>
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
            {cities
              ?.filter((v, i, a) => a.findIndex((v2) => v2 === v) === i)
              ?.map((dep) => (
                <option value={dep}>{dep}</option>
              ))}
          </Form.Select>
        </Col>
      </Row>
      {city && year && age && type && res && (
        <>
          {classes
            ?.filter((a) => a?._id.year == year)
            ?.map((cla) => (
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
                          عدد الفصول{" "}
                        </Form.Label>
                        <Form.Control
                          value={
                            type == "خاص" && res == "حضر"
                              ? Number(
                                  Math.floor(
                                    cla?.total_classes_urban +
                                      cla?.total_classes_private
                                  )
                                )
                              : type == "خاص" && res == "ريف "
                              ? Number(
                                  Math.floor(
                                    cla?.total_classes_rural +
                                      cla?.total_classes_private
                                  )
                                )
                              : type == "حكومى" && res == "ريف "
                              ? Number(
                                  Math.floor(
                                    cla?.total_classes_rural +
                                      cla?.total_classes_publc
                                  )
                                )
                              : type == "حكومى" && res == "حضر"
                              ? Number(
                                  Math.floor(
                                    cla?.total_classes_urban +
                                      cla?.total_classes_public
                                  )
                                )
                              : 0
                          }
                        ></Form.Control>
                      </Form.Group>
                      <Typography>/</Typography>
                      <Form.Group style={{ textAlign: "right" }}>
                        <Form.Label>عدد الطلبة</Form.Label>
                        <Form.Control value={total}></Form.Control>
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
                              <th>محل الاقامة</th>

                              <th>تبعية المدرسة</th>
                              <th>المرحلة التعليمية</th>
                              <th>اسم المؤشر</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {Math.floor(
                                  Number(total) /
                                    Number(
                                      Math.floor(
                                        cla?.total_classes_urban +
                                          cla?.total_classes_private
                                      )
                                    )
                                )}
                              </td>
                              <td>{year && year}</td>
                              <td>عدد الطلبة / عدد الفصول</td>
                              <td>{res && res}</td>

                              <td>{type && type}</td>
                              <td>{age && age}</td>
                              <td>مؤشر التعليم </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </Row>
            ))}
          {/*     {data
            ?.filter(
              (a) =>
                a?._id.السنة == year &&
                a?._id.dependency == type &&
                a?._id.residence == res
            )
            ?.map((dov) => (
              <>
                {classes
                  ?.filter((a) => a?._id.year == year)
                  ?.map((cla) => (
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
                                  عدد الفصول{" "}
                                </Form.Label>
                                <Form.Control
                                  value={
                                    type == "خاص" && res == "حضر"
                                      ? Number(
                                          Math.floor(
                                            cla.total_classes_urban +
                                              cla.total_classes_private
                                          )
                                        )
                                      : type == "خاص" && res == "ريف "
                                      ? Number(
                                          Math.floor(
                                            cla.total_classes_rural +
                                              cla.total_classes_private
                                          )
                                        )
                                      : type == "حكومى" && res == "ريف "
                                      ? Number(
                                          Math.floor(
                                            cla.total_classes_rural +
                                              cla.total_classes_publc
                                          )
                                        )
                                      : type == "حكومى" && res == "حضر"
                                      ? Number(
                                          Math.floor(
                                            cla.total_classes_urban +
                                              cla.total_classes_public
                                          )
                                        )
                                      : 0
                                  }
                                ></Form.Control>
                              </Form.Group>
                              <Typography>/</Typography>
                              <Form.Group style={{ textAlign: "right" }}>
                                <Form.Label>
                                  عدد الطلبة ({dov?._id.النوع})
                                </Form.Label>
                                <Form.Control
                                  value={dov.total_students}
                                ></Form.Control>
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
                                      <th>محل الاقامة</th>
                                      <th>النوع</th>
                                      <th>تبعية المدرسة</th>
                                      <th>المرحلة التعليمية</th>
                                      <th>اسم المؤشر</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        {Math.floor(
                                          Number(dov.total_students) /
                                            Number(
                                              Math.floor(
                                                cla.total_classes_urban +
                                                  cla.total_classes_private
                                              )
                                            )
                                        )}
                                      </td>
                                      <td>{year && year}</td>
                                      <td>عدد الطلبة / عدد الفصول</td>
                                      <td>{res && res}</td>
                                      <td>{dov?._id.النوع}</td>
                                      <td>{type && type}</td>
                                      <td>{age && age}</td>
                                      <td>مؤشر التعليم </td>
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
                                              ))}*/}
          {data?.filter(
            (a) =>
              a?._id.السنة == year &&
              a?._id.dependency == type &&
              a?._id.residence == res
          ).length == 0 ||
            (classes?.filter((a) => a?._id.year == year).length == 0 && (
              <Row>
                <Col>
                  <Card
                    style={{
                      padding: "40px",
                      color: "#111",
                      backgroundColor: "gray",
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: "20px",
                    }}
                  >
                    <Typography style={{ fontSize: "30px" }}>
                      لا توجد بيانات
                    </Typography>
                  </Card>
                </Col>
              </Row>
            ))}
        </>
      )}
    </Container>
  );
};

export default EduGroRate;
