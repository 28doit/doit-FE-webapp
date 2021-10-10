/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { PayLogItem, PayLogProps } from './index';

export default {
    title: 'Molecules/PayLog',
  } as Meta;
  
  export const Template = (args: PayLogProps) => (
    <PayLogItem {...args} />
  );
  