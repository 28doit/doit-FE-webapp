import React, { useEffect } from 'react';
import * as S from './style';
import { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../commons/routes';
import { CardGridItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import axios from 'axios';

export interface SearchContainerItemProps {}

export const SearchContainerItem =
  ({}: SearchContainerItemProps): React.ReactElement => {
    const [searchItem, setSearchItem] = useState('');
    const [itemCnt, setItemCnt] = useState(0);
    const query = queryString.parse(location.search);
    const history = useHistory();

    // useEffect(() => {
    //   axios.post('', searchItem).then((response) => {
    //     console.log(response);
    //   });
    // }, []);

    const onSearchHandler = (e: any) => {
      setSearchItem(e.currentTarget.value);
    };

    const goToSearch = () => {
      history.push(ROUTES.SEARCHITEM + searchItem);
      history.go(0);
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
            <S.PC_Title>검색 결과: {query.item} </S.PC_Title>
            <div>{query.item}</div>
            <S.PC_Input
              placeholder="이미지 검색 / @작가"
              onChange={onSearchHandler}
              value={searchItem}
              formClcik={goToSearch}
            />
            <S.PC_CardBox>
              <CardGridItem nItem={query.item} cursor={3} />
            </S.PC_CardBox>
          </S.PC_Container>
        </PC>
      </>
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
            placeholder="이미지 검색 / @작가"
            onChange={onSearchHandler}
            value={searchItem}
            formClcik={goToSearch}
          />
          <S.PC_CardBox>
            <CardGridItem nItem="by" cursor={1} />
          </S.PC_CardBox>
        </S.PC_Container>
      </PC>
    </>
  );
};
