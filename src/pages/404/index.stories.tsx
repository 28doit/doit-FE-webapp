/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';

import { Err404 } from './index';

export default {
  title: 'Page/404',
} as Meta;

const Template: Story = (args) => <Err404 {...args} />;

export const general = Template.bind({});
