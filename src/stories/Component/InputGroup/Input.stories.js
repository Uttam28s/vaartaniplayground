import React from "react";

import { SimpleInput } from "./Input";

export default {
  title: "Components/Input",
  component: SimpleInput,
};

const Template = (args) => <SimpleInput {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  position: "text",
};

export const MultipleInput = Template.bind({});
MultipleInput.args = {
  position: "multipleInput",
};

export const MultipleAddon = Template.bind({});
MultipleAddon.args = {
  position: "multipleAddon",
  multipleaddon: "Prepend",
};

MultipleInput.argTypes = {
  sappendText: {
    table: {
      disable: true,
    },
  },
  position: {
    table: {
      disable: true,
    },
  },
  multipleaddon: {
    table: {
      disable: true,
    },
  },
  isbuttonAdon: {
    table: {
      disable: true,
    },
  },
  isDropDownAddon: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
  lableText: {
    table: {
      disable: true,
    },
  },
  ariadescribedby: {
    table: {
      disable: true,
    },
  },
  appendText: {
    table: {
      disable: true,
    },
  },
  arialable: {
    table: {
      disable: true,
    },
  },
};

Simple.argTypes = {
  sid: {
    table: {
      disable: true,
    },
  },
  splaceholder: {
    table: {
      disable: true,
    },
  },
  sarialable: {
    table: {
      disable: true,
    },
  },
  sonChange: {
    table: {
      disable: true,
    },
  },
  svalue: {
    table: {
      disable: true,
    },
  },
  sariadescribedby: {
    table: {
      disable: true,
    },
  },
  sappendText: {
    table: {
      disable: true,
    },
  },
};

MultipleAddon.argTypes = {
  position: {
    table: {
      disable: true,
    },
  },
  appendText: {
    table: {
      disable: true,
    },
  },
  isDropDownAddon: {
    table: {
      disable: true,
    },
  },
  sid: {
    table: {
      disable: true,
    },
  },
  splaceholder: {
    table: {
      disable: true,
    },
  },
  sarialable: {
    table: {
      disable: true,
    },
  },
  sonChange: {
    table: {
      disable: true,
    },
  },
  svalue: {
    table: {
      disable: true,
    },
  },
  sariadescribedby: {
    table: {
      disable: true,
    },
  },
};

// Simple.argTypes = {
//   checkbox: {
//     table: {
//       disable: true,
//     },
//   },
// };

// CheckBoxButton.parameters = {
//   controls: { hideNoControlsWarning: true },
// };

// CheckBoxButton.argTypes = {
//   checkbox: {
//     table: {
//       disable: true,
//     },
//   },
//   backgroundColor: {
//     table: {
//       disable: true,
//     },
//   },
//   color: {
//     table: {
//       disable: true,
//     },
//   },
//   size: {
//     table: {
//       disable: true,
//     },
//   },
//   variant: {
//     table: {
//       disable: true,
//     },
//   },
//   disabled: {
//     table: {
//       disable: true,
//     },
//   },
// };
