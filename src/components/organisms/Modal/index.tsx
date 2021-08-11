import React from 'react';
import * as S from './style';
import {
  LoginItemModal,
  RegisterItemModal,
  EditProfileModal,
} from '../../index';

export interface ModalProps {}
export interface MyPageProps {}

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

export const EditProfile = ({}: MyPageProps): React.ReactElement => {
  return (
    <S.EditProfileOverlay>
      <S.EditProfileInner>
        <EditProfileModal />
      </S.EditProfileInner>
    </S.EditProfileOverlay>
  );
};
