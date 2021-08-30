/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import * as S from './style';
import { Card } from '../../index';
import test2 from '../../../assets/test2.jpg';
import ProImg from '../../../assets/cats.svg';

export interface Item {
  key: number;
  value: string;
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

const printCard = () => {
  return (
    <Card
      CardType="type01"
      imgSrc={test2}
      imgWidth="330px"
      imgHeight="330px"
      isSubscribe={false}
      author="poeynus"
      viewCount={102}
      downloadCount={24}
      likeCount={242}
      proFileImg={ProImg}
    />
  );
};

const loadItems = (startCursor = 0): Promise<Response> => {
  return new Promise((resolve) => {
    console.log("hi");
    // 여기서 axios 통신으로 사진 데이터 받아오기
    // state에 저장을 해야하는지 아니면 바로 쓸 수 있는지는 API를 통해 test가 가능해지면 사용가능할 듯
    let newArray: Item[] = [];
    setTimeout(() => {  // 여기 20을 고정 해놓지 말고 백엔드에서 받아와서 길이 측정해서 사용하면 될 듯
      for (let i = startCursor; i < startCursor + 20; i++) {
        const newItem = {
          // 여기에 받은 값들 저장
          key: i,
          value: `This is item ${i}`,
        };
        newArray = [...newArray, newItem];
      }

      resolve({ hasNextPage: true, data: newArray });
    }, 500);
  });
};

const useLoadItems = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  async function loadMore() {
    setCount(count+1);
    if(count > 1) {
      setLoading(false);
      setHasNextPage(false);
    }
    else{
      setLoading(true);
      try {
        const { data, hasNextPage: newHasNextPage } = await loadItems(
          items.length,
        );
        setItems((current) => [...current, ...data]);
        setHasNextPage(newHasNextPage);
      } catch (err) {
        setError(err);
       } finally {
        setLoading(false);
      }
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
            <S.ListItem key={item.key}>{printCard()}</S.ListItem>
          ))}
          {hasNextPage && <div ref={infiniteRef}></div>}
        </S.List>
      </S.ListContainer>
    </>
  );
};
