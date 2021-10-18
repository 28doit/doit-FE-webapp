import { BaseTemplate } from '../../templates';
import {
  MyMenu,
  EditProfileModal,
  UploadImageModal,
  PaymentItem,
  PayLogItem,
  ErrItem,
  FavoriteItem,
  PurchaseItem,
  ManagementItem,
  ExchangeItem,
  DashBoardItem,
  CartItem,
} from '../../components/index';
import * as S from './style';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return (
          <>
            <MyMenu />
            <EditProfileModal />
          </>
        );
      case 'upload-image':
        return (
          <>
            <MyMenu />
            <UploadImageModal />
          </>
        );
      case 'payment':
        return (
          <>
            <MyMenu />
            <PaymentItem />
          </>
        );
      case 'paylog':
        return (
          <>
            <MyMenu />
            <PayLogItem />
          </>
        );
      case 'favorite':
        return (
          <>
            <MyMenu />
            <FavoriteItem />
          </>
        );
      case 'purchase':
        return (
          <>
            <MyMenu />
            <PurchaseItem />
          </>
        );
      case 'management':
        return (
          <>
            <MyMenu />
            <ManagementItem />
          </>
        );
      case 'profit':
        return (
          <>
            <MyMenu />
            <ExchangeItem />
          </>
        );
      case 'dashboard':
        return (
          <>
            <MyMenu />
            <DashBoardItem />
          </>
        );
      case 'cart':
        return (
          <>
            <MyMenu />
            <CartItem />
          </>
        );
      default:
        return <ErrItem />;
    }
  };

  return (
    <BaseTemplate>
      <S.MyPageWrap>{renderPage()}</S.MyPageWrap>
    </BaseTemplate>
  );
};
