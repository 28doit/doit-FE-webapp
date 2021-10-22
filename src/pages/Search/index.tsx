import { BaseTemplate } from '../../templates';
import {
  SearchContainerItem,
  BestCategoryContainerItem,
} from '../../components/index';

export const Search = () => {
  return (
    <BaseTemplate>
      <SearchContainerItem />
    </BaseTemplate>
  );
};

export const BestCategorySearch = () => {
  return (
    <BaseTemplate>
      <BestCategoryContainerItem />
    </BaseTemplate>
  );
};
