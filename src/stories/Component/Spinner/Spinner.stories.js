import React from "react";
import { SimpleSpinners } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: SimpleSpinners,
};

const Template = (args) => <SimpleSpinners {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  animation: "border",
  loadingText: "Loading...",
  role: "status",
  isButton: false,
  variant: "secondary",
};
