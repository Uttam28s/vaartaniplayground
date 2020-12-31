import React from "react";
import PropTypes from "prop-types";
import "./bedge.css";
import { Badge, Button } from "react-bootstrap";

const BadgesInButton = ({ variant, text, ...props }) => {
  return (
    <Button variant={variant}>
      Profile <Badge variant="light">{text}</Badge>
      <span className="sr-only">unread messages</span>
    </Button>
  );
};

export default BadgesInButton;

export const BadgesTags = ({
  size,
  variant,
  text,
  pill,
  backgroundColor,
  color,
  ...props
}) => {
  return (
    <Badge
      className={[`storybook-badge--${size}`].join(" ")}
      style={{ backgroundColor, color }}
      pill={pill}
      variant={variant}
    >
      {text}
    </Badge>
  );
};

BadgesTags.propTypes = {
  // size: PropTypes.oneOf(["small", "medium", "large"]),
  // size: PropTypes.oneOf(["small", "medium", "large"]),
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
  text: PropTypes.string,
  pill: PropTypes.bool,
  // backgroundColor: PropTypes.string,
  // color: PropTypes.string,
  // className: PropTypes.string,
};

// BadgesTags.defaultProps = {
//   size: "medium",
//   variant: "primary",
//   text: "badge",
//   pill: false,
//   backgroundColor: null,
//   color: null,
// };

BadgesInButton.propTypes = {
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
  text: PropTypes.string,
  // className: PropTypes.string,
};

BadgesInButton.defaultProps = {
  variant: "primary",
  text: "9",
};
