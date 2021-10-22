/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import {
  SearchContainerItem,
  SearchContainerItemProps,
  BestCategoryContainerItem,
} from './index';

export default {
  title: 'Organisms/SearchContainer',
} as Meta;

export const general = (args: SearchContainerItemProps) => (
  <SearchContainerItem />
);

export const general2 = (args: SearchContainerItemProps) => (
  <BestCategoryContainerItem />
);
