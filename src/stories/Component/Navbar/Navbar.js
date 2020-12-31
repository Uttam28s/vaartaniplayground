import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../assets/vaartanilogo.svg";

export const SimpleNavbar = ({
  onSelect,
  activeKey,
  navArray,
  className,
  variant,
  background,
  fill,
  src,
  brandName,
  ...props
}) => {
  return (
    <>
      <Navbar
        bg={background}
        variant={variant}
        className={className}
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={src || logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {brandName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navArray.map((value) =>
              value.dropdown ? (
                value.dropDownNav
              ) : (
                <Nav.Link eventKey={value.eventKey} href={value.href}>
                  {value.name}
                </Nav.Link>
              )
            )}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

SimpleNavbar.propTypes = {
  variant: PropTypes.oneOf(["dark", "light"]),
  background: PropTypes.oneOf(["dark", "light", "primary"]),
  onSelect: PropTypes.func,
  brandName: PropTypes.string,
};
