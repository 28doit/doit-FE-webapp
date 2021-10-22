/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { MainContainerItem, MainContainerItemProps } from './index';

export default {
  title: 'Organisms/MainContainer',
} as Meta;

export const general = (args: MainContainerItemProps) => <MainContainerItem />;
