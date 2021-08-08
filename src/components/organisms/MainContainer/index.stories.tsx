/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { MainContainer, MainContainerProps } from './index';

export default {
  title: 'Organisms/MainContainer',
} as Meta;

export const general = (args: MainContainerProps) => <MainContainer />;
