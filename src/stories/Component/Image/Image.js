import React from "react";
import PropTypes from "prop-types";
import { Col, Image } from "react-bootstrap";
import placeholderImage from "../../assets/card-image.png";
// import "./image.css"

/**
 * Primary UI component for user interaction
 */
export const SimpleImage = ({ src, type, height, width, ...props }) => {
  switch (type) {
    case "rounded":
      return (
        <Col className="image-class" xs={6} md={4}>
          <Image
            height={height}
            width={width}
            src={src || placeholderImage}
            rounded
          />
        </Col>
      );
    case "roundedCircle":
      return (
        <Col xs={6} md={4}>
          <Image
            src={src || placeholderImage}
            height={height}
            width={width}
            roundedCircle
          />
        </Col>
      );
    case "thumbnail":
      return (
        <Col xs={6} md={4}>
          <Image
            src={src || placeholderImage}
            height={height}
            width={width}
            thumbnail
          />
        </Col>
      );

    default:
      break;
  }
};

SimpleImage.propTypes = {
  type: PropTypes.oneOf(["rounded", "roundedCircle", "thumbnail"]),
  height: PropTypes.number,
  width: PropTypes.number,
};

SimpleImage.defaultProps = {
  height: 200,
  width: 200,
};
