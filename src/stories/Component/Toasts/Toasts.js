import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Toasts.css";
import { Toast } from "react-bootstrap";
import { SimpleButton } from "../Button/Button";

export class SimpleToasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: false,
    };
  }

  render() {
    const { buttonVariant, toastHeader, toastBody } = this.props;

    return (
      <div>
        <Toast
          show={this.state.shows}
          style={{ position: "absolute", top: 0, right: 0 }}
          onClose={() => this.setState({ shows: !this.state.shows })}
        >
          <Toast.Header>{toastHeader}</Toast.Header>
          <Toast.Body>{toastBody}</Toast.Body>
        </Toast>
        <SimpleButton
          variant={buttonVariant}
          onClick={() => this.setState({ shows: !this.state.shows })}
          value={`Toggle Toast`}
        ></SimpleButton>
      </div>
    );
  }
}

SimpleToasts.propTypes = {
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
};
