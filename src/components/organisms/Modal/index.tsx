import React from 'react';
import * as S from './style';
import {
  LoginItemModal,
  RegisterItemModal,
  EditProfileModal,
  RePasswordModal,
  UploadImageModal,
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

export const UploadImage = ({}: ModalProps): React.ReactElement => {
  return (
    <S.UploadImageOverlay>
      <S.UploadImageInner>
        <UploadImageModal />
      </S.UploadImageInner>
    </S.UploadImageOverlay>
  );
};
