import React from "react";
import PropTypes from "prop-types";
import "./Popover.css";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { SimpleButton } from "../Button/Button";

export const SimplePopovers = ({ position, buttonVariant, ...props }) => {
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key={position}
        placement={position}
        overlay={
          <Popover
            id={`popover-positioned-${position}`}
            title={`Popover ${position}`}
          >
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        }
      >
        <SimpleButton
          variant={buttonVariant}
          value={`Popover on ${position}`}
        ></SimpleButton>
      </OverlayTrigger>
    </div>
  );
};

SimplePopovers.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  buttonVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
};
