import React from "react";
import { addDecorator } from "@storybook/react";
import ViewPortStyle from "../src/stories/Component/CommonStyle/ViewPortStyle";
import { withKnobs } from "@storybook/addon-knobs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => <ViewPortStyle>{story()}</ViewPortStyle>);
addDecorator(withKnobs);
