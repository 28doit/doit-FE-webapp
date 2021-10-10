import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Btn, BtnProps, LinkBtn, LinkBtnProps } from './index';

export default {
  title: 'Atoms/Btn',
  argTypes: {
    btntype: {
      control: {
        type: 'select',
        options: ['default', 'gray'],
      },
    },
  },
  // eslint-disable-next-line prettier/prettier
} as Meta;

export const defaultBtn = (args: BtnProps) => (
  <Btn {...args} btnOnClick={action('Button is clicked')} />
);
defaultBtn.args = { children: '테스트', disabled: false };

export const linkBtn = (args: LinkBtnProps) => (
  <LinkBtn {...args} btnOnClick={action('LinkButton is clicked')} />
);
linkBtn.args = { children: '테스트', disabled: false, btnLink: '' };
