/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ExchangeItem, ExchangeItemProps } from './index';

export default {
  title: 'Molecules/Exchange',
} as Meta;

export const Template = ({}: ExchangeItemProps) => <ExchangeItem />;
