import { BaseTemplate } from '../../templates';
import { NoticeItem, NotFoundItem } from '../../components/index';

export const Notice = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'join-email':
        return <NoticeItem />;
      default:
        return <NotFoundItem />;
    }
  };

  return <BaseTemplate>{renderPage()}</BaseTemplate>;
};
