import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../commons/routes';
import { CardInfiniteList, CategoryGridItems } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface MainContainerProps {}

export const MainContainer = ({}: MainContainerProps): React.ReactElement => {
  const [searchItem, setSearchItem] = useState('');
  const history = useHistory();
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
          <S.PC_Top>
            <S.PC_Title>Photo Logger</S.PC_Title>
            <S.PC_Input
              placeholder="이미지 검색 / @작가 / #키워드1#키워드2"
              onChange={onSearchHandler}
              formClcik={goToSearch}
              value={searchItem}
            />
          </S.PC_Top>
          <S.PC_Hr top="300px">요즘 트렌드는 무엇일까?</S.PC_Hr>

          <S.PC_Box box="category">
            <CategoryGridItems />
          </S.PC_Box>

          <S.PC_Hr top="700px">어떤 이미지가 있을까?</S.PC_Hr>

          <S.PC_Box box="card">
            <CardInfiniteList />
          </S.PC_Box>
        </S.PC_Container>
      </PC>
    </>
  );
};
