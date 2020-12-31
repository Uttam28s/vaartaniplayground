import React from "react";
import { SimpleTooltips } from "./Tooltips";

export default {
  title: "Components/Tooltips",
  component: SimpleTooltips,
};

const Template = (args) => <SimpleTooltips {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  position: "top",
  buttonVariant: "primary",
};
