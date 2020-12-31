import React from "react";
import PropTypes from "prop-types";
import "../ButtonGroup/buttonGroup.css";
import { ButtonGroup, Dropdown } from "react-bootstrap";
// import cardBImage from "../../assets/card-image.png";
import { SimpleButton } from "../Button/Button";

export const SimpleDropDown = ({
  variant,
  direction,
  dropDownText,
  dropDownlist,
  ...props
}) => {
  return (
    <>
      <div className="vartani-playground-button-wrapper">
        <div>
          <h5 style={{ fontSize: "medium" }}>Simple DropDown</h5>
          <Dropdown drop={direction}>
            <Dropdown.Toggle variant={variant} id="dropdown-basic">
              {dropDownText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropDownlist.map((value) => (
                <Dropdown.Item>{value}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="vartani-playground-toolbar-button">
          <h5 style={{ fontSize: "medium" }}>Split Dropdown</h5>
          <Dropdown as={ButtonGroup} drop={direction}>
            <SimpleButton variant={variant} value={dropDownText}></SimpleButton>

            <Dropdown.Toggle
              split
              variant={variant}
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              {dropDownlist.map((value) => (
                <Dropdown.Item>{value}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

SimpleDropDown.propTypes = {
  // isbutton: PropTypes.bool,
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
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  dropDownText: PropTypes.string,
  dropDownlist: PropTypes.array,
  // buttonTextColor: PropTypes.string,
  // cardTextColor: PropTypes.string,
  // cardBackground: PropTypes.string,
  // cardTitle: PropTypes.string,
  // cardText: PropTypes.string,
  // border: PropTypes.bool,
  // cardSubtitle: PropTypes.string,
  // cardheadertext: PropTypes.string,
  // cardFooterText: PropTypes.string,
  // tabCard: PropTypes.bool,
};

SimpleDropDown.defaultProps = {
  // isbutton: false,
  // tabCard: false,
  // cardheadertext: "Card Header",
  // cardFooterText: "Card Footer",
  // buttonText: "Action",
  // cardTitle: "Card Title",
  // cardText:
  //   "Some quick example text to build on the card title and make up the bulk of the card's content.",
  // cardSubtitle: "Card Subtitle",
};
