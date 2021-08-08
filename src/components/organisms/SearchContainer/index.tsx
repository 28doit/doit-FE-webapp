import React from 'react';
import * as S from './style';
import { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

export interface SearchContainerProps {}

export const SearchContainer =
  ({}: SearchContainerProps): React.ReactElement => {
    const [searchItem, setSearchItem] = useState('');
    const query = queryString.parse(location.search);
    const history = useHistory();

    const onSearchHandler = (e: any) => {
      setSearchItem(e.currentTarget.value);
    };

    const goToSearch = () => {
      return history.push(`/search?item=${searchItem}`);
    };

    return (
      <S.SearchDiv>
        <S.SearchTitle>검색 결과: {query.item} </S.SearchTitle>
        <S.SearchInput
          placeholder="이미지 검색 / @작가 / #키워드1#키워드2"
          onChange={onSearchHandler}
          value={searchItem}
          formClcik={goToSearch}
        />
        <h3>{searchItem}</h3>
        <S.SearchMap>Search</S.SearchMap>
      </S.SearchDiv>
    );
  };
