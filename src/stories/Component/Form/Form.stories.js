import React from "react";

import { SimpleForm } from "./Form";

export default {
  title: "Form/Form",
  component: SimpleForm,
};

const Template = (args) => <SimpleForm {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  // dropDownText: "DropDown Button",
  // dropDownlist: ["Action", "Other Action", "Something else"],
  // border: true,
  // header: false,
};
