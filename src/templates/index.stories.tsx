/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react';
import { BaseTemplate, BaseProps } from './index';

export default {
  title: 'Templates/Base',
} as Meta;

const Template: Story<BaseProps> = (args) => <BaseTemplate {...args} />;

export const general = Template.bind({});
general.args = {
  children: <h1>Main Page</h1>,
};
