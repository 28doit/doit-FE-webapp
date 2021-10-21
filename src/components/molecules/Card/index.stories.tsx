/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from './index';
import test1 from '../../../assets/test1.jpg';
import test2 from '../../../assets/test2.jpg';
import test3 from '../../../assets/test3.jpg';
import test4 from '../../../assets/test4.jpg';
import ProImg from '../../../assets/cats.svg';

export default { title: 'Molecules/Card' } as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Type01 = Template.bind({});
Type01.args = {
  CardType: 'type01',
  imgSrc: test2,
  isSubscribe: false,
  author: 'poeynus',
  viewCount: 102,
  downloadCount: 24,
  likeCount: 242,
  proFileImg: ProImg,
  isCart: true,
  cardOnclick: () => {
    console.log('hi');
  },
};

export const Type02 = Template.bind({});
Type02.args = {
  CardType: 'type02',
  author: 'poeynus',
  authorPhotos: '33',
  isSubscribe: true,
  authorFimg: test1,
  authorSimg: test2,
  authorTimg: test3,
  authorHimg: test4,
  cardOnclick: () => {
    console.log('hi');
  },
};

export const Type03 = Template.bind({});
Type03.args = {
  CardType: 'type03',
  likeImg: test3,
  isSubscribe: true,
  cardOnclick: () => {
    console.log('hi');
  },
};

export const Type04 = Template.bind({});
Type04.args = {
  CardType: 'type04',
  imgSrc: test2,
  imgCategory: '극장',
  cardOnclick: () => {
    console.log('hi');
  },
};

export const Type05 = Template.bind({});
Type05.args = {
  CardType: 'type05',
  likeImg: test3,
  cardOnclick: () => {
    console.log('hi');
  },
};

export const Type06 = Template.bind({});
Type06.args = {
  CardType: 'type06',
  likeImg: test3,
  cardOnclick: () => {
    console.log('hi');
  },
};
