import React from "react";
import "../Alert/Simple/alert.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewPortStyle = (props) => {
  return <div className="center-wrapper">{props.children}</div>;
};

export default ViewPortStyle;
