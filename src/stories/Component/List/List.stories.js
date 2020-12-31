import React from "react";

import { List } from "./List";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    border: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <List {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  action: false,
};

export const Mixed = Template.bind({});
Mixed.args = {
  action: false,
  items: [
    { status: "activate", title: "Cras justo odio" },
    { status: "", title: "Dapibus ac facilisis in" },
    { status: "disabled", title: "Morbi leo risus" },
    { status: "", title: "Porta ac consectetur ac" },
    { status: "", title: "Vestibulum at eros" },
  ],
};

export const BorderLess = Template.bind({});
BorderLess.args = {
  border: true,
  action: false,
  items: [
    { title: "Cras justo odio" },
    { title: "Dapibus ac facilisis in" },
    { title: "Morbi leo risus" },
    { title: "Porta ac consectetur ac" },
    { title: "Vestibulum at eros" },
  ],
};

function alertClicked() {
  alert("You clicked the third ListGroupItem");
}
export const Actionable = Template.bind({});
Actionable.args = {
  action: true,
  items: [
    { status: "activate", title: "Cras justo odio", onClick: alertClicked },
    { title: "Dapibus ac facilisis in", onClick: alertClicked },
    { status: "disabled", title: "Morbi leo risus", onClick: alertClicked },
    { status: "", title: "Porta ac consectetur ac", onClick: alertClicked },
    { status: "", title: "Vestibulum at eros", onClick: alertClicked },
  ],
};

export const Variant = Template.bind({});
Variant.args = {
  action: true,
  items: [
    { title: "Dapibus ac facilisis in - Default" },
    { variant: "primary", title: "Cras justo odio - Primary" },
    { variant: "secondary", title: "Dapibus ac facilisis in - Secondary" },
    { variant: "success", title: "Morbi leo risus - Success" },
    { variant: "danger", title: "Porta ac consectetur ac - Danger" },
    { variant: "warning", title: "Vestibulum at eros - Warning" },
    { variant: "info", title: "Cras justo odio - Info" },
    { variant: "light", title: "Dapibus ac facilisis in - Light" },
    { variant: "dark", title: "Morbi leo risus - Dark" },
  ],
};
