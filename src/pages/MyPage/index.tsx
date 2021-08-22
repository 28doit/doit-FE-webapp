import { BaseTemplate } from '../../templates';
import { MyMenu, EditProfile, UploadImage } from '../../components/index';
import * as S from './style';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return <EditProfile />;
      case 'upload-image':
        return <UploadImage />;
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
