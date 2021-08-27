/* eslint-disable prettier/prettier */
import React from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import * as S from './style';
import { Card } from '../../index';
import test2 from '../../../assets/test2.jpg';
import ProImg from '../../../assets/cats.svg';

export interface Item {
  key: number;
  value: string;
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
    let newArray: Item[] = [];

    setTimeout(() => {
      for (let i = startCursor; i < startCursor + 20; i++) {
        const newItem = {
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
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error>();

  async function loadMore() {
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
