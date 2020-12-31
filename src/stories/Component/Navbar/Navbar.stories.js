import React from "react";
import { NavDropdown } from "react-bootstrap";

import { SimpleNavbar } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: SimpleNavbar,
};

const Template = (args) => <SimpleNavbar {...args} />;

function linkClick(selectedKey) {
  alert(`selected ${selectedKey}`);
}

export const Simple = Template.bind({});

Simple.args = {
  onSelect: linkClick,
  brandName: "Vaartani",
  variant: "dark",
  background: "primary",
  navArray: [
    { eventKey: "/home", name: "Active" },
    { eventKey: "/link-1", name: "Link-1" },
    { eventKey: "/link-2", name: "Link-2" },
    {
      dropdown: true,
      dropDownNav: (
        <>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another saction
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ),
    },
  ],
};
