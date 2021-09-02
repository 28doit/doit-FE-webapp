/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PaymentItem, PaymentProps } from './index';

export default {
  title: 'Molecules/Payment',
} as Meta;

export const Template = (args: PaymentProps) => (
  <PaymentItem {...args} />
);
