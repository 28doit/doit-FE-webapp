## [작업 기록 - 노션](https://altera520.notion.site/PROJECT-90ec32b69b264562b600d1904f969af8)

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

<details>
<summary>8월의 기록 보기</summary>
<div markdown="2">

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
    [개발한 페이지 보기](https://photologger.netlify.app)

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
    => [커스텀 dispatch를 만들어야 하는 이유]: <https://stackoverflow.com/questions/63811401/property-then-does-not-exist-on-type-asyncthunkaction-redux-toolkit>
    => pure한 dispatch를 사용하기 보단 새로운 dispatch기능과 타입을 가지고 있는 useAppThunkDispatch를 만들어서 사용

#### 21.08.11 22:28

    - molecules - EditProfile 생성 완료
    - 내 정보 수정 페이지 생성 완료 => 유저의 기존 정보를 초기 화면에 표시
    - 로그아웃 기능 구현 - localStorage clear 방식
    - login, join 동작 시 페이지를 새로 고침해야지 정상적으로 localStorage에서 데이터를 가져오는 에러 해결
    => [새로고침 시 함수가 동작되는 경우]: <https://geonlee.tistory.com/191>
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
    => [왜 useLayoutEffect를 쓸까?]: <https://hyojin96.tistory.com/entry/%F0%9F%8D%80-useEffect-VS-useLayoutEffect-%F0%9F%8D%80>
    => 백에서 만료되었거나 무결성이 위배된다고 오면 로그아웃 후 로그인 페이지로 이동
    => 문제 없을 경우 유저 정보를 받음 그 후 state에 저장

    - redux-services-auth 에 JWT 체크하는 통신 추가
    => 리덕스를 이용해 행위를 체크한 후 store에 데이터를 저장하는 방식을 사용하지 않음
    => 리덕스는 새로고침시 초기화가 되기 때문에 redux-persist나 localStorage에 데이터를 저장 후 가져오는 방식으로 해야하는데, 지금 와서 redux-persist를 사용하기에는 주저가 있고, localStorage에 저장은 문제가 될 소지가 다분해 사용하지 않음 - useState 사용

#### 21.08.19 19:00

    - commons - routes.ts를 생성 해 눈에 보이던 경로를 전부 변수로 전환
    - setupProxy.ts를 이용해 다른 방식의 CORS 문제 해결 시도
    => 기존의 방식에서 생기던 문제 - Package.json에 [proxy: 주소] 를 추가하던 방식인데 favicon에러가 지속적으로 발생, 문제는 없지만 거슬린다.
    => [typeScript에서 setupProxy.ts가 안될 때](https://egas.tistory.com/39?category=480808)

    - 백엔드와 비밀번호 재 설정 통신 성공 완료
    => 사용자가 입력한 이름, 이메일, 전화번호가 DB와 일치 할 경우 해당 이메일로 랜덤 비밀번호를 보내는 방식 - 로그인 후 비밀번호 수정 해야 함

#### 21.08.20 17:39

    - 비밀번호 재 설정 페이지 완성 및 axios 통신 적용 완료
    => 성공 시 이메일을 확인하라는 모달창이 뜨고 로그인 화면으로 가는 버튼이 생김
    => 실패 시 alert 창으로 정보가 불일치 하다고 알려준 후 새로 고침

    - 회원 가입 시 이메일 인증 기능 추가
    => 이메일 중복 확인에서 "확인" 버튼을 누른 후 이미 가입된 이메일이면 validator로 이미 가입된 메일이라 표시
    => 가입 가능 할 경우 "확인" 버튼이 "재 전송" 버튼으로 바뀌고 밑에 숨겨진 폼이 생겨남
    => 폼의 주요 내용은 인증 번호 입력 폼, 인증 번호 확인 버튼, 유효성 결과 문장
    => 인증 성공 할 시에는 인증 성공이라는 메시지가 출력 됨
    => 인증 실패 시에는 인증 번호가 일치하지 않다는 알림이 뜸
    => 현재는 mock 서버 주소로 구현 완료 되었고 API 개발이 완료 되면 바로 적용 가능 - onEmailAuthCheckHandler

#### 21.08.21 19:06

    - 이메일 인증 까지 성공 해야 회원 가입이 가능하게 state 추가 및 완료 조건 수정

    - 마이 페이지의 이미지 업로드 페이지 구현 중
    => 거의 다 만들었고 일단 기본 적인 형태만 잡았음
    => 버튼을 눌러서 이미지 업로드 하는 방식, 내일 완성 예정

#### 21.08.22 11:16

    - 이미지 업로드 페이지 구현 중
    => 배치는 끝났고 handler와 func 몇 개만 추가 하면 끝, multipart/form-data 형식으로 전송하게 끔 구성 - 나중에 배열 형태로 보내면 됨
    => 이미지 불러온 후 미리 보기가 가능하게 수정 할 예정
    => 추후 사진 위치 정보를 어떻게 입력하거나 받을 지 구상 할 예정

#### 21.08.23 18:58

    - 이미지 업로드 구현 완료
    => 버튼을 눌러 업로드 하고, 이미지 업로드 시 전송 전 미리 보기로 볼 수 있게 제공
    => 사용자가 수동으로 정보를 기입 할 수 있게끔 구현 - 내용은 아직 정하지 않았음
    => axios POST 통신을 통해서 전송하는데 multipart/form-data 형식으로 분할 해서 전송하게 끔 구현
    => API 주소만 들어오면 바로 테스트 가능
    => 우려 되는 부분 - 이번에는 파일이 껴서 object 타입으로 보내는데 백에서 그렇게 받을 수 있을까?
    - [formData의 값을 console.log로 볼 수 없는 원인](https://velog.io/@josworks27/formData-console.log)
    - [muiltipar/form-data 참고](https://stackoverflow.com/questions/41610811/react-js-how-to-send-a-multipart-form-data-to-server)

#### 21.08.24 22:44

    - Card 컴포넌트 구현 중
    => 구현 형태
        1. 그냥 보여지는 거, 마우스 갖다 대면 보여지는 거 [사진 || 작가, 조회수, 좋아요, 구매 수, 구독 버튼]
        2. 마우스 클릭 후 보여지는 거 [왼쪽: 사진 || 사진 구독 버튼 || 작가 프사, 작가명, 작가 구독 버튼 및 작가 구독자 수 || 댓글 ||   작가의 다른 이미지], [오른쪽: 사진 본 횟수, 사진 구매 수, 사진 구독 수 || 가격, 사진 정보, 구매 버튼 || 주의 사항 || 키워드]
        3. 작가 보여지는 거 [프로필 사진, 작가 이름 || 보유 사진- 보유 사진 중 4개 가져와서 타일 형식으로 작게 만들고 보여주기]
    => 현재 1번 형태의 카드 완성 - 마우스 오버 시 정보가 나옴 (정보는 axios 통신을 통해 획득)
    => [마우스 오버나 엔터 시 움직일 때마다 깜빡이는 경우](https://developpaper.com/question/onmouseover-event-why-does-the-layer-flicker-when-the-mouse-moves/)
    => 마우스 진입 시 기존의 영역에 새로운 것이 생겨서 마우스 아웃으로 판별하기에 새로운 영역에 이벤트를 끄는 방식으로 css에 pointer-events: none; 속성 넣으면 됨
    => css에 pointer-events: none; 속성 넣으면 됨

    - git flow 첫 사용 develope을 만들고 feature에 card_component, cursor_based_pagination branch 생성
    - Netlify 이용한 storybook 배포 잠정 중단 - 에러가 너무 많이 난다.... 수정 시에 많은 시간 투자 필요

    - 백엔드와 이미지 업로드 페이지 통신 시도
    => 실패, 나중에 확인해보니 데이터 값이 null이 들어감 이게 왜 이런 오류가 나는지는 모르겠는데 일단 해결 했음 문제 확실히 인지 예정

#### 21.08.25 21:48

    - 어제 실패 했던 이미지 업로드 통신 성공!
    => 프론트 측의 문제였고 이미지 업로드 후 미리보기 부분에서 에러가 났었다. 바로 해결 후 업로드 해보니 백엔드의 DB에 잘 저장 되었다.
    => 이제 이미지 업로드 후의 동작에 대한 설계가 필요하고, 어떤 정보들을 보내줄 지 고민해봐야 함

    - Card 컴포넌트 구현 중
    => 오늘 2번 형태의 카드 완성 - 사용자의 마이 페이지에서 좋아요 한 작가의 프로필 Card, 마우스 오버 시 하트가 나옴
    => 3개의 타입 에서 [사용자의 마이 페이지에서 좋아요 한 사진 Card] 형태가 추가 되어 총 4개의 타입으로 제작

#### 21.08.26 19:56

    - Card 컴포넌트 완성
    => 3번 형태의 카드 완성 - 사용자의 마이 페이지에서 좋아요 한 사진 Card, 마우스 오버 시 하트가 나옴
    => svg 이미지들을 컴포넌트로 바꿔서 유지 보수 하기 쉽게 변경

    - 기존의 Cart Type04를 ImageDetail 페이지로 변경 후 개발 중 현재 80% 완성
    => 사진을 눌렀을 때 나오는 정보를 표시하는 페이지
    => 댓글, 키워드, 작가의 다른 사진 보기 기능만 만들면 됨

#### 21.08.27 23:06

    - 커서 기반 페이지네이션 구현 중
    => 라이브러리가 많은데 그중에서 일단 2개를 골라서 2개 다 만들고 마음에 드는 걸로 써보려고 한다.
    1. https://www.npmjs.com/package/react-infinite-scroll-hook
    2. https://www.npmjs.com/package/react-window

    => 1번으로 하니 hook전용이라 편한데 세밀한 설정을 건드리기가 너무 까다롭다
    => 2번은 아직 미구현

#### 21.08.30 23:05

    - 커서 기반 페이지네이션 결과
    => 1번 방법을 사용하기로 결정 - 나는 끝났고 백엔드 측의 API 개발이 완료되어야 이 다음이 진행 가능하다.
    => 잠정 중단. 다른 페이지 먼저 만들기

    - 이메일 인증 시스템 변화
    => 기존 회원 가입 시 문자열 검사하는 방식에서, 이메일로 발송된 링크를 누르면 인증 되는 방식으로 변경
    => 내일 회원 가입 이메일 인증 제거, 회원 가입 끝나면 이메일 인증 하라는 창 보여주기

    - 로그인 결과 값 변경
    => 기존 2개의 결과 값에서 3개의 결과 값으로 변경 됨
    => (로그인 성공, 로그인 실패) - (로그인 성공, 로그인 실패, 이메일 인증 필요)

#### 21.08.31 18:13

    - 커서 기반 페이지네이션 테스트 완성
    => 잠정 중단 하기로 했었는데 갑자기 아이디어가 생각 나서 구현 했다.
    => src 폴더에 mockData.json을 만들고 로컬로 API를 띄운다음 axios.get으로 테스트 했다.
    => 잘 되었고 이제 백엔드에서 만든 API를 가지고 테스트를 하면 된다.

    - 회원 가입 이메일 인증 성공
    => 회원 가입 끝난 후 이메일로 이동해서 받은 링크로 이동을 해야지 로그인 가능
    => 테스트는 성공했고 이제 세부적인 사항과 로그인 로직만 수정하면 된다.

</div>
</details>

---

<details>
<summary>9월의 기록 보기</summary>
<div markdown="3">

#### 21.09.01 19:19

    - Main의 koreaMap 제거
    => 디자인이 이쁘면 특색있는 기능이 될 거 같은데 디자인 쪽이 영 자신이 없어서 그냥 제거 했다.
    => koreaMap 대신 백엔드 쪽에서 최신에 업로드 된 이미지를 받아서 커서 기반 페이지네이션으로 렌더링 하기로 했음 - 현재는 개인적으로 만든 mock data 넣은 상태

    - 회원 가입 후 이메일 인증 하라는 페이지로 이동
    => 이제 회원 가입 후 바로 로그인 페이지로 이동하는 것이 아닌 이메일 인증 하라는 Notice 페이지로 이동

    - 로그인 로직 변경 완료
    => 통신의 응답 값으로 isvalue를 받는데 로그인 성공시 1, 이메일 또는 비밀번호가 틀렸을 시 0, 이메일 인증이 안되었을 경우 2로 온다.
    => 1의 경우에만 로그인 후 메인으로 이동하고 0과 2의 경우에는 각각 어떤 문제인지 alert로 사용자에게 표시해준다.

#### 21.09.02 20:46

    - 결제 페이지 구현 중 - 80% 완료
    => 아임포트를 이용해서 구현
    => 클라이언트에서 아임포트와 통신을 한 후 아임포트 측에서 넘겨주는 데이터를 백엔드에 다시 전송해주는 방식
    => 현재 클라이언트에서 아임포트와 통신을 한 후 데이터 받아오는 부분까지는 완성
    => 백엔드측의 API와 페이지에서의 뼈대만 조금 손 보면 완성

#### 21.09.03 17:05

    - 결제 페이지 완성
    => UI 뼈대 완성
    => 백엔드 측에서 프론트와 아임포트의 통신 결과 값을 받는 API만 완성되면 종료

#### 21.09.06 21:11

    - feature/best_category_404 브랜치 생성
    => best, category, 404 페이지 만든 후 develop에 merge 할 예정

    - best 페이지 완성
    => 기존의 search 컴포넌트를 활용하여서 간단하게 parameter로 입력 받는 페이지로 생성

    - category 페이지 진행 중
    => 카드 형태로 구현 예정
    => 생각이 좀 바뀌었는데 헤더에 별도로 버튼으로 두지 말고 메인 화면에서만 카드 형태로 보여줘야겠다.

#### 21.09.07 21:08

    - category에 사용 할 card 완성 type04로 생성
    => 마우스가 위에 올 시 이미지가 확대 됨

    - postman mock server 직접 만들어서 테스트 중
    => 커서 기반 한번 임의로 테스트 중인데 에러 떠서 확인 중

#### 21.09.09 20:24

    - 커서 기반 페이지네이션 1차 테스트 완료
    => 아직 서로 맞춰야 할 부분이 많음
    => 변수도 수정 해야 하고 백엔드에서 생성한 API 주소도 변경 해야 함

    - 결제 페이지 결제 성공 후 정보 전송 테스트 완료
    => 백엔드 측에 제대로 잘 넘어감
    => 중복일 경우도 백엔드에서 대비를 해두었음

#### 21.09.10 16:41

    - category 구현 완료
    => 메인 페이지에서만 보이며 상품 바로 위에 위치함
    => 가로 스크롤 형태로 구현 - 스크롤 대신 드래그 기능 사용
    => 클릭 시 해당 카테고리 페이지로 이동

    - 404 페이지 구현 완료
    => 잘못된 주소로 이동 할 경우 404 페이지로 이동
    => 에러 내용과 메인으로 돌아가기 버튼이 있음

#### 21.09.13 22:18

    - MyPage의 결제 내역 구현 중
    => 사용자가 보고 싶은 기간을 정해서 볼 수 있게 구현 중
    => mock 데이터는 직접 만들어 두었고 데이터 가져오는 것도 확인했음
    => 데이터 가져온 뒤 어떻게 보여줄 지 정하면 끝

#### 21.09.14 20:26

    - MyPage의 결제 내역 페이지 구현 완료
    => 디자인을 제외한 부분 구현 완료
    => axios 통신을 통해 받아 온 후 list형태로 뿌려준다.
    => 정보가 많을 경우 스크롤로 확인 가능

#### 21.09.15 09:04

    - 기존의 404 컴포넌트를 더 세분화 함
    => 페이지 자체를 가져오던 방식에서 컴포넌트만 가져오는 방식으로 변경
    => 좀 더 다양하게 쓸 수 있게 됨
    => 마이 페이지에서 등록되지 않은 주소로 이동 할 때에도 사용 가능

#### 21.09.16 22:05

    => 그냥 map을 쓰면 에러가 나는 이유 [https://devbirdfeet.tistory.com/47]

    - MyPage 구독한 이미지 / 작가 페이지 구현 완료
    => 토글 버튼을 눌러서 이미지와 작가 페이지를 왔다 갔다 할 수 있음
    => 해당 페이지 도착 하면 바로 API 통신 그 후 렌더링
    => useEffect를 사용해서 초기 페이지 진입 시 통신 후 Item들 세팅

    - MyPage 구매한 이미지 페이지 구현 완료
    => 결제 내역 페이지와 동일한 형태로 구현 했음
    => 기간을 정해서 볼 수 있게 구현

#### 21.09.17 16:38

    - Card 컴포넌트에 type 05, 06 추가
    => 이미지 관리 페이지에서 사용 할 카드 형태

    - MyPage 이미지 관리 페이지 구현 중
    => 승인, 심사 중, 승인 불가 형태로 구분 되어있음 각각 클릭해서 확인 가능
    => 거의 다 만들었는데 Postman의 호출 횟수가 넘어가서 더 이상의 테스트 불가로 중단

    => 다음부터는 로컬 json-server로 해야 할 듯

#### 21.09.20 21:11

    - Image Upload 페이지에 사용 할 위치 정보 폼 생성 완료
    => Kakao Map API 사용, 사용자가 클릭 하면 로드뷰와 마커가 해당 위치로 이동하고 주소가 InfoWindow로 뜸
    => Component로 만들었는데 어떻게 적용 할 지 생각 해야 함 - 주소 및 좌표 정보는 state에 저장 되고 있음
    => 자식의 props 정보를 부모로 올려 보내면 될 거 같음

    - PayLog 페이지 통신 후 업로드 할 변수 명 변경 완료

#### 21.09.21 12:08

    - Image Upload 페이지에 KakaoMap 융합 성공
    => 자식과 부모의 props 전달로 구현 했음
    => 키워드 입력 부분은 백엔드와 협의 후 간단하게 수정만 하면 됨
    => 위치 입력 부분은 Input 칸을 클릭 하면 kakao map이 뜨고 거기서 위치 클릭 후 저장 버튼을 누르면 state에 저장
    => 디자인은 나중에 하자...

    - mock data 서버 이전 성공
    => 기존의 postman에서 json-server(local)로 이동 - 한도가 초과되어서 이동 했음
    => 모든 api 불러오던 주소 변경

    - 모든 axios 통신 auth.services로 이동
    => 한 곳에서 통신 관리

    - Category 보여주는 로직을 변경
    => 기존에 무한 스크롤을 응용해서 진행 했는데 렌더링에 불필요한 것이 많아 시간이 오래걸렸음
    => 어차피 갚은 정해져 있으니 무한 스크롤이 아닌 그냥 map을 사용

    - map 함수 쓸때 () => {} 이렇게 쓰면 작동을 안한다. () => () 이렇게 해야 한다. - 1시간 동안 찾음

#### 21.09.22 16:33

    - 회원 가입 페이지에 사용자 프로필 사진을 등록할 수 있는 폼 추가
    => 기존 통신 시 Json 형태로 보내던 것을 FileData 형식으로 변경

    - 개인 정보 수정 페이지에 사용자 프로필 사진을 변경할 수 있는 폼 추가
    => 기존 통신 시 Json 형태로 보내던 것을 FileData 형식으로 변경

#### 21.09.23 20:00

    - MyPage 출금 페이지 80% 완성
    => 페이지에 들어갈 요소랑 백엔드에서 뭐 받을 지만 정확히 알아내서 요소만 채워 넣으면 됨
    => 정해진 뒤 mock data 만들고, li에 넣고 통신 테스트만 하면 됨

    - 판매자 대시 보드 페이지 준비 중
    => 약간의 틀은 잡아 놓았고 백엔드 측에서 데이터 넘겨줄 수 있는가 얘기 해봐야 함

#### 21.09.24

    - MyPage 출금 페이지 완성
    => 이제 useEffect로 로그인 후 유저 정보가져와서 테스트만 해보면 됨

    - 백 엔드와 프로필 사진 테스트 완료
    => 회원 가입, 로그인에서의 데이터 전송 성공
    => 이미지 업로드 시 어떤 값들이 필요한지 전달 받았음

#### 21.09.25 20:18

    - MyPage 대시보드 진행 중
    => 뼈대 구축 완료, 들어갈 요소도 정해 놓았음
    => 상단: 프로필 사진, 닉네임 | 중단: 총 판매 수익금, 총 판매 량, 판매 중인 사진 수, 구독자 수 | 하단: 현재 판매 중인 사진 리스트로 보여주기

#### 21.09.28 23:12

    - MyPage 대시보드 진행 중
    => 시간이 부족해서 css만 조금 추가 및 기존 것 보수

#### 21.09.29 23:09

    - MyPage 대시보드 완성
    => axios 통신으로 유저 정보 가져온 후 렌더링하는 방식

    - 사진 클릭시 사진 정보 페이지로 이동하게끔 작동 시키기

    - 이제 본격적인 디자인 손질 들어갑니다잉

#### 21.09.30 10:43

    - Img Card와 Image Detail 연결 성공
    => 이제 Card 클릭 시 Image Detail 페이지로 이동
    => axios Card에서 Image Detail로 Image ID를 보내주고 useLayoutEffect를 사용해서 데이터를 가져옴

    - 기존의 Category Url 수정
    => /search/{catery 명} path parameter에서 /category?item= query string 형태로 변경
    => routes 수정 - category, img

</div>
</details>

---

<details>
<summary>10월의 기록 보기</summary>
<div markdown="4">

#### 21.10.01 09:52

    - 오늘 부터 Css 칼질 들어갑니다.
    => 반응형을 고려한 디자인, 기존의 px 단위들을 em, rem, % 단위로 변경
    => 최대한 깔끔하게 꾸며 봅시다.
    => 반응형으로 많은 레이아웃 수정이 필요한 페이지 - MyPage, ImageDetaile
    => 미디어 쿼리는 3가지 분기점으로 나눠서 진행 - https://hohoya33.tistory.com/127
    => font-size는 기본을 62.5%로 적용 후 개별의 페이지 마다 rem을 사용

#### 21.10.04 21:25

    - npm react-responive 설치
    => react에서 반응형을 쉽게 할 수 있는 모듈 설치
    => src/MediaQuery.tsx 생성 - phone, tablet, pc로 구분
    => PC 먼저 다 만들고 Tablet 마지막에 Mobile로 작업
    => 1차 완료: css의 어느정도의 틀 2차 완료: 완전 끝

    - PC
    => Header, Main, Join, Login, MyMenu 1차 완료

    - organsim - modal 삭제
    => 쓸데 없이 중첩 되는 구조여서 분해하고 별도로 옮겼음

    - 이거 코드 처음부터 다시 수정하는 것도 재미있네 ㅋㅋ

#### 21.10.05 23:03

    - PC
    => PayLog, Purchase, RePassword, 404, Notice, Management 1차 완료
    => 어색 했었던 css도 수정 중

#### 21.10.06 23:25

    - PC
    => Exchange, Favorite, UploadImage, DashBoard, FormInput, PaymentItem 1차 완료

    - 남은 것
    => atoms
    => molecules - Card
    => organisms

#### 21.10.07 23:12

    - PC
    => EditProfile, PaymentItem 1차 완료
    => Card 60% 정도 완성 - 내용이 많아서 조금 오래 걸린다.

#### 21.10.08 11:21

    - PC
    => Card, ImageDetail, CardGrid, atoms 완성
    => Card의 % 단위의 축소로는 어려움이 생겨서 rem 고정 값을 사용
    => 태블릿이랑 모바일은 다른 rem 고정 값을 사용해서 보여 줘야 할 듯

    - 남은 것
    => Tablet, Mobile 에서의 렌더링
    => Card % 단위 축소를 해결해야 할 듯

#### 21.10.11 22:55

    - 구독 버튼 활성화
    => 기존의 껍데이만 있던 구독 버튼을 활성화 시켰음
    => css 에서 pointer-events: none; 이어서 문제가 있었는데 잘 해결 됬음

    - 저녁에 백엔드와 구독 및 이미지 상세 페이지 테스트 완료
    => 사진, 유저 구독 및 이미지 상세 페이지 성공적으로 완료
    => auth.services 구독 관련 통신 추가

#### 21.10.12 21:52

    - 이미지 상세 페이지에 상품 구매 버튼 활성화
    => 껍데기만 있던 구매 버튼을 활성화 시켰음
    => auth.services 상품 구매 관련 통신 추가

    - 이미지 결제 내역 페이지 테스트 완료
    => 백 엔드와 테스트 성공, 1가지 문제가 있는데 s3 설정이 자 안된 거 같음

#### 21.10.18 15:40

    - 장바구니 페이지 구현 중
    => header와 myMenu에 장바구니를 추가 했음
    => 클릭 시 장바구니 페이지로 이동
    => 현재 mock data만든 후 불러와서 체크 까지 가능
    => 이제 css 디자인 바꾸고 선택 상품 결제 하는 통신 만들면 됨

    - 모든 갤러리의 이미지에 장바구니로 저장하기 버튼 만들어야 함

#### 21.10.20 19:45

    - 장바구니 페이지 구현 중
    => 체크 시 모든 가격이 얼마인지 확인 할 수 있게 적용
    => useEffect를 사용해서 상태 관리 중

    - auth.services에 2개의 통신 추가 했음
    => cart 정보 가져 올 때는 API로 토큰과 유저 이메일을 통해서 조회
    => 구매 시 토큰, 유저 이메일, 상품, 금액을 API로 전송

    - 이제 장바구니 추가와 삭제만 남았음

#### 21.10.21 22:21

    - 장바구니 페이지 구현 완료
    => 체크한 상풍 구매 뿐만이 아닌 삭제도 가능하게끔 구현 완료
    => 버튼을 통한 삭제

    - auth.services에 2개의 통신 추가
    => cart 삭제 하는 통신
    => img를 cart에 넣는 통신

    - 이제 테스트만 해보면 됨

### 21.10.22 20:26

    - 전체적인 코드 수정 중
    => 시험 기간이라서 백엔드와 테스트 하는 것이 어려워 코드 전체적으로 수정중

    - 코딩 컨벤션 재정립 - 혼자 하는 것이지만 그래도 통일 시켜야 편함
    1. 컴포넌트는 pascal case, 뒤에 전부 Item 붙이기
    2. 일반 함수, 변수는 camel case
    3. 통신은 snake case 인데 앞에 get 인지 post 인지 붙이기
    4. State 바꾸는 함수는 뒤에 event 붙이기
    5. any로 적은 거 명확한 타입으로 정의 하기

### 21.10.27 21:58

    - 내일 검색 페이지 테스트 준비
    => @를 넣어서 검색하면 작가를 검색하는 것이고, 그냥 문자만 넣으면 사진 검색
    => 사진 검색은 그냥 쓰고 작가 검색은 페이지를 따로 만들어야 할 거 같다.

### 21.10.28 19:22

    - 비상사태
    => 검색 페이지 구현을 갈아 엎어야 할 거 같다.
    => 이게 생각한 것 처럼 작동이 안된다.
    => 검색 할 때마다 레더링이 새롭게 되야 하는데 렌더링이 새롭게 안되고 주소랑 props만 변경이 된다.
    => 페이지르 새로 만들어야 하나? 이거 계속 생각 해봐야 할 거 같다.

</div>
</details>

---

<details>
<summary>11월의 기록 보기</summary>
<div markdown="5">

### 21.11.01 21:20

    - 검색 페이지 갈아 엎기
    => 현재의 검색 페이지는 별도의 한 개의 페이지로 구성되어 있다.
    => Search라는 페이지 안에 검색 폼 버튼이 있고 사진 카드를 렌더링 해주는 것도 있다.
    => 이거를 검색 폼과 사진 카드 렌더링 해주는 페이지로 따로 분리를 해봐야 할 거 같다.

    - CardGrid 수정 하기
    => 현재 CardGrid 컴포넌트는 매개변수를 받지 않고 있는데 이제 입력 값을 매개 변수로 주게끔 수정 해야 겠다.
    => 매개변수를 받으면 그에 따른 결과를 통신 받고 렌더링 하게끔 수정 해야 겠다.

### 21.11.08 14:50

    - 검색 페이지 보수 작업
    => history.go(0)을 이용해서 페이지 이동 후 강제로 새로고침하는 방식
    => props도 CardGrid로 잘 넘어감
    => 새로 생긴 문제 - 뒤로 가기 시 기존의 데이터가 남아 있음 (새로 렌더링 해야 할 거 같은데) 일단 이거로 씁시다
    => @로 입력 시 작가, 그냥 입력 시 사진 이름을 판별하는 분기점 생성
    => auth.service에서 API주소 넣고 바꾸면 될 거 같다.
    => 오늘 백엔드랑 테스트 있으니 일단 검색 하고 결과가 제대로 받아져 오는가 테스트 해보기

    - 뒤로 가기 시 새로고침 안되는 것도 해결 해야 할 문제

    - 아 작가랑 사진이랑 카드 형태가 다르니 CardGrid 작가 형태로 하나 더 만들어야 하나? 이걸 생각을 못하고 있었네 ;;

    - 장바구니 버튼 옮기기
    => 기존에는 메인 카드에 좋아요랑 같이 있었는데 앞으로는 상세 이미지 페이지에 구매 하기 위에 있음

    - 백엔드와 검색 페이지 테스트 실패
    => 통신을 해보는데 백엔드 측에서 오류가 발생했다. 잘 되던게 갑자이 안되서 난항을 겪고 있다. Postman에서도 안되서 에러 해결하고 다시 하기로 함
    => 일단 auth.service 커서 기반 페이지네이션 1개 -> 3개로 변경(img, default, auth)

### 21.11.11 00:49

    - mock data 수정
    => 너무 길어서 좀 짧게 수정

    - 보수 작업

### 21.11.12 21:25

    - 다음주에 프로젝트 끝냅니다. 끝내야 할 거 같습니다.

    - 다음주에 밑에거 다 끝내기 (css 제외)
    1. 만약 처음 카운트에서 에러 나면 그만 통신 하기 27 err => stop axios
    2. 사진 작가 검색 결과 페이지
    3. Css - mobile, tablet
    4. 코딩 컨벤션 수정
    5. 메인에 프로필 누르면 작가 페이지로 이동
    6. 로그인 또 이상하게 맛이 가버렸음
    7. card의 css들
    8. 이미지 업로드의 키워드 입력 방식
    9. 이미지 관리에서의 이미지 삭제 및 수정
    10. 이미지 대시보드 이미지 삭제 및 수정 없애기
    11. 구독한 이미지 및 작가의 버튼 상호 작용
    12. 장바구니의 멍청해 보이는 디자인
    13. 작가 상세 페이지

### 21.11.13 20:03

    - 시작이다.
    => 6번 로그인 문제 해결 - history.replace가 아니라 window.location.replace로 변경
    => 10번 문제 해결 - card type 07 생성

    - 작가 검색 결과 페이지
    => card grid 함수는 그대로 사용하고 문자열 검사를 해서 @ 포함하면 state 변경 후 서로 다른 결과를 보여주게 해야 할 거 같다.

### 21.11.15 20:39

    - 마지막으로 협동 테스트 진행중
    => 백엔드에서 준 문서를 보고 수정하고 있긴 한데 백엔드가 2대이고 한번에 풀 가동 되는 경우가 없어서 수정하기 어렵네

    - 역시 서버 다 켜놓고 하니까 진도 쭉쭉 나가고 좋네
    => 진작에 이렇게 했어야 했다.

### 21.11.16 16:32

    - 장바구니 맞춰보는 중
    => 구매랑, 조회 하는 것 잘 된다.
    => 쭉쭉 진행하면 되겠다.
    => 장바구니 전부, 구매한 이미지 목록, 포인트 충전하기, 결제내역 통신 및 작업 완료

    - 오늘 느낀 것 역시 알고리즘을 알아야 한다.

### 21.11.17 22:11

    - 계속해서 테스트 중
    => 포인트 환전 하기, 사진 정보 페이지에서 구매 및 장바구니 담기 완료
    => 메인 페이지, 사진 검색 하기 제대로 작동 하는 것 확인
    => 서버 켜니까 진도 쭉쭉 나간다 너무 좋아

    - 다른 백엔드와 통신 테스트
    => 전체적으로 통신 후 어떤 부분에서 에러가 있고 어떤 정보가 더 필요한지 체크 했음

    - 아이디 찾기 페이지 추가
    => 이름, 전화번호 입력 받고 찾을 수 있음, 일치 시 아이디 리턴
    => auth.service에 해당하는 통신 추가

### 21.11.19 21:52

    - 계속해서 테스트 중
    => 포인트 환전 했던 기록 가져오기 구현 성공 입력 값은 토큰, 이메일, 시작 날짜, 끝 날짜
    => 작가 검색 페이지 구현 완료 - 기존 것에서 조금 틀어서 만들었는데 그나마 재사용 해서 만들었음
    => 아직 테스트는 못해봤는데 내일 백엔드와 맞춰 볼 예정

### 21.11.21 22:15

    - 테스트 중
    => API 내용 변경한 것 기반으로 다시 테스트
    => 메인 페이지 커서 기반, 사진 정보 페이지, 구독 관련 통신 수정

### 21.11.22 22:16

    - 테스트 중
    => 판매자 대시보드 변경 완료
    => 지금까지 백에서 데이터를 받아서 기존의 state에 저장하는 방식을 썼는데 너무 비효율 적인거 같다.
    => 그냥 받아서 넣고 map으로 풀어서 쓸 수는 없는 건가? 생각대로 하면 코드가 4분의 1로 줄어들 거 같은데
    => 다른 인원들 개발한 거 뒤져봐야겠다.

### 21.11.24 17:33

    - 대부분 테스트 끝
    => 구독이랑 관련해서 몇가지 남았는데 이거는 좀 걸릴 거 같다고 백엔드가 얘기 했음
    => 일단 오늘 호스팅 까지 한다.

### 21.11.26 23:14

    - The End
    => 오늘 회의 하면서 프로젝트를 끝내기로 했다. 솔직히 너무 아쉽다. 완성이 되지 않은 부분이 꽤 많아서 엄청 아쉽다.
    => 첫 프로젝트라서 엄청 애착을 가지고 했는데 용두사미의 결말로 끝이 나니 찝찝하게 끝난 거 같다.
    => 사실 여기서 더 잡고 있어도 서로가 힘들고 진척이 없을 거라는 생각이 들어 그만하자고 했다.
    => 많은 것을 배우고 느꼈다. 또한 나를 단단하게 해준 프로젝트 였다.

    - 재밌었다. 리액트야

</div>
</details>
