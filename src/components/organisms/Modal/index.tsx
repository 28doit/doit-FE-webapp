import React from 'react';
import * as S from './style';
import { LoginItemModal, RegisterItemModal } from '../../index';

export interface ModalProps {}

export const LoginModal = ({}: ModalProps): React.ReactElement => {
  return (
    <S.ModalLoginOverlay>
      <S.ModalLoginInner>
        <LoginItemModal />
      </S.ModalLoginInner>
    </S.ModalLoginOverlay>
  );
};

export const RegisterModal = ({}: ModalProps): React.ReactElement => {
  return (
    <S.ModalJoinOverlay>
      <S.ModalJoinInner>
        <RegisterItemModal />
      </S.ModalJoinInner>
    </S.ModalJoinOverlay>
  );
};
