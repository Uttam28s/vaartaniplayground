import React, { Component } from "react";
import PropTypes from "prop-types";
import "./input.css";
// import { action } from "@storybook/addon-actions";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";

export class SimpleInput extends Component {
  render() {
    const {
      position,
      type,
      value,
      onChange,
      appendText,
      lableText,
      ariadescribedby,
      arialable,
      placeholder,
      prependText,
      className,
      id,
      sid,
      splaceholder,
      sarialable,
      sonChange,
      svalue,
      sariadescribedby,
      multipleaddon,
      isbuttonAdon,
      sappendText,
      isDropDownAddon,
    } = this.props;
    switch (position) {
      case "text":
        return (
          <>
            <Col md={{ span: 4, offset: 0 }}>
              <label htmlFor={id}>{lableText}</label>
              <InputGroup className={`${className} mb-3`}>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  type={type}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
              </InputGroup>
            </Col>
          </>
        );
      case "Prepend":
        return (
          <>
            <Col md={{ span: 6, offset: 0 }}>
              <label htmlFor={id}>{lableText}</label>
              <InputGroup className={`${className} mb-3`}>
                <InputGroup.Prepend>
                  {isbuttonAdon ? (
                    <Button variant="success">{prependText}</Button>
                  ) : isDropDownAddon ? (
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title="Dropdown"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <InputGroup.Text id="basic-addon1">
                      {prependText}
                    </InputGroup.Text>
                  )}
                </InputGroup.Prepend>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  type={type}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
              </InputGroup>
            </Col>
          </>
        );

      case "Append":
        return (
          <>
            <Col md={{ span: 4, offset: 0 }}>
              <label htmlFor={id}>{lableText}</label>
              <InputGroup className={`${className} mb-3`}>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  type={type}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
                <InputGroup.Append>
                  {isbuttonAdon ? (
                    <Button variant="success">{appendText}</Button>
                  ) : isDropDownAddon ? (
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title="Dropdown"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <InputGroup.Text id="basic-addon2">
                      {appendText}
                    </InputGroup.Text>
                  )}
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </>
        );

      case "bothSide":
        return (
          <>
            {" "}
            <Col md={{ span: 6, offset: 0 }}>
              <InputGroup className={`${className} mb-3`}>
                <InputGroup.Prepend>
                  {isbuttonAdon ? (
                    <Button variant="success">{prependText}</Button>
                  ) : (
                    <InputGroup.Text>{prependText}</InputGroup.Text>
                  )}
                </InputGroup.Prepend>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  type={type}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
                <InputGroup.Append>
                  {isbuttonAdon ? (
                    <Button variant="success">{appendText}</Button>
                  ) : (
                    <InputGroup.Text id="basic-addon1">
                      {appendText}
                    </InputGroup.Text>
                  )}
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </>
        );

      case "textArea":
        return (
          <>
            {" "}
            <Col md={{ span: 8, offset: 0 }}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>{prependText}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  as="textarea"
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
              </InputGroup>
            </Col>
          </>
        );

      case "multipleInput":
        return (
          <>
            {" "}
            <Col md={{ span: 8, offset: 0 }}>
              <label htmlFor={id}>{lableText}</label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>{prependText}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
                <FormControl
                  id={sid}
                  placeholder={splaceholder}
                  aria-label={sarialable}
                  onChange={sonChange}
                  value={svalue}
                  aria-describedby={sariadescribedby}
                />
              </InputGroup>
            </Col>
          </>
        );

      case "multipleAddon":
        return (
          <>
            {" "}
            <Col md={{ span: 8, offset: 0 }}>
              <label htmlFor={id}>{lableText}</label>
              <InputGroup>
                {multipleaddon === "Prepend" ? (
                  isbuttonAdon ? (
                    <InputGroup.Prepend>
                      <Button variant="success">Button</Button>
                      <Button variant="success">Button</Button>
                    </InputGroup.Prepend>
                  ) : (
                    <InputGroup.Prepend>
                      <InputGroup.Text>{prependText}</InputGroup.Text>
                      <InputGroup.Text>{sappendText}</InputGroup.Text>
                    </InputGroup.Prepend>
                  )
                ) : (
                  ""
                )}
                <FormControl
                  id={id}
                  placeholder={placeholder}
                  aria-label={arialable}
                  type={type}
                  onChange={onChange}
                  value={value}
                  aria-describedby={ariadescribedby}
                />
                {multipleaddon === "Append" ? (
                  isbuttonAdon ? (
                    <InputGroup.Append>
                      <Button variant="success">Button</Button>
                      <Button variant="success">Button</Button>
                    </InputGroup.Append>
                  ) : (
                    <InputGroup.Append>
                      <InputGroup.Text>{appendText}</InputGroup.Text>
                      <InputGroup.Text>{sappendText}</InputGroup.Text>
                    </InputGroup.Append>
                  )
                ) : (
                  ""
                )}
              </InputGroup>
            </Col>
          </>
        );

      default:
        break;
    }
  }
}
SimpleInput.propTypes = {
  position: PropTypes.oneOf([
    "text",
    "Prepend",
    "Append",
    "bothSide",
    "textArea",
  ]),
  multipleaddon: PropTypes.oneOf(["Prepend", "Append"]),
  isbuttonAdon: PropTypes.bool,
  isDropDownAddon: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  lableText: PropTypes.string,
  ariadescribedby: PropTypes.string,
  arialable: PropTypes.string,
  placeholder: PropTypes.string,
  prependText: PropTypes.string,
  appendText: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  sid: PropTypes.string,
  splaceholder: PropTypes.string,
  sarialable: PropTypes.string,
  sonChange: PropTypes.func,
  svalue: PropTypes.string,
  sariadescribedby: PropTypes.string,
  sappendText: PropTypes.string,
};

SimpleInput.defaultProps = {
  position: "text",
  lableText: "input",
  placeholder: "User Name",
  prependText: "https://example.com/users/",
  appendText: "@example.com",
  sappendText: "secound",
};
