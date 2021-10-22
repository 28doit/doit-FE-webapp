/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PaymentItem, PaymentItemProps } from './index';

export default {
  title: 'Molecules/Payment',
} as Meta;

export const Template = (args: PaymentItemProps) => <PaymentItem {...args} />;
