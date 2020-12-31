import React from "react";
import PropTypes from "prop-types";
import "./input.css";

/**
 * Primary UI component for user interaction
 */
export const Input = ({ size, label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        // type="text"
        className={["storybook-input", `storybook-input--${size}`].join(" ")}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(["small", "large"]),
  /**
   * Input contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  size: "large",
  // lebel: "Input Text",
  type: "text",
  onChange: undefined,
};
