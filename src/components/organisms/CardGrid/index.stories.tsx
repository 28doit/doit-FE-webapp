/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardInfiniteList, CategoryGrid } from './index';

export default {
  title: 'organisms/CardGrid',
} as Meta;

const Template: Story = (args) => <CardInfiniteList {...args} />;

const TemplateS: Story = (args) => <CategoryGrid {...args} />;


export const general = Template.bind({});

export const category = TemplateS.bind({});