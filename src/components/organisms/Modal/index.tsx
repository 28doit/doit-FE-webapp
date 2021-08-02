import React from 'react';
import * as S from './style';
import { LoginItemModal, RegisterItemModal } from '../../index';

export interface ModalProps {}
export function LoginModal({}: ModalProps): React.ReactElement {
  return (
    <S.ModalOverlay>
      <S.ModalInner>
        <LoginItemModal />
      </S.ModalInner>
    </S.ModalOverlay>
  );
}
export function RegisterModal({}: ModalProps): React.ReactElement {
  return (
    <S.ModalOverlay>
      <S.ModalInner>
        <RegisterItemModal />
      </S.ModalInner>
    </S.ModalOverlay>
  );
}
