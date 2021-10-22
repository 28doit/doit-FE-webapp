/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { DashBoardItem, DashBoardItemProps } from './index';

export default {
  title: 'Molecules/DashBoard',
} as Meta;

export const Template = ({}: DashBoardItemProps) => <DashBoardItem />;
