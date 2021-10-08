import { BaseTemplate } from '../../templates';
import { NoticeItem, ErrItem } from '../../components/index';

export const Notice = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'join-email':
        return <NoticeItem />;
      default:
        return <ErrItem />;
    }
  };

  return <BaseTemplate>{renderPage()}</BaseTemplate>;
};
