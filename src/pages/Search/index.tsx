import { BaseTemplate } from '../../templates';
import { SearchContainer, BestCategoryContainer } from '../../components/index';

export const Search = () => {
  return (
    <BaseTemplate>
      <SearchContainer />
    </BaseTemplate>
  );
};

export const BestCategorySearch = ({ match }: any) => {
  return (
    <BaseTemplate>
      <BestCategoryContainer match={match} />
    </BaseTemplate>
  );
};
