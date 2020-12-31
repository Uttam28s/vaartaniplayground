import React from "react";

import { SimpleButton } from "./Button";

export default {
  title: "Button/Button",
  component: SimpleButton,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    outline: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "large"],
      },
    },
    // actions: { argTypesRegex: "^on.*" },
  },
};

function alertText(e) {
  e.preventDefault();
  alert("you Clicked button");
}

const Template = (args) => <SimpleButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  variant: "primary",
  size: "large",
  disabled: false,
  onClick: alertText,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "primary",
  size: "large",
  outline: true,
  disabled: false,
};

export const CheckBoxButton = Template.bind({});
CheckBoxButton.args = {
  checkbox: true,
  size: "large",
};

CheckBoxButton.storyName = "OptionButton";

Outline.argTypes = {
  backgroundColor: {
    table: {
      disable: true,
    },
  },
  color: {
    table: {
      disable: true,
    },
  },
  checkbox: {
    table: {
      disable: true,
    },
  },
};

Simple.argTypes = {
  checkbox: {
    table: {
      disable: true,
    },
  },
};

CheckBoxButton.parameters = {
  controls: { hideNoControlsWarning: true },
};

CheckBoxButton.argTypes = {
  checkbox: {
    table: {
      disable: true,
    },
  },
  backgroundColor: {
    table: {
      disable: true,
    },
  },
  color: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
};
