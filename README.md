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
    사이트: https://photologger.netlify.app

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
    => https://stackoverflow.com/questions/63811401/property-then-does-not-exist-on-type-asyncthunkaction-redux-toolkit
    => pure한 dispatch를 사용하기 보단 새로운 dispatch기능과 타입을 가지고 있는 useAppThunkDispatch를 만들어서 사용

#### 21.08.11 16:21

    - EditProfile Molecules 생성 완료
    - 내 정보 수정 페이지 생성 완료 => 유저의 기존 정보를 초기 화면에 표시
    - login, join 동작 시 페이지를 새로 고침해야지 정상적으로 localStorage에서 데이터를 가져오는 에러 해결
    => https://geonlee.tistory.com/191
    => history.replace('/')가 아닌 window.location.replace('/') 사용
