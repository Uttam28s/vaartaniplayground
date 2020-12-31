import React from "react";

import { SimpleModal } from "./Modal";

export default {
  title: "Components/Modal",
  component: SimpleModal,
};

const Template = (args) => <SimpleModal {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  handleShow: false,
  headerOnly: true,
  buttonHide: false,
  footerOnly: true,
  buttonText: "Show Modal",
  modalTitle: "Modal heading",
  modalBody:
    "Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!",
  closeButtonText: "Close",
  saveButtonText: "Save",
};

export const WithHeaders = Template.bind({});

WithHeaders.args = {
  headerOnly: true,
  buttonHide: true,
  buttonText: "Show Modal",
  modalTitle: "Modal heading",
  modalBody:
    "Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!",
  closeButtonText: "Close",
  saveButtonText: "Save",
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  footerOnly: true,
  buttonHide: true,
  buttonText: "Show Modal",
  modalTitle: "Modal heading",
  modalBody:
    "Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!",
  closeButtonText: "Close",
  saveButtonText: "Save",
};
