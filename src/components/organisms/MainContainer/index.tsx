import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { KoreaMap } from '../../index';

export interface MainContainerProps {}

export const MainContainer = ({}: MainContainerProps): React.ReactElement => {
  const [searchItem, setSearchItem] = useState('');
  const history = useHistory();
  const onSearchHandler = (e: any) => {
    setSearchItem(e.currentTarget.value);
  };

  const goToSearch = () => {
    return history.push(`/search?item=${searchItem}`);
  };

  return (
    <S.MainDiv>
      <S.MainTitle>Photo Logger</S.MainTitle>
      <S.MainInput
        placeholder="이미지 검색 / @작가 / #키워드1#키워드2"
        onChange={onSearchHandler}
        formClcik={goToSearch}
        value={searchItem}
      />
      <KoreaMap />
    </S.MainDiv>
  );
};
