/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  CardGridItem,
  CardGridItemProps,
  CategoryGridItem,
  CategoryGridItemProps,
} from './index';

export default {
  title: 'organisms/CardGrid',
} as Meta;

const Template: Story<CardGridItemProps> = (args) => <CardGridItem {...args} />;

const TemplateS: Story<CategoryGridItemProps> = (args) => (
  <CategoryGridItem {...args} />
);

export const general = Template.bind({});

export const category = TemplateS.bind({});
