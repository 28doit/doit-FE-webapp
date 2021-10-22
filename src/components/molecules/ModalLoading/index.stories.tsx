/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { ModalLoadingItem, ModalLoadingItemProps } from './index';

export default {
  title: 'Organisms/ModalLoading',
} as Meta;

export const general = (args: ModalLoadingItemProps) => <ModalLoadingItem />;
