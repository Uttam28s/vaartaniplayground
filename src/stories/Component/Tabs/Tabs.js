import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Tabs.css";
import { Tab, Tabs } from "react-bootstrap";

export class SimpleTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "home",
    };
  }

  render() {
    const { tabArray, className } = this.props;

    return (
      <div style={{ width: "34vw" }} className={className}>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          {tabArray.map((value) => (
            <Tab
              eventKey={value.eventKey}
              title={value.title}
              disabled={value.disabled}
            >
              {value.text}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

// SimpleToasts.propTypes = {

// };
