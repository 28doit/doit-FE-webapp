/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';

import { Search } from './index';

export default {
  title: 'Page/Search',
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const general = Template.bind({});
