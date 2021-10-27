import React from 'react';
import * as S from './style';
import { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../commons/routes';
import { CardGridItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface SearchContainerItemProps {}

export const SearchContainerItem =
  ({}: SearchContainerItemProps): React.ReactElement => {
    const [searchItem, setSearchItem] = useState('');
    const query = queryString.parse(location.search);
    const history = useHistory();

    const onSearchHandler = (e: any) => {
      setSearchItem(e.currentTarget.value);
    };

    const goToSearch = () => {
      console.log(ROUTES.SEARCHITEM + searchItem);
      if (searchItem.includes('@')) {
        console.log('author'); // 여기는 작가 리턴 해야 되는데 페이지를 새로 만들어야 할 듯? 일단은 잘 되는가 테스트만
      } else {
        console.log('img'); // 여기는 기존의 이미지 리턴
      }
      return history.push(ROUTES.SEARCHITEM + searchItem);
    };

    return (
      <S.PC_Container>
        <S.PC_Title>검색 결과: {query.item} </S.PC_Title>
        <S.PC_Input
          placeholder="이미지 검색 / @작가 / #키워드1#키워드2"
          onChange={onSearchHandler}
          value={searchItem}
          formClcik={goToSearch}
        />
        <h3>{searchItem}</h3>
        <S.PC_CardBox>
          <CardGridItem />
        </S.PC_CardBox>
      </S.PC_Container>
    );
  };

export const BestCategoryContainerItem = (): React.ReactElement => {
  const [searchItem, setSearchItem] = useState('');
  const history = useHistory();
  const query = queryString.parse(location.search);
  const onSearchHandler = (e: any) => {
    setSearchItem(e.currentTarget.value);
  };

  const goToSearch = () => {
    console.log(ROUTES.SEARCHITEM + searchItem);
    return history.push(ROUTES.SEARCHITEM + searchItem);
  };

  return (
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Container>
          <S.PC_Title>카테고리: {query.item}</S.PC_Title>
          <S.PC_Input
            placeholder="이미지 검색 / @작가 / #키워드1#키워드2"
            onChange={onSearchHandler}
            value={searchItem}
            formClcik={goToSearch}
          />
          <S.PC_CardBox>
            <CardGridItem />
          </S.PC_CardBox>
        </S.PC_Container>
      </PC>
    </>
  );
};
