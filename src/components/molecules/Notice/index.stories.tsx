/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { NoticeItem, NoticeProps } from './index';

export default {
  title: 'Molecules/Notice',
} as Meta;

export const Template = (args: NoticeProps) => (
  <NoticeItem {...args} />
);
