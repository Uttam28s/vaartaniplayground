import React from "react";
import { SimpleToasts } from "./Toasts";

export default {
  title: "Components/Toast",
  component: SimpleToasts,
};

const Template = (args) => <SimpleToasts {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  toastHeader: (
    <>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </>
  ),
  toastBody: "Woohoo, you're reading this text in a Toast!",
  buttonVariant: "primary",
};
