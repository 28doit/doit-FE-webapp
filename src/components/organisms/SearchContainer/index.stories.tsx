/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { SearchContainer, SearchContainerProps, BestCategoryContainer } from './index';

export default {
  title: 'Organisms/SearchContainer',
} as Meta;

export const general = (args: SearchContainerProps) => <SearchContainer />;

export const general2 = (args: SearchContainerProps) => <BestCategoryContainer />;
