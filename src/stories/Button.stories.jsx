import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {action: "clicked"},
    label: { control: 'text' }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const Success = Template.bind({});
Success.args = {
  backgroundColor: 'green',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  backgroundColor: 'red',
  label: 'Button',
};

export const Log = Template.bind({});
Log.args = {
  backgroundColor: 'purple',
  onClick:()=>console.log('Button clicked'),
  label: 'Button',
};

