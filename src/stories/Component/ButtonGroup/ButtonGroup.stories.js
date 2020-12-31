import React from "react";

import { SimpleButton } from "./ButtonGroup";

export default {
  title: "Button/ButtonGroup",
  component: SimpleButton,
};

const Template = (args) => <SimpleButton {...args} />;

export const GroupButtons = Template.bind({});
GroupButtons.args = {
  dropdown: false,
};

export const NestingButton = Template.bind({});
NestingButton.args = {
  dropdown: true,
};

// CheckBoxButton.storyName = "OptionButton";

NestingButton.argTypes = {
  dropdown: {
    table: {
      disable: true,
    },
  },
};

GroupButtons.argTypes = {
  dropdown: {
    table: {
      disable: true,
    },
  },
};
