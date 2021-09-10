import { BaseTemplate } from '../../templates';
import {
  MyMenu,
  EditProfile,
  UploadImage,
  PaymentItem,
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
