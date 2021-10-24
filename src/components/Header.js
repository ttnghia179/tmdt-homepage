import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer-style.css";
import { Search, ShoppingCart, AccountCircle } from "@material-ui/icons";
import shoeicon from "./images/Untitled.png";

function Header() {
  return (
    <div className="header">
      <Navbar absolute="top" className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={shoeicon}
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <div className="menu-item">
              <Nav.Link href="#home">BRANDS</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#features">SALES</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">PRODUCT</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">SERVICE</Nav.Link>
            </div>
            <div className="menu-item">
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
            </div>
            <div className="other-icon align-self-center">
              <Search style={{ fill: "#FB4B29" }}></Search>
              <ShoppingCart style={{ fill: "#FB4B29" }}></ShoppingCart>
              <AccountCircle style={{ fill: "white" }}></AccountCircle>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
