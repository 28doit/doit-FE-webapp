/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';

import { Main } from './index';

export default {
  title: 'Page/Main',
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const general = Template.bind({});
