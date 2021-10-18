/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { CartItem, CartProps } from './index';

export default {
  title: 'Molecules/Cart',
} as Meta;

export const Template = (args: CartProps) => <CartItem {...args} />;
