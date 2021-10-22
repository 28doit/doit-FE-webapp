/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { FavoriteItem, FavoriteItemProps } from './index';

export default {
  title: 'Molecules/Favorite',
} as Meta;

export const Template = (args: FavoriteItemProps) => <FavoriteItem {...args} />;
