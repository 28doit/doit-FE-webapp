import { BaseTemplate } from '../../templates';
import {
  MyMenu,
  EditProfile,
  UploadImage,
  PaymentItem,
  PayLogItem,
  ErrItem,
} from '../../components/index';
import * as S from './style';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return (
          <>
            <MyMenu />
            <EditProfile />
          </>
        );
      case 'upload-image':
        return (
          <>
            <MyMenu />
            <UploadImage />
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
