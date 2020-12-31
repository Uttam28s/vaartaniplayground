import React from "react";
import { SimpleTables } from "./Tables";

export default {
  title: "Components/Tables",
  component: SimpleTables,
  argTypes: {
    tabArray: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <SimpleTables {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  column: [
    {
      key: "id",
      header: "#",
    },
    {
      key: "firstname",
      header: "First Name",
    },
    {
      key: "lastname",
      header: "Last Name",
    },
    {
      key: "username",
      header: "User Name",
    },
  ],
  data: [
    {
      id: 1,
      firstname: "Mark",
      lastname: "Otto",
      username: "@mado",
    },
    {
      id: 2,
      firstname: "Jacob",
      lastname: "Throton",
      username: "@Jat",
    },
    {
      id: 3,
      firstname: "Dani",
      lastname: "Dom",
      username: "@Ddo",
    },
    {
      id: 4,
      firstname: "Juci",
      lastname: "kate",
      username: "@juk",
    },
  ],
};
