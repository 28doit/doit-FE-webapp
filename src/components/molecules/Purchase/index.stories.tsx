/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PurchaseItem, PurchaseItemProps } from './index';

export default {
  title: 'Molecules/Purchase',
} as Meta;

export const Template = (args: PurchaseItemProps) => <PurchaseItem {...args} />;
