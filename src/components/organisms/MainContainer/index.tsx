import React, { useEffect } from 'react';
import * as S from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../commons/routes';
import { CardGridItem, CategoryGridItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';
import axios from 'axios';

export interface MainContainerItemProps {}

export const MainContainerItem =
  ({}: MainContainerItemProps): React.ReactElement => {
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
                placeholder="이미지 검색 / @작가"
                onChange={onSearchHandler}
                formClcik={goToSearch}
                value={searchItem}
              />
            </S.PC_Top>
            <S.PC_Hr top="300px">요즘 트렌드는 무엇일까?</S.PC_Hr>

            <S.PC_Box box="category">
              <CategoryGridItem />
            </S.PC_Box>

            <S.PC_Hr top="700px">어떤 이미지가 있을까?</S.PC_Hr>

            {/* <S.PC_Box box="card">
              <CardGridItem nItem="default" cursor={3} />
            </S.PC_Box> */}
          </S.PC_Container>
        </PC>
      </>
    );
  };
