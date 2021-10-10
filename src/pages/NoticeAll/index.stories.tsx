/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { Notice } from './index';

export default {
  title: 'Page/NoticeAll',
} as Meta;

const Template: Story = (args) => <Notice {...args} />;

export const general = Template.bind({});
