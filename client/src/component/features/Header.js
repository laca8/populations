import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Navbar, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/user/userAction";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { loading, error, userInfo } = userLoginReducer;
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar style={{ backgroundColor: "grey" }}>
      <Container>
        <Navbar.Brand href="/">
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "30px", cursor: "pointer" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2257/2257295.png"
              style={{ width: "40px" }}
            />
          </Typography>
        </Navbar.Brand>
        <Navbar.Brand href="/categories">
          <Typography
            variant="p"
            component="div"
            style={{ marginRight: "30px", color: "#333", cursor: "pointer" }}
          >
            Categories
          </Typography>
        </Navbar.Brand>
        <Navbar.Brand>
          <Typography>
            <Dropdown variant="Secondary">
              <Dropdown.Toggle id="dropdown-basic" variant="Secondary">
                Themes
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/populations">Population</Dropdown.Item>
                <Dropdown.Item href="/child">Children</Dropdown.Item>
                <Dropdown.Item href="/education">Education</Dropdown.Item>
                <Dropdown.Item href="/edu/azhar">Azhar</Dropdown.Item>
                <Dropdown.Item href="/culture">Culture</Dropdown.Item>

                <Dropdown.Item href="/sport">Sports</Dropdown.Item>
                <Dropdown.Item href="/health">Health</Dropdown.Item>
                <Dropdown.Item href="/international">
                  International Indicator
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Typography>
        </Navbar.Brand>
        <Navbar.Brand>
          <Dropdown variant="Secondary">
            <Dropdown.Toggle id="dropdown-basic" variant="Secondary">
              Dashboard
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Graphs</Dropdown.Item>
              <Dropdown.Item href="/dashboard/tables">Tables</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "center",
              }}
            >
              {userInfo?.user?.name ? (
                <Button variant="danger" onClick={handleLogout}>
                  Sign Out
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  onClick={() => navigator("/login")}
                >
                  Sign In
                </Button>
              )}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
