import { BaseTemplate } from '../../templates';
import {
  MyMenuItem,
  EditProfileItem,
  UploadImageItem,
  PaymentItem,
  PayLogItem,
  NotFoundItem,
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
            <MyMenuItem />
            <EditProfileItem />
          </>
        );
      case 'upload-image':
        return (
          <>
            <MyMenuItem />
            <UploadImageItem />
          </>
        );
      case 'payment':
        return (
          <>
            <MyMenuItem />
            <PaymentItem />
          </>
        );
      case 'paylog':
        return (
          <>
            <MyMenuItem />
            <PayLogItem />
          </>
        );
      case 'favorite':
        return (
          <>
            <MyMenuItem />
            <FavoriteItem />
          </>
        );
      case 'purchase':
        return (
          <>
            <MyMenuItem />
            <PurchaseItem />
          </>
        );
      case 'management':
        return (
          <>
            <MyMenuItem />
            <ManagementItem />
          </>
        );
      case 'profit':
        return (
          <>
            <MyMenuItem />
            <ExchangeItem />
          </>
        );
      case 'dashboard':
        return (
          <>
            <MyMenuItem />
            <DashBoardItem />
          </>
        );
      case 'cart':
        return (
          <>
            <MyMenuItem />
            <CartItem />
          </>
        );
      default:
        return <NotFoundItem />;
    }
  };

  return (
    <BaseTemplate>
      <S.MyPageWrap>{renderPage()}</S.MyPageWrap>
    </BaseTemplate>
  );
};
