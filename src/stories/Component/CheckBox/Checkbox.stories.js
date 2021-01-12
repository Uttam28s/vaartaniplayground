import React from "react";

import { BasicCheckBox } from "./CheckBox";

export default {
  title: "COMPONENTS/Checkbox",
  component: BasicCheckBox,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <BasicCheckBox {...args} />;

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
};
