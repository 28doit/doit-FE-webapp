import { BaseTemplate } from '../../templates';
import * as S from './style';
import ErrSvg from '../../assets/404.svg';
import ROUTES from '../../commons/routes';

export const Err404 = () => {
  return (
    <BaseTemplate>
      <S.ErrContainer>
        <S.ErrImg src={ErrSvg} />
        <S.ErrTxt>찾을 수 없는 페이지 입니다.</S.ErrTxt>
        <S.ErrTxt>원하시는 결과를 찾을 수 없습니다.</S.ErrTxt>
        <S.ErrTxt>
          올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 문의하시기
          바랍니다.
        </S.ErrTxt>
        <S.ReturnHome
          btnOnClick={() => {
            window.location.replace(ROUTES.HOME);
          }}
        >
          메인으로 이동
        </S.ReturnHome>
      </S.ErrContainer>
    </BaseTemplate>
  );
};
