/* eslint-disable prettier/prettier */
import React, { useState, useLayoutEffect } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import * as S from './style';
import { CardItem } from '../../index';
import ROUTES from '../../../commons/routes';
import { useHistory } from 'react-router';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
  get_cursor_based_img,
  get_cursor_based_auth,
  get_cursor_based_default,
  get_category,
} from '../../../redux/services/auth.service';

export interface Item {
  key: number;
  gallId?: any;
  imgSrc?: any;
  viewCount?: number;
  downloadCount?: number;
  likeCount?: number;
  isSubscribe?: boolean;
  author?: string;
  proFileImg?: any;
  category?: string;
  isCart?: boolean;
  imgUserIdx?: any;
}

interface Response {
  hasNextPage: boolean;
  data: Item[];
}

const loadItems = (some: Array<any>): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: Item[] = [];
    setTimeout(() => {
      some &&
        some.map((somet) => {
          const newItem = {
            key: somet.galleryId,
            imgSrc: somet.galleryImageLocation,
            isSubscribe: somet.isSubscribe,
            author: somet.idx,
            viewCount: somet.galleryViews,
            downloadCount: 30,
            likeCount: somet.gallerySubscribeCount,
            profileImg: somet.galleryImageLocation,
            imgUserIdx: somet.idx,
            gallId: somet.gallertId,
          };
          newArray = [...newArray, newItem];
        });
      resolve({ hasNextPage: true, data: newArray });
    }, 1000);
  });
};

const useLoadItems = (nItem: any, cursor: any) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [imgCount, setImgCount] = useState(cursor); // 통신할 때 한번 렌더링 후 다음 목록을 볼 때 사용할 state
  const [imgData, setImgData] = useState([]);

  async function loadMore() {
    setLoading(true);
    try {
      if (imgCount == 23) {
        setHasNextPage(false);
        setLoading(false);
      } else {
        // http://a8674237-5aeb-4942-be54-37b0bb661eaa.mock.pstmn.io/main
        //process.env.REACT_APP_HOON + `/api/pagination/cursor/${imgCount}`
        console.log(nItem);
        if (nItem.includes('@')) {
          get_cursor_based_auth(imgCount, nItem)
            .then((response) => {
              console.log(response);
              setImgData(response.data);
            })
            .catch((err) => {
              console.clear();
            });
        } else if (nItem === 'default') {
          get_cursor_based_default(imgCount)
            .then((response) => {
              console.log(response);
              setImgData(response.data);
            })
            .catch((err) => {
              console.clear();
            });
        } else {
          get_cursor_based_img(imgCount, nItem)
            .then((response) => {
              console.log(response);
              setImgData(response.data);
            })
            .catch((err) => {
              console.clear();
            });
        }

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

export interface CardGridItemProps {
  nItem: any;
  cursor: any;
}

export const CardGridItem = ({
  nItem,
  cursor,
}: CardGridItemProps): React.ReactElement => {
  const { loading, items, hasNextPage, error, loadMore } = useLoadItems(
    nItem,
    cursor,
  );
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
      <S.PC_Container c_type="list">
        <S.PC_VeList>
          {items &&
            items.map((item) => (
              <S.PC_Li key={item.key}>
                <CardItem
                  CardType="type01"
                  imgSrc={item.imgSrc}
                  isSubscribe={item.isSubscribe}
                  author={item.author}
                  viewCount={item.viewCount}
                  downloadCount={item.downloadCount}
                  likeCount={item.likeCount}
                  proFileImg={item.proFileImg}
                  isCart={item.isCart}
                  imgUserIdx={item.imgUserIdx}
                  gallId={item.gallId}
                  cardOnclick={() => {
                    history.push(`/img?id=${item.key}`);
                  }}
                />
              </S.PC_Li>
            ))}
          {hasNextPage && <div ref={infiniteRef}></div>}
        </S.PC_VeList>
      </S.PC_Container>
    </>
  );
};

export interface CategoryGridItemProps {}

export const CategoryGridItem = ({}: CategoryGridItemProps) => {
  const [cItem, setCItem] = useState([]);
  const history = useHistory();
  useLayoutEffect(() => {
    get_category()
      .then((response) => {
        setCItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <S.PC_Container c_type="category">
        <ScrollContainer>
          <S.PC_HoList>
            {cItem &&
              cItem.map((info: any) => (
                <S.PC_Li key={info.key}>
                  <CardItem
                    CardType="type04"
                    imgSrc={info.src}
                    imgCategory={info.category}
                    cardOnclick={() => {
                      history.push(`${ROUTES.CATEGORYITEM}${info.category}`);
                    }}
                  />
                </S.PC_Li>
              ))}
          </S.PC_HoList>
        </ScrollContainer>
      </S.PC_Container>
    </>
  );
};
