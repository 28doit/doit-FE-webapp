/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from './index';
import test from '../../../assets/simple.jpg';

export default { title: 'Molecules/Card' } as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Type01 = Template.bind({});
Type01.args = {
  CardType: 'type01',
  imgSrc: test,
  imgWidth: '330px',
  imgHeight: '330px',
  isSubscribe: true,
  author: 'poeynus',
  viewCount: 102,
  downloadCount: 24,
  likeCount: 242,
};
