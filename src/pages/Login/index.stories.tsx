/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';

import { NewLoginForm } from './index';

export default {
  title: 'Page/Login',
} as Meta;

const Template: Story = (args) => <NewLoginForm {...args} />;

export const general = Template.bind({});
