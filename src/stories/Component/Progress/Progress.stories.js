import React from "react";
import { SimpleProgress } from "./Progress";

export default {
  title: "Components/Progress",
  component: SimpleProgress,
};

const Template = (args) => <SimpleProgress {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  fill: 50,
  label: false,
  strip: false,
  animated: false,
  variant: "primary",
};
