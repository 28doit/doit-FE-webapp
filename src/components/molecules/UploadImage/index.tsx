import * as S from './style';
import React from 'react';
import PLUS from '../../../assets/plus.svg';

export interface UploadItemProps {}

export const UploadImageModal = ({}: UploadItemProps): React.ReactElement => {
  return (
    <S.UploadWrap>
      <S.UploadLeft>
        <S.UploadLeftTop>
          <S.UploadPtag>버튼을 눌러 파일을 업로드 하세요</S.UploadPtag>
          <S.UploadPtag>사진(JPG, PNG)</S.UploadPtag>
        </S.UploadLeftTop>
        <S.UploadLeftMid>
          <S.UploadBtnImg src={PLUS} />
        </S.UploadLeftMid>
        <S.UploadLeftBot>
          <S.UploadPtag>나중에 뭔가 넣을 예정</S.UploadPtag>
          <S.UploadPtag>나중에 뭔가 넣을 예정</S.UploadPtag>
          <S.UploadPtag>나중에 뭔가 넣을 예정</S.UploadPtag>
        </S.UploadLeftBot>
      </S.UploadLeft>
      <S.UploadRight>
        <S.UploadRightForm>
          <S.UploadInput />
          <S.UploadInput />
          <S.UploadInput />
          <S.UploadInput />
          <S.UploadInput />
          <S.UploadResultBtn>업로드</S.UploadResultBtn>
        </S.UploadRightForm>
      </S.UploadRight>
    </S.UploadWrap>
  );
};
