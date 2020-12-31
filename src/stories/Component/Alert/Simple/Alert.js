import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { action } from "@storybook/addon-actions";

/**
 * Primary UI component for user interaction
 */
export const Alerts = ({
  detaile,
  variant,
  backgroundColor,
  text,
  color,
  ...props
}) => {
  return (
    <Alert
      variant={variant}
      style={{ backgroundColor, color }}
      className="alert-default "
      // style={({ backgroundColor }, color && { color })}
      {...props}
    >
      {!detaile ? (
        <>
          {" "}
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
          <button onClick={action("button-click")}>close</button>
        </>
      ) : (
        `This is a alert ${variant}—check it out! `
      )}
    </Alert>
  );
};

Alerts.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  detaile: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  // text: PropTypes.string,
};

Alerts.defaultProps = {
  color: null,
  backgroundColor: null,
  variant: "primary",
  // detailed: false,
  // text: "This is a alert—check it out! ",
};
