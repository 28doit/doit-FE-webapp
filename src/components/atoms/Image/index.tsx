import React from 'react';
import * as S from './style';

export interface ImageProps {
  src: any;
  alt: string;
  height?: string;
}

export const Image = ({ height, ...props }: ImageProps): React.ReactElement => {
  return <S.Image height={height} {...props} />;
};
