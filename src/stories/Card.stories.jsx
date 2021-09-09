import React from 'react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  primary: true,
  backgroundColor: 'bg-green-200'
};

export const SecondaryCard = Template.bind({});
SecondaryCard.args = {
  backgroundColor: 'bg-green-400'
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  backgroundColor: 'bg-purple-300'
};
