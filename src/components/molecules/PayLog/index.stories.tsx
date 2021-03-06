/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PayLogItem, PayLogItemProps } from './index';

export default {
  title: 'Molecules/PayLog',
} as Meta;

export const Template = (args: PayLogItemProps) => <PayLogItem {...args} />;
