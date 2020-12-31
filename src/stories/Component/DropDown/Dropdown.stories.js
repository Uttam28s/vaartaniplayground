import React from "react";

import { SimpleDropDown } from "./DropDown";

export default {
  title: "DropDown/DropDown",
  component: SimpleDropDown,
  // argTypes: {
  //   cardTextColor: { control: "color" },
  //   cardBackground: { control: "color" },
  //   buttonbackground: { control: "color" },
  //   buttonTextColor: { control: "color" },
  // },
};

const Template = (args) => <SimpleDropDown {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  dropDownText: "DropDown Button",
  dropDownlist: ["Action", "Other Action", "Something else"],
  // border: true,
  // header: false,
};

// Simple.argTypes = {
//   cardTextColor: { control: "color" },
//   cardBackground: { control: "color" },
//   buttonbackground: { control: "color" },
//   buttonTextColor: { control: "color" },
//   border: {
//     table: {
//       disable: true,
//     },
//   },
//   cardheadertext: {
//     table: {
//       disable: true,
//     },
//   },
//   cardFooterText: {
//     table: {
//       disable: true,
//     },
//   },
//   tabCard: {
//     table: {
//       disable: true,
//     },
//   },
//   header: {
//     table: {
//       disable: true,
//     },
//   },
// };

// export const HeaderFooter = Template.bind({});
// HeaderFooter.args = {
//   header: true,
// };

// HeaderFooter.argTypes = {
//   header: {
//     table: {
//       disable: true,
//     },
//   },
//   isbutton: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonbackground: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonTextColor: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonVarient: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonText: {
//     table: {
//       disable: true,
//     },
//   },
//   tabCard: {
//     table: {
//       disable: true,
//     },
//   },
// };

// export const Navigation = Template.bind({});
// Navigation.args = {
//   tabCard: true,
// };

// Navigation.storyName = "With Tab";

// // Outline.argTypes = {
// //   controls: { disable: true },
// // };

// // Navigation.parameters = {
// //   controls: { hideNoControlsWarning: true },
// // };

// Navigation.argTypes = {
//   cardSubtitle: {
//     table: {
//       disable: true,
//     },
//   },
//   cardheadertext: {
//     table: {
//       disable: true,
//     },
//   },
//   cardFooterText: {
//     table: {
//       disable: true,
//     },
//   },
//   border: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonText: {
//     table: {
//       disable: true,
//     },
//   },
//   tabCard: {
//     table: {
//       disable: true,
//     },
//   },
//   cardTextColor: {
//     table: {
//       disable: true,
//     },
//   },
//   cardBackground: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonbackground: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonTextColor: {
//     table: {
//       disable: true,
//     },
//   },
//   isbutton: {
//     table: {
//       disable: true,
//     },
//   },
//   cardVarient: {
//     table: {
//       disable: true,
//     },
//   },
//   buttonVarient: {
//     table: {
//       disable: true,
//     },
//   },
// };
