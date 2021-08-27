/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardInfiniteList } from './index';

export default {
  title: 'organisms/CardGrid',
} as Meta;

const Template: Story = (args) => <CardInfiniteList {...args} />;

export const general = Template.bind({});
