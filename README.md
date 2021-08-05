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
    1. 리덕스 dispatch.then 에서 발생 하던 [Property 'then' does not exist on type ...] 에러를 일단<br></br> 조건문으로 우회해서 해결  - login, join ※ async await 처럼 데이터의 전송을 기다리지 않아서 생기는 문제가 발생 함

    2. Card 필요한 형태로 처음부터 다시 만들기 - [사용자에게 보여지는 카드, 내가 좋아하는 작가 카드]

#### 21.08.05 18:19

    - ※기존의 회원 가입 페이지 atomic으로 재구성 완료※
    - 회원 가입, 로그인 페이지 validator 테스트 적용 결과 => 잘 됨, 바로 사용 가능
    - 지금까지 제작한 StoryBook 팀원들 확인할 수 있게 사이트를 통해 배포
    사이트: https://photologger.netlify.app
