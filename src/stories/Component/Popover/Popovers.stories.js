import React from "react";
import { SimplePopovers } from "./Popovers";

export default {
  title: "Components/Popovers",
  component: SimplePopovers,
};

const Template = (args) => <SimplePopovers {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  position: "top",
  buttonVariant: "primary",
};
