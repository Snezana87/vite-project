import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';
import * as BannerStories from './Banner.stories';
import * as CardStories from './Card.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
export const PrimaryBanner = Template.bind({});
PrimaryBanner.args = {
  ...BannerStories.PrimaryBanner.args,
};

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  ...CardStories.PrimaryCard.args,
};