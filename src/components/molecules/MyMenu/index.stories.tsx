/* eslint-disable prettier/prettier */
import { Meta, Story } from '@storybook/react';
import { MyMenuItem, MyMenuItemProps } from './index';

export default {
  title: 'Molecules/MyMenu',
} as Meta;

export const general = ({}: MyMenuItemProps) => <MyMenuItem />;
