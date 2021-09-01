import { BaseTemplate } from '../../templates';
import { NoticeItem } from '../../components/index';
import * as S from './style';

export const Notice = ({ match }: any) => {
  const renderPage = () => {
    switch (match.params.name) {
      case 'join-email':
        return <NoticeItem />;
      default:
        return '';
    }
  };

  return <BaseTemplate>{renderPage()}</BaseTemplate>;
};
