import React from 'react';
import * as S from './style';
import {
  LoginItemModal,
  RegisterItemModal,
  EditProfileModal,
  RePasswordModal,
} from '../../index';

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

export const EditProfile = ({}: ModalProps): React.ReactElement => {
  return (
    <S.EditProfileOverlay>
      <S.EditProfileInner>
        <EditProfileModal />
      </S.EditProfileInner>
    </S.EditProfileOverlay>
  );
};

export const RePassword = ({}: ModalProps): React.ReactElement => {
  return (
    <S.RePasswordOverlay>
      <S.RePasswordInner>
        <RePasswordModal />
      </S.RePasswordInner>
    </S.RePasswordOverlay>
  );
};
