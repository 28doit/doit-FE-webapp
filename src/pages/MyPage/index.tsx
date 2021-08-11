import { BaseTemplate } from '../../templates';
import { MyMenu } from '../../components/index';
import { EditProfile } from '../../components/organisms/Modal';
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
