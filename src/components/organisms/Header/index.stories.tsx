/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { HeaderItem, HeaderItemProps } from './index';

export default {
  title: 'Organisms/Header',
  component: HeaderItem,
} as Meta;

export const general = ({}: HeaderItemProps) => <HeaderItem />;
