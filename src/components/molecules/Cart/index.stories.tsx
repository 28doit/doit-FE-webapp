/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { CartItem, CartItemProps } from './index';

export default {
  title: 'Molecules/Cart',
} as Meta;

export const Template = (args: CartItemProps) => <CartItem {...args} />;
