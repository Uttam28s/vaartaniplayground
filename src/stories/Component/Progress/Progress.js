import React from "react";
import PropTypes from "prop-types";
import "./Progress.css";
import { ProgressBar } from "react-bootstrap";

export const SimpleProgress = ({
  className,
  fill,
  label,
  animated,
  strip,
  variant,
  ...props
}) => {
  return (
    <div>
      <ProgressBar
        className={`storybook-progrssbar ${className}`}
        now={fill}
        label={label ? fill : ""}
        striped={strip}
        variant={variant}
        animated={animated}
      />
    </div>
  );
};

SimpleProgress.propTypes = {
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
  fill: PropTypes.number,
  label: PropTypes.bool,
  strip: PropTypes.bool,
  animated: PropTypes.bool,
};
