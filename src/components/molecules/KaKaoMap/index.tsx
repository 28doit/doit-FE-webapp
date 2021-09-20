/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import * as S from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

export const KaKaoMapItem = (): React.ReactElement => {
  const [center, setCenter] = useState({
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  });
  const [located, setLocated] = useState('');

  useEffect(() => {
    mapScript();
  }, []);

  const mapScript = () => {
    function MapWalker(this: any, position: any) {
      //커스텀 오버레이에 사용할 map walker 엘리먼트
      var content = document.createElement('div');
      var figure = document.createElement('div');
      var angleBack = document.createElement('div');

      //map walker를 구성하는 각 노드들의 class명을 지정 - style셋팅을 위해 필요
      content.className = 'MapWalker';
      figure.className = 'figure';
      angleBack.className = 'angleBack';

      content.appendChild(angleBack);
      content.appendChild(figure);

      //커스텀 오버레이 객체를 사용하여, map walker 아이콘을 생성
      var walker = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1,
      });

      this.walker = walker;
      this.content = content;
    }

    MapWalker.prototype.setAngle = function (angle: any) {
      const threshold = 22.5; //이미지가 변화되어야 되는(각도가 변해야되는) 임계 값
      for (let i = 0; i < 16; i++) {
        //각도에 따라 변화되는 앵글 이미지의 수가 16개
        if (angle > threshold * i && angle < threshold * (i + 1)) {
          //각도(pan)에 따라 아이콘의 class명을 변경
          const className = 'm' + i;
          this.content.className = this.content.className.split(' ')[0];
          this.content.className += ' ' + className;
          break;
        }
      }
    };

    MapWalker.prototype.setPosition = function (position: any) {
      this.walker.setPosition(position);
    };

    //map walker를 지도위에 올리는 함수
    MapWalker.prototype.setMap = function (map: any) {
      this.walker.setMap(map);
    };

    const container = document.getElementById('map');
    const mapCenter = new window.kakao.maps.LatLng(center.lat, center.lng);
    const options = {
      center: mapCenter,
      level: 3,
    };

    const geocoder = new kakao.maps.services.Geocoder();

    const searchDetailAddrFromCoords = (coords: any, callback: any) => {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      // @ts-ignore
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    };

    const map = new window.kakao.maps.Map(container, options);
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

    const rvContainer = document.getElementById('roadview');
    // @ts-ignore
    const rv = new kakao.maps.Roadview(rvContainer);
    let rvClient = new kakao.maps.RoadviewClient();

    const toggleRoadview = (position: any) => {
      rvClient.getNearestPanoId(position, 50, function (panoId) {
        if (panoId === null) {
          map.relayout();
        } else {
          map.relayout(); //지도를 감싸고 있는 영역이 변경됨에 따라, 지도를 재배열합니다
          rv.setPanoId(panoId, position); //panoId를 통한 로드뷰 실행
          rv.relayout(); //로드뷰를 감싸고 있는 영역이 변경됨에 따라, 로드뷰를 재배열합니다
        }
      });
    };

    let mapWalker: any = null;

    toggleRoadview(mapCenter);

    const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(1, 1), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(30, 30) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      ),
      markerPosition = new kakao.maps.LatLng(center.lat, center.lng); // 마커가 표시될 위치입니다

    const rvMarker = new kakao.maps.Marker({
      image: markerImage,
      position: mapCenter,
      draggable: true,
      map: map,
    });

    const iwContent = `<div style="padding:5px;">${located}</div>`;
    const iwPosition = new kakao.maps.LatLng(center.lat, center.lng); //인포윈도우 표시 위치입니다

    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    kakao.maps.event.addListener(rv, 'init', function () {
      // map walker를 생성한다. 생성시 지도의 중심좌표를 넘긴다.
      mapWalker = new (MapWalker as any)(mapCenter);
      mapWalker.setMap(map); // map walker를 지도에 설정한다.

      // 로드뷰가 초기화 된 후, 추가 이벤트를 등록한다.
      // 로드뷰를 상,하,좌,우,줌인,줌아웃을 할 경우 발생한다.
      // 로드뷰를 조작할때 발생하는 값을 받아 map walker의 상태를 변경해 준다.
      kakao.maps.event.addListener(rv, 'viewpoint_changed', function () {
        // 이벤트가 발생할 때마다 로드뷰의 viewpoint값을 읽어, map walker에 반영
        var viewpoint = rv.getViewpoint();
        mapWalker.setAngle(viewpoint.pan);
      });

      // 로드뷰내의 화살표나 점프를 하였을 경우 발생한다.
      // position값이 바뀔 때마다 map walker의 상태를 변경해 준다.
      kakao.maps.event.addListener(rv, 'position_changed', function () {
        // 이벤트가 발생할 때마다 로드뷰의 position값을 읽어, map walker에 반영
        var position = rv.getPosition();
        mapWalker.setPosition(position);
        map.setCenter(position);
        searchDetailAddrFromCoords(
          position,
          function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
              var detailAddr = !!result[0].road_address
                ? '<div>도로명주소 : ' +
                  result[0].road_address.address_name +
                  '</div>'
                : '';
              detailAddr +=
                '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

              var content = '<div class="bAddr">' + detailAddr + '</div>';

              // 마커를 클릭한 위치에 표시합니다
              rvMarker.setPosition(position);
              rvMarker.setMap(map);

              // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
              infowindow.setContent(content);
              infowindow.open(map, rvMarker);

              setLocated(result[0].address.address_name);
            }
          },
        );
      });
    });

    kakao.maps.event.addListener(rvMarker, 'dragend', function () {
      let position = rvMarker.getPosition(); //현재 마커가 놓인 자리의 좌표
      toggleRoadview(position); //로드뷰를 토글합니다
    });

    kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
      // 현재 클릭한 부분의 좌표를 리턴
      let position = mouseEvent.latLng;
      setCenter({
        ...center,
        lat: position.Ma,
        lng: position.La,
      });
      rvMarker.setPosition(position);
      // @ts-ignore
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address
            ? '<div>도로명주소 : ' +
              result[0].road_address.address_name +
              '</div>'
            : '';
          detailAddr +=
            '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

          var content = '<div class="bAddr">' + detailAddr + '</div>';

          // 마커를 클릭한 위치에 표시합니다
          rvMarker.setPosition(mouseEvent.latLng);
          rvMarker.setMap(map);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(map, rvMarker);

          setLocated(result[0].address.address_name);
        }
      });
      infowindow.open(map, rvMarker);
      toggleRoadview(position); //로드뷰를 토글합니다
    });
  };

  return (
    <S.KakaoMapContainer>
      <S.KakaoMapDiv id="map"></S.KakaoMapDiv>
      <S.KakaoRoadViewDiv id="roadview"></S.KakaoRoadViewDiv>
    </S.KakaoMapContainer>
  );
};
