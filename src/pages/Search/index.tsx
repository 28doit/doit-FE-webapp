import { BaseTemplate } from '../../templates';
import { SearchContainer, BestCategoryContainer } from '../../components/index';

export const Search = () => {
  return (
    <BaseTemplate>
      <SearchContainer />
    </BaseTemplate>
  );
};

export const BestCategorySearch = () => {
  return (
    <BaseTemplate>
      <BestCategoryContainer />
    </BaseTemplate>
  );
};
