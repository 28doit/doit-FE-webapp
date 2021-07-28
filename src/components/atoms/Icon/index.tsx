import React from 'react';
import {
  IconName,
  IconPrefix,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

export interface IconProps {
  iconType: IconPrefix;
  iconTitle: IconName;
  iconSize?: string;
}

export const Icon = ({
  iconType,
  iconTitle,
  ...props
}: IconProps): React.ReactElement => {
  library.add(fas); // 나중에 필요하면 fab도 추가 하면 됨
  return <S.Icon icon={[iconType, iconTitle]} {...props} />;
};
