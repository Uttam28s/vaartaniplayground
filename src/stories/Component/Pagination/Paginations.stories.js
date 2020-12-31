import React from "react";
import { SimplePagination } from "./Paginations";

export default {
  title: "Components/Pagination",
  component: SimplePagination,
};

const Template = (args) => <SimplePagination {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  active: 3,
  size: "lg",
};
