import { BaseTemplate } from '../../templates';
import {
  MyMenu,
  EditProfile,
  UploadImage,
  PaymentItem,
  PayLogItem,
} from '../../components/index';
import * as S from './style';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return <EditProfile />;
      case 'upload-image':
        return <UploadImage />;
      case 'payment':
        return <PaymentItem />;
      case 'paylog':
        return <PayLogItem />;
      default:
        return '';
    }
  };

  return (
    <BaseTemplate>
      <S.MyPageWrap>
        <MyMenu />
        {renderPage()}
      </S.MyPageWrap>
    </BaseTemplate>
  );
};
