/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { NoticeItem, NoticeItemProps } from './index';

export default {
  title: 'Molecules/Notice',
} as Meta;

export const Template = (args: NoticeItemProps) => <NoticeItem {...args} />;
