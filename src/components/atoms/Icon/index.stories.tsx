import { Meta } from '@storybook/react';
import { Icon, IconProps } from './index';
// eslint-disable-next-line prettier/prettier
export default { title: 'Atoms/Icon' } as Meta;

export const general = (args: IconProps) => <Icon {...args} />;

general.args = {
  iconType: 'fas',
  iconTitle: 'camera',
  iconSize: '36px',
};
