/* eslint-disable prettier/prettier */
import React, { useState, useLayoutEffect, useEffect } from 'react';
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
import { RootStateOrAny, useSelector } from 'react-redux';

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

const loadItems = (some: Array<any>, sItem: any): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: Item[] = [];
    setTimeout(() => {
      if (sItem.includes('@')) {
        some && // 작가 검색 결과 페이지
          some.map((somet) => {
            const newItem = {
              key: somet.gallery.galleryId,
              imgSrc: somet.gallery.galleryImageLocation,
              isSubscribe: somet.gallery.isSubscribe,
              author: somet.user.nickName,
              viewCount: somet.gallery.galleryViews,
              downloadCount: somet.gallery.galleryBuyCount,
              likeCount: somet.gallery.gallerySubscribeCount,
              profileImg: somet.gallery.galleryImageLocation,
              imgUserIdx: somet.gallery.idx,
              gallId: somet.gallery.galleryId,
            };
            newArray = [...newArray, newItem];
          });
      } else {
        some &&
          some.map((somet) => {
            const newItem = {
              key: somet.gallery.galleryId,
              imgSrc: somet.gallery.galleryImageLocation,
              isSubscribe: somet.gallery.isSubscribe,
              author: somet.user.nickName,
              viewCount: somet.gallery.galleryViews,
              downloadCount: somet.gallery.galleryBuyCount,
              likeCount: somet.gallery.gallerySubscribeCount,
              profileImg: somet.gallery.galleryImageLocation,
              imgUserIdx: somet.gallery.idx,
              gallId: somet.gallery.galleryId,
            };
            newArray = [...newArray, newItem];
          });
      }
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

        const { data, hasNextPage: newHasNextPage } = await loadItems(
          imgData,
          nItem,
        );
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
  const { user: currentUser } = useSelector(
    (state: RootStateOrAny) => state.auth,
  );
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
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (nItem.includes('@')) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <>
      <S.PC_Container c_type="list">
        <S.PC_VeList>
          {auth
            ? items &&
              items.map((item) => (
                <S.PC_Li key={item.key}>
                  <CardItem
                    CardType="type02"
                    isSubscribe={item.isSubscribe}
                    author={item.author}
                    // authorPhotos={item.photos}
                    // authorFimg={item.fimg}
                    // authorSimg={item.simg}
                    // authorTimg={item.timg}
                    // authorHimg={item.himg}
                  />
                </S.PC_Li>
              ))
            : items &&
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
                    imgUserIdx={currentUser ? currentUser.idx : 0}
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
