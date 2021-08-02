/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { CardGrid, CardGridProps } from './index';
import { Type02CardData } from './example';

export default {
  title: 'Organisms/CardGrid',
} as Meta;

export const general = (args: CardGridProps) => <CardGrid {...args} />;
general.args = { data: Type02CardData, boxWidth: '27%' };
