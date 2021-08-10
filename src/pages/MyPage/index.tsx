import { BaseTemplate } from '../../templates';
import { MyMenu } from '../../components/index';

export const MyPage = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'edit-profile':
        return console.log('edit');
      default:
        return console.log('default');
    }
  };

  return (
    <BaseTemplate>
      <MyMenu />
      {renderPage()}
    </BaseTemplate>
  );
};
