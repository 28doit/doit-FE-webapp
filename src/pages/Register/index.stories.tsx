/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { NewJoinForm } from './index';

export default {
  title: 'Page/Join',
} as Meta;

const Template: Story = (args) => <NewJoinForm {...args} />;

export const general = Template.bind({});
