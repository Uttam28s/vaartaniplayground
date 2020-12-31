import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../ButtonGroup/buttonGroup.css";
import { Form, Col, InputGroup } from "react-bootstrap";
// import cardBImage from "../../assets/card-image.png";
import { SimpleButton } from "../Button/Button";

export class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    console.log(
      "🚀 ~ file: Form.js ~ line 18 ~ SimpleForm ~ handleSubmit ~ event",
      event
    );
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <SimpleButton type="submit" value="Submit form"></SimpleButton>
      </Form>
    );
  }
}

SimpleForm.propTypes = {
  // isbutton: PropTypes.bool,
  // variant: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "success",
  //   "danger",
  //   "warning",
  //   "info",
  //   "light",
  //   "dark",
  // ]),
  // direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  // dropDownText: PropTypes.string,
  // dropDownlist: PropTypes.array,
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

SimpleForm.defaultProps = {
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
