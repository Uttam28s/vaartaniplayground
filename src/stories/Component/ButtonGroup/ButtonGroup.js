import React from "react";
import PropTypes from "prop-types";
import "./buttonGroup.css";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

export const SimpleButton = ({ dropdown, ...props }) => {
  return (
    <>
      {dropdown ? (
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      ) : (
        <div className="vartani-playground-button-wrapper">
          <div>
            <h5 style={{ fontSize: "medium" }}>Simple Button Group</h5>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </div>
          <div className="vartani-playground-toolbar-button">
            <h5 style={{ fontSize: "medium" }}>Button Toolbar</h5>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>
      )}
    </>
  );
};

SimpleButton.propTypes = {
  dropdown: PropTypes.bool,
};

// SimpleButton.defaultProps = {
//   variant: "primary",
//   text: "9",
// };
