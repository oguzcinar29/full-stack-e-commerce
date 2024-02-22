import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Carts from "./Carts";
import UserAuth from "./UserAuth";
import { useData } from "../Context/DataContext";

export default function MyNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="nav-container">
      <>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="custom-navbar bg-body-tertiary mb-3 bg-white navbar"
            style={{ backgroundColor: "white" }}
          >
            <Container style={{ backgroundColor: "white" }} fluid>
              <div className="test">
                <div className="links">
                  <div className="box">
                    <img
                      src="https://github.com/safak/youtube2022/blob/ecommerce/client/public/img/en.png?raw=true"
                      alt="flag"
                    />
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="box">
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                  </div>
                  <Link to="/clothes">Clothes</Link>
                  <Link to="/electronic">Electronic</Link>
                  <Link to="/furniture">Furniture</Link>
                  <Link to="/misc">Miscellaneous</Link>
                  <Link to="/shoes">Shoes</Link>
                  <Link to="/"></Link>
                </div>
                <Link to="/">
                  <h1>Oguz Commerce</h1>
                </Link>
              </div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
                  <div className="links">
                    <Link to="/">Homepage</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Stores</Link>
                    <SearchIcon />
                    <UserAuth />
                    <FavoriteBorderOutlinedIcon />
                    <Carts />
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </nav>
  );
}
