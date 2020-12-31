import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Nav } from "react-bootstrap";

export const SimpleNavbar = ({
  onSelect,
  activeKey,
  navArray,
  className,
  variant,
  fill,
  ...props
}) => {
  return (
    <>
      <Nav
        className={className}
        variant={variant}
        activeKey={activeKey}
        fill={fill}
        onSelect={onSelect}
      >
        {navArray.map((value) => (
          <Nav.Item>
            <Nav.Link
              href={value.href}
              eventKey={value.eventKey}
              disabled={value.disabled}
            >
              {value.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

SimpleNavbar.propTypes = {
  variant: PropTypes.oneOf(["pills", "tabs"]),
  onSelect: PropTypes.func,
  activeKey: PropTypes.string,
  className: PropTypes.oneOf([
    "flex-column",
    "justify-content-end",
    "justify-content-center",
  ]),
};

// SimpleNavbar.defaultProps = {

// };
