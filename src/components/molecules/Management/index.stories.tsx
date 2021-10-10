/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ManagementItem, ManagementProps } from './index';

export default {
  title: 'Molecules/Management',
} as Meta;

export const Template = (args: ManagementProps) => <ManagementItem {...args} />;
