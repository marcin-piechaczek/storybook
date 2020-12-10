import { createButton } from "./Button";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Example/Buttons",
  decorators: [withDesign],
  argTypes: {
    label: { control: "text" },
    type: {
      control: { type: "select", options: ["fill", "shadow"] },
    },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

// export const Figma = Template.bind({});
// Figma.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/4rxm0pz0PhyQ6rzPGreypN/All-buttons-variants-for-FIgma-Community?node-id=6%3A4",
//   },
// };

export const Button = Template.bind({});
Button.args = {
  primary: true,
  label: "Button",
  size: {
    small: "small",
    large: "large",
  },
};

Button.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/4rxm0pz0PhyQ6rzPGreypN/All-buttons-variants-for-FIgma-Community?node-id=5%3A12",
  },
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
