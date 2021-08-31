/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import * as S from './style';
import { Card } from '../../index';
import test2 from '../../../assets/test2.jpg';
import ProImg from '../../../assets/cats.svg';
import axios from 'axios';

export interface Item {
  value?: string;
  key: number;
  imgSrc?: any;
  imgWidth?: string;
  imgHeight?: string;
  viewCount?: number;
  downloadCount?: number;
  likeCount?: number;
  isSubscribe?: boolean;
  author?: string;
  proFileImg?: any;
}

interface Response {
  hasNextPage: boolean;
  data: Item[];
}

const loadItems = (startCursor = 0, some: Array<any>): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: Item[] = [];
    setTimeout(() => {  
      some.map((somet)=>{
        const newItem = {
          key: somet.key,
          imgSrc: somet.imgSrc,
          imgWidth: somet.imgWidth,
          imgHeight: somet.imgHeight,
          isSubscribe: somet.isSubscribe,
          authot: somet.author,
          viewCount: somet.viewCount,
          downloadCount: somet.downloadCount,
          likeCount: somet.likeCount,
          profileImg: somet.profileImg
        }
        newArray = [...newArray, newItem];
      })
      resolve({ hasNextPage: true, data: newArray });
    }, 1000);
  });
};

const useLoadItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [imgCount, setImgCount] = useState(0);  // 통신할 때 한번 렌더링 후 다음 목록을 볼 때 사용할 state
  const [imgData, setImgData] = useState([]);
  
  async function loadMore() {
    setLoading(true);
    setImgCount(imgCount+20); // 20개씩 보여줄 거라서 +20 axios 통신 주소에 넣으면 됨

    try {
      axios.get("http://localhost:3000/data").then((response)=>{setImgData(response.data)})
      const { data, hasNextPage: newHasNextPage } = await loadItems(
        items.length, imgData
      );
      setItems((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
      } finally {
      setLoading(false);
    }
   
  }

  return { loading, items, hasNextPage, error, loadMore };
};

export interface CardGridProps {}

export const CardInfiniteList = ({}: CardGridProps): React.ReactElement => {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems();

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  });
  return (
    <>
      <S.ListContainer>
        <S.List direction="horizontal">
          {items.map((item) => (
            <S.ListItem key={item.key}><Card
            CardType="type01"
            imgSrc={item.imgSrc}
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            isSubscribe={item.isSubscribe}
            author={item.author}
            viewCount={item.viewCount}
            downloadCount={item.downloadCount}
            likeCount={item.likeCount}
            proFileImg={item.proFileImg}
          /></S.ListItem>
          ))}
          {hasNextPage && <div ref={infiniteRef}></div>}
        </S.List>
      </S.ListContainer>
    </>
  );
};
