/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { NotFoundItem, NotFoundItemProps } from './index';

export default {
  title: 'Molecules/NotFound',
} as Meta;

export const Template = ({}: NotFoundItemProps) => <NotFoundItem />;
