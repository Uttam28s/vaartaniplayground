import React from "react";
import { SimpleTabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: SimpleTabs,
  argTypes: {
    tabArray: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <SimpleTabs {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  tabArray: [
    {
      eventKey: "home",
      title: "Home",
      text:
        "Be wise as thou art cruel; do not press My tongue-tied patience with too much disdain; Lest sorrow lend me words, and words express The manner of my pity-wanting pain. If I might teach thee wit, better it were, Though not to love, yet, love to tell me so;-- As testy sick men, when their deaths be near, No news but health from their physicians know;-- For, if I should despair, I should grow mad, And in my madness might speak ill of thee",
    },
    {
      eventKey: "profile",
      title: "Profile",
      text:
        "How sweet and lovely dost thou make the shame Which, like a canker in the fragrant rose, Doth spot the beauty of thy budding name! O! in what sweets dost thou thy sins enclose. That tongue that tells the story of thy days, Making lascivious comments on thy sport, Cannot dispraise, but in a kind of praise; Naming thy name, blesses an ill report. O! what a mansion have those vices got Which for their habitation chose out thee,",
    },
    {
      eventKey: "contact",
      title: "Contact",
      disabled: true,
    },
  ],
};
