import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";
import { Spinner } from "react-bootstrap";
import { SimpleButton } from "../Button/Button";

export const SimpleSpinners = ({
  className,
  animation,
  loadingText,
  role,
  isButton,
  variant,
  size,
  buttonVariant,
  ...props
}) => {
  return (
    <div>
      {isButton ? (
        <SimpleButton
          variant={buttonVariant}
          disabled
          value={
            <>
              <Spinner
                as="span"
                animation={animation}
                size={size === "small" ? "sm" : size === "large" ? "lg" : null}
                role="status"
                aria-hidden="true"
                variant={variant}
                className="storybook-button-spinner"
              />
              {loadingText}
            </>
          }
        />
      ) : (
        <Spinner
          className={className}
          animation={animation}
          role={role}
          size={size === "small" ? "sm" : size === "large" ? "lg" : ""}
          variant={variant}
        >
          <span className="sr-only">{loadingText}</span>
        </Spinner>
      )}
    </div>
  );
};

SimpleSpinners.propTypes = {
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
  className: PropTypes.string,
  animation: PropTypes.oneOf(["border", "grow"]),
  loadingText: PropTypes.string,
  role: PropTypes.string,
  isButton: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
