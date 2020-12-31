import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Tables.css";
import { Table } from "react-bootstrap";

export class SimpleTables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "home",
    };
  }

  render() {
    const { column, data, className } = this.props;

    return (
      <div style={{ width: "34vw" }} className={className}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {column.map((value) => (
                <th>{value.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((cdata, did) => {
              const keyArray = Object.keys(cdata);
              return (
                <tr>
                  {keyArray.map((kdata) => (
                    <td>{cdata[kdata]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

// SimpleToasts.propTypes = {

// };
