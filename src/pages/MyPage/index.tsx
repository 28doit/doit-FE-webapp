import { BaseTemplate } from '../../templates';
import { MyMenu, EditProfile } from '../../components/index';
import * as S from './style';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return <EditProfile />;
      default:
        return console.log('default');
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
