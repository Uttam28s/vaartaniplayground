import React from "react";

import { SimpleImage } from "./Image";

export default {
  title: "Components/Image",
  component: SimpleImage,
};

const Template = (args) => <SimpleImage {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  type: "rounded",
};

// Simple.argTypes = {
//   src: {
//     table: {
//       disable: true,
//     },
//   },
// };
