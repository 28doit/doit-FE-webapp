/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ManagementItem, ManagementItemProps } from './index';

export default {
  title: 'Molecules/Management',
} as Meta;

export const Template = (args: ManagementItemProps) => (
  <ManagementItem {...args} />
);
