/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';

import { NewLoginForm, RePasswordForm } from './index';

export default {
  title: 'Page/Login',
} as Meta;

const Template: Story = (args) => <NewLoginForm {...args} />;

const ReTemplate: Story = (args) => <RePasswordForm {...args} />;

export const general = Template.bind({});

export const RePwd = ReTemplate.bind({});
