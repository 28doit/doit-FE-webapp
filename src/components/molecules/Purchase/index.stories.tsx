/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PurchaseItem, PurchaseProps } from './index';

export default {
  title: 'Molecules/Purchase',
} as Meta;

export const Template = (args: PurchaseProps) => <PurchaseItem {...args} />;
