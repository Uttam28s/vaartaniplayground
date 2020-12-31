// import { Alert } from "bootstrap";
// import { select } from "@storybook/addon-knobs";
import React from "react";
import BadgesInButton, { BadgesTags } from "./Bedge";
// import {Alert, Button} from "react-bootstrap";

export default {
  title: "Components/Bedges",
  parameters: {
    component: BadgesInButton,
    subcomponents: {
      BadgesTags,
    },
    // docs: {
    //   page: mdx,
    // },
  },
  // component: Alerts,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   color: { control: "color" },
  // },
};

const Template = (args) => <BadgesInButton {...args} />;
const BasicBedgeTemp = (args) => <BadgesTags {...args} />;

export const ButtonBedge = Template.bind({});
ButtonBedge.args = {
  variant: "success",
  text: "1",
};

export const BasicBedge = BasicBedgeTemp.bind({});
BasicBedge.args = {
  // size: "large",
  variant: "success",
  text: "1",
  pill: false,
  // backgroundColor: { control: "color" },
  // color: { control: "color" },
};

BasicBedge.argTypes = {
  backgroundColor: { control: "color" },
  color: { control: "color" },
  size: {
    control: {
      type: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
};

// Primary.storyName = "Simple";

// const props = {
//   buttonBedge: () => ({
//     variant: "success",
//     text: "1",
//   }),
//   basicBedge: () => ({
//     variant: "success",
//     text: "1",
//     size: "medium",
//   }),
// };

// export const ButtonBedge = () => {
//   // const {variant, text, ...rest} = props.buttonBedge();
//   return <BadgesInButton {...props.buttonBedge()} />;
// };

// export const BasicBedge = () => {
//   // const {variant, text, ...rest} = props.buttonBedge();
//   return <BasicBedge {...props.basicBedge()} />;
// };
