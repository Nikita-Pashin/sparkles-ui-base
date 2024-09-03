import { Button } from "./Button";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Button content",
      control: {
        type: "text"
      }
    }
  }
};

export const ButtonExample = {
  args: {
    children: "Button",
    onClick: () => console.log('click'),
  }
};