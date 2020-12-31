import React from "react";
import PropTypes from "prop-types";
import "./button.css";
// import { action } from "@storybook/addon-actions";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";

export const SimpleButton = ({
  variant,
  backgroundColor,
  color,
  size,
  text,
  outline,
  disabled,
  checkbox,
  onClick,
  value,
  type,
  ...props
}) => {
  return (
    <>
      {checkbox ? (
        <div className="d-flex flex-column">
          <ButtonGroup toggle>
            <ToggleButton type="checkbox" defaultChecked value="1">
              Checked
            </ToggleButton>
          </ButtonGroup>
          <ButtonGroup toggle className="mt-3">
            <ToggleButton type="radio" name="radio" defaultChecked value="1">
              Active
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="2">
              Radio
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="3">
              Radio
            </ToggleButton>
          </ButtonGroup>
        </div>
      ) : (
        <Button
          style={{ backgroundColor, color }}
          className={[`storybook-button--${size}`].join(" ")}
          variant={outline ? `outline-${variant}` : variant}
          size={size === "small" ? "sm" : "lg"}
          disabled={disabled}
          onClick={onClick}
          type={type}
        >
          {value}
        </Button>
      )}
    </>
  );
};

SimpleButton.propTypes = {
  // size: PropTypes.oneOf(["small", "large"]),
  // variant: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "success",
  //   "danger",
  //   "warning",
  //   "info",
  //   "light",
  //   "dark",
  // ]),
  disabled: PropTypes.bool,
  checkbox: PropTypes.bool,
  onClick: PropTypes.func,
  // outline: PropTypes.bool,
  // text: PropTypes.string,
  // className: PropTypes.string,
};

SimpleButton.defaultProps = {
  value: "Button",
  variant: "primary",
};
