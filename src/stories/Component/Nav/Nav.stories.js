import React from "react";

import { SimpleNavbar } from "./Nav";

export default {
  title: "Components/Nav",
  component: SimpleNavbar,
};

const Template = (args) => <SimpleNavbar {...args} />;

function linkClick(selectedKey) {
  alert(`selected ${selectedKey}`);
}

export const Simple = Template.bind({});

Simple.args = {
  onSelect: linkClick,
  navArray: [
    { eventKey: "/home", name: "Active" },
    { eventKey: "/link-1", name: "Link-1" },
    { eventKey: "/link-2", name: "Link-2" },
    { eventKey: "/disabled", name: "Disabled", disabled: true },
  ],
};
