/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { SearchContainer, SearchContainerProps } from './index';

export default {
  title: 'Organisms/SearchContainer',
} as Meta;

export const general = (args: SearchContainerProps) => <SearchContainer />;
