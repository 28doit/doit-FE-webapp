/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { MyPage } from './index';

export default {
  title: 'Page/MyPage',
} as Meta;

const Template: Story = (args) => <MyPage {...args} />;

export const general = Template.bind({});
