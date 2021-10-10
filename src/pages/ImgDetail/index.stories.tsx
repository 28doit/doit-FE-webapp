/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImgDetail } from './index';

export default {
  title: 'Page/ImgDetail',
} as Meta;

const Template: Story = (args) => <ImgDetail {...args} />;

export const general = Template.bind({});
