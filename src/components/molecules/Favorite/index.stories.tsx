/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { FavoriteItem, FavoriteProps } from './index';

export default {
  title: 'Molecules/Favorite',
} as Meta;

export const Template = (args: FavoriteProps) => <FavoriteItem {...args} />;
