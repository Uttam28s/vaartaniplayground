import React from "react";

import { BasicSwitch } from "./Switch";

export default {
  title: "COMPONENTS/Switch",
  component: BasicSwitch,
  argTypes: {},
};

const Template = (args) => <BasicSwitch {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  type: "single",
};

export const Variant = Template.bind({});
Variant.args = {
  type: "multiple",
};

Variant.argTypes = {
  checkboxVarient: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
};
