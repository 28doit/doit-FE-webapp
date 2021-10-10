import * as S from './style';
import ROUTES from '../../../commons/routes';
import { useSelector } from 'react-redux';
import { Nlogout } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { ReactComponent as Login } from '../../../assets/login.svg';
import { ReactComponent as Logout } from '../../../assets/logout.svg';
import { ReactComponent as Join } from '../../../assets/new_user.svg';
import { ReactComponent as Mypage } from '../../../assets/mypage.svg';
import { ReactComponent as Cart } from '../../../assets/cart.svg';
import { ReactComponent as Best } from '../../../assets/best.svg';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export const Header = (): React.ReactElement => {
  const dispatch = useAppThunkDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const Exit = () => {
    dispatch(Nlogout());
  };

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
          <S.PC_Left>
            <S.PC_LinkBtn btnLink={ROUTES.CATEGORYITEM + 'best'} btntype="gray">
              <Best />
            </S.PC_LinkBtn>
          </S.PC_Left>
          <S.PC_Center>
            <S.PC_LogoBtn btnLink={ROUTES.HOME} btntype="default">
              Photo Logger
            </S.PC_LogoBtn>
          </S.PC_Center>
          {currentUser ? (
            <S.PC_Right>
              <S.PC_LinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                <Cart />
              </S.PC_LinkBtn>

              <S.PC_LinkBtn btnLink={ROUTES.MYDASH} btntype="gray">
                <Mypage />
              </S.PC_LinkBtn>

              <S.PC_LinkBtn
                btnLink={ROUTES.HOME}
                btnOnClick={Exit}
                btntype="gray"
              >
                <Logout />
              </S.PC_LinkBtn>
            </S.PC_Right>
          ) : (
            <S.PC_Right>
              <S.PC_LinkBtn btnLink={ROUTES.JOIN} btntype="gray">
                <Join />
              </S.PC_LinkBtn>

              <S.PC_LinkBtn btnLink={ROUTES.LOGIN} btntype="gray">
                <Login />
              </S.PC_LinkBtn>
            </S.PC_Right>
          )}
        </S.PC_Container>
      </PC>
    </>
  );
};
