/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import * as S from './style';
import { Card } from '../../index';
import ROUTES from '../../../commons/routes';
import { useHistory } from 'react-router';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
  get_cursor_based_img,
  get_category,
} from '../../../redux/services/auth.service';

export interface Item {
  key: number;
  imgSrc?: any;
  viewCount?: number;
  downloadCount?: number;
  likeCount?: number;
  isSubscribe?: boolean;
  author?: string;
  proFileImg?: any;
  category?: string;
}

interface Response {
  hasNextPage: boolean;
  data: Item[];
}

const loadItems = (some: Array<any>): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: Item[] = [];
    setTimeout(() => {
      some.map((somet) => {
        const newItem = {
          /*
          key: somet.gallaryId,
          imgSrc: somet.gallaryImageLocation,
          imgWidth: "330px",
          imgHeight: "200px",
          isSubscribe: somet.isSubscribe,
          authot: somet.idx,
          viewCount: 1234,
          downloadCount: 30,
          likeCount: somet.gallarySubscribeCount,
          profileImg: somet.gallaryImageLocation
          */
          key: somet.key,
          imgSrc: somet.imgSrc,
          isSubscribe: somet.isSubscribe,
          author: somet.author,
          viewCount: somet.viewCount,
          downloadCount: somet.downloadCount,
          likeCount: somet.likeCount,
          profileImg: somet.profileImg,
        };
        newArray = [...newArray, newItem];
      });
      resolve({ hasNextPage: true, data: newArray });
    }, 1000);
  });
};

const useLoadItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [imgCount, setImgCount] = useState(2); // 통신할 때 한번 렌더링 후 다음 목록을 볼 때 사용할 state
  const [imgData, setImgData] = useState([]);

  async function loadMore() {
    setLoading(true);
    try {
      if (imgCount == -1) {
        setHasNextPage(false);
        setLoading(false);
      } else {
        // http://a8674237-5aeb-4942-be54-37b0bb661eaa.mock.pstmn.io/main
        //process.env.REACT_APP_HOON + `/api/pagination/cursor/${imgCount}`
        get_cursor_based_img(imgCount)
          .then((response) => {
            console.log(response.data);
            setImgData(response.data);
          })
          .catch((err) => {
            console.clear();
          });
        const { data, hasNextPage: newHasNextPage } = await loadItems(imgData);
        setItems((current) => [...current, ...data]);
        setHasNextPage(newHasNextPage);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }

    setImgCount(imgCount - 1);
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
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });
  const history = useHistory();
  return (
    <>
      <S.ListContainer>
        <S.VeList>
          {items &&
            items.map((item) => (
              <S.ListItem key={item.key}>
                <Card
                  CardType="type01"
                  imgSrc={item.imgSrc}
                  isSubscribe={item.isSubscribe}
                  author={item.author}
                  viewCount={item.viewCount}
                  downloadCount={item.downloadCount}
                  likeCount={item.likeCount}
                  proFileImg={item.proFileImg}
                  cardOnclick={() => {history.push(`/img?id=${item.key}`)}}
                />
              </S.ListItem>
            ))}
          {hasNextPage && <div ref={infiniteRef}></div>}
        </S.VeList>
      </S.ListContainer>
    </>
  );
};

export const CategoryGridItems = () => {
  const [cItem, setCItem] = useState([]);
  const history = useHistory();
  useLayoutEffect(() => {
    get_category()
      .then((response) => {
        console.log(response.data);
        setCItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <S.CategoryContainer>
        <ScrollContainer>
          <S.HoList>
            {cItem &&
              cItem.map((info: any) => (
                <S.ListItem key={info.key}>
                  <Card
                    CardType="type04"
                    imgSrc={info.src}
                    imgCategory={info.category}
                    cardOnclick={() => {
                      history.push(`${ROUTES.CATEGORYITEM}${info.category}`);
                    }}
                  />
                </S.ListItem>
              ))}
          </S.HoList>
        </ScrollContainer>
      </S.CategoryContainer>
    </>
  );
};
