# 기록

<details>
<summary>7월의 기록 보기</summary>
<div markdown="1">

#### 21.07.06 23:00

    레포지토리 클론 후 react / typeScript 추가

#### 21.07.07 01:00

    eslint, prettier, vscode setting 적용 후 typescript 테스트 페이지 추가 - 오후에 더 진행 할 예정

#### 21.07.07 23:07

    Atomic 디자인 설계시 컴포넌트 단위 확인을 위한 Storybook 적용 - Eslint와 Storybook에서 충돌이 났는데 해당 파일들 예외처리 해뒀음

#### 21.07.23 20:00

    회원 가입, 로그인 페이지를 구현했음
    - redux 추가
    - 회원가입의 경우 사용자 정보를 객체로 묶은 후 axios post통신으로 서버에 전송
    - 로그인의 경우 사용자가 입력한 이메일, 비밀번호를 묶은 후 axios post통신으로 서버에 전송 후 JWT 토큰을 받아 와서 사용

#### 21.07.26 17:30

    회원 가입 페이지 수정
    - 생년월일을 한줄로 입력 받던 것을 년, 월, 일 단위로 나누어서 받은뒤 concat을 통해 합쳤음
    - 성별을 boolean타입으로 추가 - 프론트에서 사용할때는 "M", "F"로 성별 판별 후 객체로 묶어서 보낼대 boolean으로 변환 후 전송

#### 21.07.27 19:34

    회원 가입 페이지 약관 동의 버튼 추가
    - 토글 형식으로 생성
    - 동의 하지 않으면 회원 가입 불가, 동의 시 회원 가입 가능

#### 21.07.28 16:40

    Atomic Design과 StoryBook을 이용해서 컴포넌트 분리 작업
    - atom - Button, Icon 생성

#### 21.07.29 17:35

    Atomic Design과 StoryBook을 이용해서 컴포넌트 분리 작업
    - atom - Image, Input, Label 생성
    - molecules - FormInput 생성

#### 21.07.30 17:44

    Atomic Design과 StoryBook을 이용해서 컴포넌트 분리 작업
    - 따로 코딩하지 않고 atom에서 molecules로 조합하면서 응용 하는 방법 공부

</div>
</details>

---

#### 21.08.02 18:56

    Atomic Design과 StoryBook을 이용해서 컴포넌트 분리 작업
    - molecules - Card, ModalItem 생성
    - organism - Boxes, CardGrid, Modal 생성

#### 21.08.03 19:48

    Atomic Design과 StoryBook을 이용해서 컴포넌트 분리 작업
    - GlobalStyle을 이용해 App과 StoryBook에 Reset.css 적용
    - organisms - header 생성
    - template - baseTemplate 생성 -> 대부분의 페이지 형태를 이거로 사용

#### 21.08.04 21:14

    컴포넌트 분리 작업 및 개발 보수 진행
    - StoryBook 설정에 Provider 추가 -> 사용하지 않을 경우 dsipatch 에러 발생으로 테스트 불가
    - 회원 가입 페이지의 state 간소화 진행 - 비슷한 유형의 함수와 state를 8개에서 1개로 줄임
    - ※기존의 로그인 페이지 atomic으로 재구성 완료, 회원 가입 페이지는 80% 완료※

    ### 추후 무조건 수정 해야하는 거
    1. 리덕스 dispatch.then 에서 발생 하던 [Property 'then' does not exist on type ...] 에러를 일단 조건문으로 우회해서 해결  - login, join ※ async await 처럼 데이터의 전송을 기다리지 않아서 생기는 문제가 발생 함

    2. Card 필요한 형태로 처음부터 다시 만들기 - [사용자에게 보여지는 카드, 내가 좋아하는 작가 카드]

#### 21.08.05 18:19

    - ※기존의 회원 가입 페이지 atomic으로 재구성 완료※
    - 회원 가입, 로그인 페이지 validator 테스트 적용 결과 => 잘 됨, 바로 사용 가능
    - 지금까지 제작한 StoryBook 팀원들 확인할 수 있게 사이트를 통해 배포
    [개발한 페이지 보기] (https://photologger.netlify.app)

#### 21.08.06 20:33

    - ※회원 가입, 로그인 페이지 validator 적용 완료※ => 사용자가 잘못 입력할 경우 바로 확인 가능, 모든 조건 완료 되어야지 버튼 활성화
    - 백엔드에서 제공한 회원가입 Mock 서버와의 Post 통신 Test 성공

#### 21.08.07 21:36

    - 회원 가입, 로그인 알고리즘 변경 -> 테스트만 해보면 됨

#### 21.08.08 20:40

    - 메인 페이지 구성 변경 - SearchBar, Title, KoreaMap 추가 -> KoreaMap(SVG 세밀한 수정 필요 !!!!!)
    - Search 페이지 생성 - 메인 페이지에서 검색 할 경우 그 내용을 query로 이용해서 Search 페이지로 이동

#### 21.08.09 19:07

    - 메인 페이지 지도 수정 - SVG 이미지를 컴포넌트로 변경, 지역 위에 마우스가 올라 갈 경우 색상 변경, 클릭시 해당 지역으로 사진 검색 *해당 위치가 어디인지를 표현 해주어야 함 => (21.08.09 19:38 적용 완료)

#### 21.08.10 20:31

    - Mock 서버 통신을 이용해 Jwt 획득 및 로컬 스토리지에 복호화 후 저장까지 완료
    - 로컬 스토리지의 값 유무에 따라 header의 내용이 변함 -> login, join이 있다가 로그인 상태가 되면 mypage, cart, logout이 나옴
    - MyPage에서 쓸 MyMenu molecules 구성 완료

    - ※21.08.04의 문제였던 dispatch 오류 해결... 스택오버플로는 신이야!※
    => [커스텀 dispatch를 만들어야 하는 이유] (https://stackoverflow.com/questions/63811401/property-then-does-not-exist-on-type-asyncthunkaction-redux-toolkit)
    => pure한 dispatch를 사용하기 보단 새로운 dispatch기능과 타입을 가지고 있는 useAppThunkDispatch를 만들어서 사용

#### 21.08.11 22:28

    - molecules - EditProfile 생성 완료
    - 내 정보 수정 페이지 생성 완료 => 유저의 기존 정보를 초기 화면에 표시
    - 로그아웃 기능 구현 - localStorage clear 방식
    - login, join 동작 시 페이지를 새로 고침해야지 정상적으로 localStorage에서 데이터를 가져오는 에러 해결
    => [새로고침 시 함수가 동작되는 경우] (https://geonlee.tistory.com/191)
    => history.replace('/')가 아닌 window.location.replace('/') 사용

    - MyPage에서의 메뉴별 렌더링 방식은 파라미터를 읽은 후 switch case문을 구별해서 렌더링 하는 방식 사용
    - 페이지 렌더링 시 스크롤이 고정되어 있던 것을 항상 맨 위로 가게끔 ScrollToTop 생성 및 적용
    - KoreaMap 그나마 유지보수 하기 쉽게 코드 수정 했음

    - bcrypt와 bcryptjs 중 bcryptjs를 사용하게 된 이유
    => bcrypt는 c++로 제작이 되었고 bcryptjs는 pure JS로 제작 되었다. 알고리즘은 동일하고 속도는 bcrypt가 1.3배 정도 빠르지만 NodeJS, Node-WebKit, Electron 에서만 사용이 가능하다.
    => bcrypt 쓰면 aws-sdk 에러남;;
    - bcryptjs를 쓰면서 spring 쪽을 같이 조사했는데 spring과 npm의 bcrypt 알고리즘이 동일하다면 salt값을 안 넘겨주어도 될 거 같다?

    - molecules - ModalLoading 생성 완료
    - 로그인, 회원 가입 시 통신 하는 시간 동안에 보여줄 Loading 페이지 구현 완료 - 추후 상품 검색에서도 사용 가능

#### 21.08.11 22:28

    - 백(spring boot)와 프론트(react) 에서 bcrypt 동작이 일치하는지 확인 완료
    => 프론트에서 해싱한 비밀번호를 넘기면 백에서 받은 후 대조 후 판별 - 서로 다른 라이브러리를 사용하지만 동작이 동일

#### 21.08.13 21:53

    - 백(spring boot)와 프론트(react) 에서 로그인, 회원가입, 개인 정보 수정, 개인 정보 불러오기 axios 통신 테스트 완료
    => 정상 작동 됨 - 문제였던 부분 (통신 과정에서 유저 정보들을 data로 묶어서 보냈는데 백에서 이상하게 받음...)

#### 21.08.14 21:37

    - 회원 가입 단계에서 이메일 중복 체크하는 버튼 생성 및 validator 추가
    => 동작은 get으로 통신하여서 리턴 값을 받아서 체크

#### 21.08.15 19:26

    - 페이지 이동할 때마다 토큰이 만료되었는지 백엔드와 통신 설정하기 완료
    => useEffect를 이용하여서 렌더링 이전에 API와 통신 후 만료되었으면 login페이지로 아니라면 정상적을 진행하는 방식
    => 백엔드에서 API가 완성되면 바로 테스트 가능

    - 중복 로그인, 회원 가입 방지하기
    => useEffect를 이용해서 store에서 유저 정보를 가져오는데 유저정보가 없으면 로그인 페이지로 있으면 정상적으로 진행

#### 21.08.16 16:20

    - 시작 시 favicon error 해결 => 문제는 없지만 콘솔 창에서 거슬려서 link를 통해서 해결
    - 로그인 실패 했는데도 헤더가 바뀌던 문제 해결
    => 지금까지는 그냥 리턴이 있으면 무조건 로그인 성공하는 판정이었다.
    => action - login의 dispatch에 조건문을 걸어서 토큰이 있으면 로그인 없으면 실패로 변경

    - axios 통신 패치 - [로그인, 회원 가입, 유저 정보 조회, 유저 정보 수정, 이메일 중복 확인]
    => 필요 없는 부분 지우고 수정이 필요한 부분들은 수정
    => 로그인 실패시 로그인 페이지에 남아있기 위해서 action에서 promise.resolve에 data를 넘겨 준 뒤 then에서 확인 후 분기

    - 이메일 중복 체크 성공 후 내용을 지운 후 아무 이메일을 넣어도 성공 이라고 나오던 것을 수정
    => 이제 지운 후에 다시 입력 할 경우 다시 중복 검사 해야 함

#### 21.08.17 21:15

    - join, login, edit-profile 페이지 component 전부 수정
    => 사용하지 않는, 스타일은 같은데 추가로 만들어져 있는 등 수정

    - axios 통신 과정에서 예외 처리 추가
    => dispatch then이후 catch를 이용해 서버와의 통신이 안되었을 경우의 조치 추가

    - Card 컴포넌트 새로 개발 해야 함

#### 21.08.18 19:41

    - 백엔드와 JWT체크 통신 성공 및 적용 완료
    => 체크 항목 1. JWT가 만료되었는가?, 2. 백에서 발급한 JWT와 userEmail정보가 무결성을 가지고 있는가?

    - edit-profile 페이지 useEffect가 아닌 useLayoutEffect를 이용해서 JWT 통신 체크
    => [왜 useLayoutEffect를 쓸까?] (https://hyojin96.tistory.com/entry/%F0%9F%8D%80-useEffect-VS-useLayoutEffect-%F0%9F%8D%80)
    => 백에서 만료되었거나 무결성이 위배된다고 오면 로그아웃 후 로그인 페이지로 이동
    => 문제 없을 경우 유저 정보를 받음 그 후 state에 저장

    - redux-services-auth 에 JWT 체크하는 통신 추가
    => 리덕스를 이용해 행위을 체크한 후 store에 데이터를 저장하지 않은 이유
    => 리덕스는 새로고침시 초기화가 되기 때문에 redux-persist나 localStorage에 데이터를 저장 후 가져오는 방식으로 해야하는데, 새로 갈아 엎기는 좀 그렇고 localStorage에 저장은 변동 가능성이 있어서 사용하지 않음 - useState 사용
