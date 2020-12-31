// import { Alert } from "bootstrap";
import React from "react";
import { Alerts } from "./Alert";
// import {Alert, Button} from "react-bootstrap";

export default {
  title: "Components/Alerts",
  component: Alerts,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Alerts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Detailed = Template.bind({});
Primary.args = {
  detaile: true,
  // text: "text",
};

Primary.storyName = "Simple";
