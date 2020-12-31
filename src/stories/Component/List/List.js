import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./List.css";
import { Col, ListGroup } from "react-bootstrap";

export class List extends Component {
  render() {
    const { items, action, border } = this.props;

    return (
      <Col md={{ span: 6, offset: 0 }}>
        <ListGroup variant={border ? "flush" : ""}>
          {items.map((value) => (
            <ListGroup.Item
              action={action}
              active={value.status === "activate"}
              disabled={value.status === "disabled"}
              onClick={value.onClick}
              variant={value.variant}
            >
              {value.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}

// List.propTypes = {
//   type: PropTypes.oneOf(["simple"]),
//   items: PropTypes.array,
// };

List.defaultProps = {
  items: [
    { status: "", title: "Cras justo odio" },
    { status: "", title: "Dapibus ac facilisis in" },
    { status: "", title: "Morbi leo risus" },
    { status: "", title: "Porta ac consectetur ac" },
    { status: "", title: "Vestibulum at eros" },
  ],
  action: true,
};
