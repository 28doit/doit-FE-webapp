import * as S from './style';
import ErrSvg from '../../../assets/404.svg';
import ROUTES from '../../../commons/routes';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export const ErrItem = () => {
  return (
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Container>
          <S.PC_Img src={ErrSvg} />
          <S.PC_Txt>찾을 수 없는 페이지 입니다.</S.PC_Txt>
          <S.PC_Txt>원하시는 결과를 찾을 수 없습니다.</S.PC_Txt>
          <S.PC_Txt>
            올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 문의하시기
            바랍니다.
          </S.PC_Txt>
          <S.PC_Btn
            btnOnClick={() => {
              window.location.replace(ROUTES.HOME);
            }}
          >
            메인으로 이동
          </S.PC_Btn>
        </S.PC_Container>
      </PC>
    </>
  );
};
