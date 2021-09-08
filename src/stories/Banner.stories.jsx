import React from 'react';

import { Banner } from './Banner';
import * as ButtonStories from './Button.stories';

export default {
  title: 'Example/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {action: 'clicked'},
    color: {control: 'color'}
  },
};

const Template = (args) => <Banner {...args} />;


export const PrimaryBanner = Template.bind({});
PrimaryBanner.args = {
    backgroundColor: "lightblue",
    primary: true,
};
export const SecondaryBanner = Template.bind({});
SecondaryBanner.args = {
    backgroundColor: "lightgreen",
    color: "white",
    primary: true,
};