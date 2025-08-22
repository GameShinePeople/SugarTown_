# SugarTown
> 슈가타운(Sugar Town)은 2000년대 감성 WebGL 미니게임을 웹에서 바로 실행 가능한 개인 창작 게임 전시 웹 사이트로 구현하여 제공하는 서비스입니다. 웹 기반 전시 플랫폼으로서, 게임을 직접 실행할 수 있습니다.
<br> <br>
초기 MVP는 React + Firebase 기반으로 인증 및 스토리지 중심으로 구축하며, 추후 Spring 기반 리팩토링을 고려하고 있습니다.

![sugartown](/frontend/public/images/Banner.png)

[바로가기](https://sugartown.com)

## 프로젝트 개요

### 1. 프로젝트 주제

- 개인 창작 WebGL 미니게임 플랫폼

### 2. 메인/서브 기능

```markdown
1. Game Upload MVP : WebGL 게임 업로드 및 메타데이터 관리
2. Game List MVP : 게임 검색, 주제별 분류, 인기순 정렬 기능
3. Game Detail MVP : 게임 실행, 좋아요, 댓글 및 리뷰 기능
4. User MVP : 로그인, 회원가입, 프로필 수정, 회원 탈퇴
5. MyPage MVP : 마이룸(사용자 공간 꾸미기), 게시글 관리, 방명록 기능
6. Creator MVP : 창작자 프로필, 창작자 페이지 커스터마이징, 작가홈 관리
```

### 3. 프로젝트 팀원

| 이름   |   역할   |
| ------ | ------ |
| 이승현 | PM / 개발 |
| 이형인 | PM / 개발 |
| 정혜주 | 기획 / 개발 |

---

## 프로젝트 구조

### 아키텍처

![architecture](./docs/aws.png)

### ERD

![ERD](./docs/erd.png)

### 디렉토리 구조

<details>
<summary>Front-end</summary>

```
frontend/                                 # 프론트엔드 관련 파일들
├── node_modules/                         # 프로젝트 종속성 모듈
├── public/                               # 정적 파일들
│   ├── images/                           # 이미지 파일들
│   ├── favicon.ico                       # 파비콘 파일
│   └── index.html                        # 메인 HTML 파일
├── src/                                  # 소스 코드
│   ├── assets/                           # 정적 자산 파일들
│   │   ├── fonts/                        # 폰트 파일들
│   │   └── icons/                        # 아이콘 파일들
│   ├── components/                       # 재사용 가능한 UI 컴포넌트(위젯)
│   │   ├── common/                       # 공통 UI(버튼, 모달, 로딩 스피너 등)
│   │   │   ├── Button.tsx                # 범용 버튼 컴포넌트
│   │   │   ├── Modal.tsx                 # 범용 모달 컴포넌트
│   │   │   ├── LoadingSpinner.tsx        # 로딩 스피너 컴포넌트
│   │   │   └── ...                      # 기타 공통 컴포넌트
│   │   ├── layout/                       # 레이아웃 컴포넌트(Header, Footer)
│   │   │   ├── Header.tsx                # 헤더 컴포넌트
│   │   │   └── Footer.tsx                # 푸터 컴포넌트
│   │   ├── auth/                         # 인증 관련 컴포넌트
│   │   │   ├── LoginModal.tsx            # 로그인 모달 컴포넌트
│   │   │   └── SignupForm.tsx            # 회원가입 폼 컴포넌트
│   │   ├── game/                         # 게임 관련 UI 컴포넌트
│   │   │   ├── GameCard.tsx              # 게임 카드 컴포넌트
│   │   │   ├── GameList.tsx              # 게임 목록 렌더링 컴포넌트
│   │   │   ├── GameSearchBar.tsx         # 게임 검색 바 컴포넌트
│   │   │   ├── GameFilterBar.tsx         # 주제(카테고리)/정렬 필터 바 컴포넌트
│   │   │   ├── GameSortSelector.tsx      # 인기순 등 정렬 선택 컴포넌트
│   │   │   ├── GameLikeButton.tsx        # 게임 상세 내 좋아요 버튼 컴포넌트
│   │   │   ├── GamePlayer.tsx            # 게임 실행(iframe/WebGL) 컴포넌트
│   │   │   └── GameUploadForm.tsx        # 게임 업로드 폼 컴포넌트
│   │   ├── review/                       # 댓글/리뷰 UI 컴포넌트 (게임 상세 포함)
│   │   │   ├── ReviewList.tsx            # 댓글 목록 컴포넌트
│   │   │   ├── ReviewForm.tsx            # 댓글 작성 폼 컴포넌트
│   │   │   └── ReviewItem.tsx            # 개별 댓글 아이템 컴포넌트
│   │   ├── mypage/                       # 마이페이지 관련 컴포넌트
│   │   │   ├── MyProfile.tsx             # 사용자 프로필 컴포넌트
│   │   │   ├── MyNavigation.tsx          # 마이페이지 내 네비게이션 탭/메뉴 컴포넌트
│   │   │   ├── creator/                  # 창작자 관련 컴포넌트 하위 폴더
│   │   │   │   ├── CreatorProfile.tsx    # 창작자 프로필/소개 컴포넌트
│   │   │   │   ├── CreatorGames.tsx      # 창작자 게임 목록 컴포넌트
│   │   │   │   ├── CreatorPostList.tsx   # 창작자 게시글(공지사항 등) 목록 컴포넌트
│   │   │   │   ├── CreatorPostDetail.tsx # 창작자 게시글 상세 페이지 컴포넌트
│   │   │   │   └── CreatorPostEditor.tsx # 창작자 게시글 작성/수정 페이지 컴포넌트
│   │   │   ├── post/                     # 게시글 관련 컴포넌트 하위 폴더
│   │   │   │   ├── PostList.tsx          # 게시글 목록 컴포넌트
│   │   │   │   ├── PostDetail.tsx        # 게시글 상세 페이지 컴포넌트
│   │   │   │   └── PostEditor.tsx        # 게시글 작성/수정 페이지 컴포넌트
│   │   │   ├── guestbook/                # 방명록 관련 컴포넌트 하위 폴더
│   │   │   │   ├── GuestbookList.tsx     # 방명록 리스트 컴포넌트
│   │   │   │   ├── GuestbookForm.tsx     # 방명록 작성 폼 컴포넌트
│   │   │   │   └── GuestbookItem.tsx     # 방명록 카드 아이템 컴포넌트
│   │   │   └── myroom/                   # 마이룸 관련 컴포넌트 하위 폴더
│   │   │       ├── MyRoomView.tsx        # 마이룸 메인 뷰 컴포넌트
│   │   │       ├── MyRoomEditor.tsx      # 마이룸(꾸미기 등) 에디터 컴포넌트
│   │   │       └── MyRoomItem.tsx        # 마이룸 아이템/소품 컴포넌트 예시
│   │   └── error/                        # 에러 처리 관련 컴포넌트
│   │       └── ErrorBoundary.tsx         # 에러 경계 컴포넌트
│   ├── config/                           # 설정 파일들 폴더
│   │   ├── firebaseConfig.ts             # Firebase 설정 파일
│   │   ├── routes.tsx                    # 라우트 정의 파일
│   │   ├── appConstants.ts               # 전역 상수 정의 파일
│   │   └── theme.ts                      # 테마 및 디자인 시스템 설정 파일
│   ├── query/                            # TanStack Query 관련(fetch/mutation) 파일 모음
│   │   ├── gameQuery.ts                  # 게임 목록, 상세, 검색, 정렬, 좋아요 관련 쿼리
│   │   ├── reviewQuery.ts                # 댓글/리뷰 관련 쿼리
│   │   ├── userQuery.ts                  # 유저 및 창작자 정보 관련 쿼리
│   │   ├── postQuery.ts                  # 게시글 관련 쿼리
│   │   ├── myroomQuery.ts                # 마이룸 관련 쿼리
│   │   ├── guestbookQuery.ts             # 방명록 관련 쿼리
│   │   └── queryClient.ts                # QueryClient 인스턴스 및 설정 (Provider 포함)
│   ├── stores/                           # zustand 상태관리 store(전역 UI 상태 등)
│   │   ├── authStore.ts                  # 인증 및 유저 상태 관리 store
│   │   ├── gameStore.ts                  # 게임 목록/상세 UI 상태 store
│   │   ├── creatorStore.ts               # 창작자 및 커스터마이징 상태 store
│   │   ├── postStore.ts                  # 게시글 상태 관리 store
│   │   ├── myroomStore.ts                # 마이룸 상태관리 store
│   │   └── guestbookStore.ts             # 방명록 상태관리 store
│   ├── hooks/                            # 커스텀 훅 모음
│   │   ├── useAuth.ts                    # 인증 관련 훅
│   │   ├── useGame.ts                    # 게임 관련 훅
│   │   ├── useGameSearch.ts              # 게임 검색/필터 훅
│   │   ├── useLikeGame.ts                # 좋아요 토글 훅 (TanStack Query mutation 래핑)
│   │   ├── useCreator.ts                 # 창작자 관련 훅
│   │   ├── usePost.ts                    # 게시글 훅
│   │   ├── useMyroom.ts                  # 마이룸 훅
│   │   └── useGuestbook.ts               # 방명록 훅
│   ├── pages/                           # 페이지 컴포넌트들(라우트 단위)
│   │   ├── Home.tsx                      # 홈(메인) 페이지
│   │   ├── GameListPage.tsx              # 게임 목록 페이지 (검색, 필터, 정렬 포함)
│   │   ├── GameDetailPage.tsx            # 게임 상세 페이지 (좋아요, 댓글 포함)
│   │   ├── GameUploadPage.tsx            # 게임 업로드 페이지
│   │   ├── MyPage/                       # 마이페이지 및 하위 라우트 폴더
│   │   │   ├── index.tsx                 # 마이페이지 메인(내 활동 및 프로필)
│   │   │   ├── CreatorHomePage.tsx       # 작가홈 페이지
│   │   │   ├── PostPage.tsx              # 게시글 페이지(나의 게시글)
│   │   │   ├── GuestbookPage.tsx         # 방명록 페이지
│   │   │   └── MyRoomPage.tsx             # 마이룸 페이지 (다이어리 → 마이룸 반영)
│   │   ├── LoginPage.tsx                 # 로그인 및 회원가입 페이지
│   │   └── NotFoundPage.tsx              # 404 Not Found 페이지
│   ├── service/                          # API 통신 및 서비스 모듈
│   │   ├── firebaseService.ts            # Firebase 관련 API 서비스
│   │   ├── gameService.ts                # 게임 관련 API 서비스
│   │   ├── reviewService.ts              # 리뷰/댓글 관련 API 서비스
│   │   └── userService.ts                # 유저 정보 관련 API 서비스
│   ├── styles/                          # 스타일 관련 파일들
│   │   ├── globals.css                   # 전역 스타일
│   │   └── tailwind.css                  # Tailwind CSS 설정 파일
│   ├── types/                           # 타입 정의 파일들
│   │   ├── game.ts                       # 게임 관련 타입 정의
│   │   ├── user.ts                       # 유저 및 창작자 타입 정의
│   │   ├── review.ts                     # 리뷰 및 댓글 타입 정의
│   │   ├── post.ts                       # 게시글 타입 정의
│   │   ├── myroom.ts                     # 마이룸 타입 정의
│   │   └── guestbook.ts                  # 방명록 타입 정의
│   ├── App.tsx                          # 앱 메인 컴포넌트
│   ├── App.css                          # 앱 전체 스타일 파일
│   ├── index.tsx                        # 앱 렌더링 진입점
│   └── index.css                        # 인덱스 페이지 스타일 파일
├── .env                                # 환경 변수 파일
├── package-lock.json                   # 패키지 버전 잠금 파일
├── package.json                        # 프로젝트 설정 및 종속성 정의 파일
├── tailwind.config.js                  # Tailwind CSS 설정 파일
└── tsconfig.json                       # TypeScript 설정 파일
```

</details>
<br>
<details>
<summary>Back-end</summary>

```
backend/                                  # 백엔드 관련 파일들
├── data/                                 # 데이터 구조 및 샘플 데이터
│   ├── firestore_sample.json             # Firestore 샘플 데이터 구조 안내 문서
│   ├── storage_sample.md                 # Storage 폴더 구조 및 가이드 문서
│   └── firestore_rules.md                # Firestore 컬렉션 및 보안 규칙 설계 문서
├── scripts/                              # 초기 설정 및 자동화 스크립트
│   ├── createTestUsers.js                # 테스트용 유저 생성 스크립트
│   ├── seedTestGames.js                  # 테스트용 게임 데이터 입력 스크립트
│   └── backupFirestore.js                # Firestore 데이터 백업 스크립트
├── functions/                            # Firebase Cloud Functions (서버리스 API 로직)
│   ├── src/
│   │   ├── auth/                         # 인증 관련 함수
│   │   │   ├── onUserCreate.ts           # 사용자 회원가입 트리거 함수
│   │   │   └── verifyToken.ts            # 토큰 검증 함수(커스텀 인증 등)
│   │   ├── game/                         # 게임 관련 API 함수
│   │   │   ├── uploadGame.ts             # 게임 업로드 처리 함수
│   │   │   ├── getGameList.ts            # 게임 목록 조회 함수
│   │   │   ├── getGameDetail.ts          # 게임 상세 조회 및 실행 함수
│   │   │   └── toggleLike.ts             # 게임 좋아요 토글 함수
│   │   ├── review/                       # 댓글 및 리뷰 관련 함수
│   │   │   ├── addReview.ts              # 댓글 작성 함수
│   │   │   ├── getReviews.ts             # 댓글 목록 조회 함수
│   │   │   └── deleteReview.ts           # 댓글 삭제 함수
│   │   ├── user/                         # 사용자 및 창작자 프로필 관련 함수
│   │   │   ├── getUserProfile.ts         # 사용자 프로필 조회/수정 함수
│   │   │   └── customizeCreatorPage.ts   # 창작자 페이지 커스터마이징 함수
│   │   ├── post/                         # 게시글 관리 함수
│   │   │   ├── createPost.ts             # 게시글 작성 함수
│   │   │   ├── getPostList.ts            # 게시글 목록 조회 함수
│   │   │   ├── getPostDetail.ts          # 게시글 상세 조회 함수
│   │   │   ├── updatePost.ts             # 게시글 수정 함수
│   │   │   └── deletePost.ts             # 게시글 삭제 함수
│   │   ├── guestbook/                    # 방명록 관련 함수
│   │   │   ├── addGuestbookEntry.ts      # 방명록 작성 함수
│   │   │   ├── getGuestbookEntries.ts    # 방명록 목록 조회 함수
│   │   │   └── deleteGuestbookEntry.ts   # 방명록 삭제 함수
│   │   ├── myroom/                       # 마이룸(사용자 공간 꾸미기) 관련 함수
│   │   │   ├── getMyRoomData.ts          # 마이룸 정보 조회 함수
│   │   │   ├── updateMyRoom.ts           # 마이룸 커스터마이징 업데이트 함수
│   │   │   └── addMyRoomItem.ts          # 마이룸 아이템 추가 함수
│   │   ├── utils/                        # 공통 유틸리티 함수 모음
│   │   │   ├── authUtils.ts              # 인증 및 권한 관련 유틸
│   │   │   ├── errorHandler.ts           # 에러 핸들링 유틸리티
│   │   │   └── validators.ts             # 입력값 검증 유틸리티
│   │   └── index.ts                      # Cloud Functions 엔트리포인트 (라우팅 관리)
│   ├── package.json                      # 함수별 의존성 및 스크립트 정의
│   └── tsconfig.json                     # 타입스크립트 컴파일러 설정
├── firestore.rules                       # Firestore 보안 규칙 정의 파일
├── storage.rules                         # Firebase Storage 보안 규칙 정의 파일
├── firebase.json                         # Firebase 프로젝트 설정 및 배포 구성
└── .env                                  # 환경 변수 파일
```

</details>

## 프로젝트 환경

### 1. 기술 스택

<details>
<summary>Front-end</summary>

- 프레임워크 및 라이브러리
  - `React` : 프론트엔드 UI 라이브러리
  - `Zustand` : 전역 상태 관리를 위한 경량 상태관리 라이브러리
  - `TanStack Query` : 서버 상태 및 비동기 데이터 관리
  - `Axios` : HTTP 요청 처리
  - `JWT Decode` : JWT 토큰 디코딩
- 스타일링
  - `Tailwind CSS` : 유틸리티 기반의 CSS 프레임워크
- 빌드 및 개발 도구
  - `npm` : 패키지 및 스크립트 관리
  - `TypeScript` : 타입 안정성, 코드 자동완성

</details>
<br>
<details>
<summary>Back-end</summary>

- 서버 및 클라우드
  - `firebase-functions` : Cloud Functions 실행 및 REST API
  - `firebase-admin` : Firestore, Storage, Auth 서버 SDK
  - `firebase` : 클라이언트 및 일부 서버 사용가능 SDK
- 인증 및 권한
  - `firebase-admin.auth` : 인증·권한 관리
- 데이터베이스 및 스토리지
  - `firebase-admin.firestore` : NoSQL 문서 DB
  - `firebase-admin.storage` : 파일 스토리지
- 유틸리티/개발 도구
  - `cors` : CORS 지원(필요 시)
  - `dotenv` : 환경 변수 로딩
  - `firebase-tools` : 배포 및 관리

</details>

### 2. 개발 환경

```
- Node.js : v20.17.0
- npm : v10.8.2
- git : v2.45.2
- OS : Windows_NT x64
- IDE : VSCode v1.90.2
```

### 3. 배포 환경

```
- 서버(WAS) : AWS EC2 (Express API 서버)
- 검색 서버 : AWS EC2 (MeiliSearch)
- 데이터베이스 : AWS RDS (MySQL)
- 스토리지 및 CDN : AWS S3, CloudFront
```

## 개발 문서

[설치 및 실행](/docs/setup.md)

[WBS](https://docs.google.com/spreadsheets/d/146z4zDaItYecm9I5W2r1dD-FEtuF9gWbjyTsLz0MkP4/edit?gid=962970998#gid=962970998)

[테이블 정의서](https://docs.google.com/spreadsheets/d/1abxsR-jKPNRI4qfe9dXE0NrXWX4AAo1sC5M0-JlBaVM/edit?gid=629411476#gid=629411476)

[API 명세서](http://43.203.213.200/api-docs/)

[팀 노션](https://www.notion.so/GSP-1b7b37123b4980dca743cda553569afc)

## 개발 규칙

### 1. 코드 컨벤션

- 텍스트 작성 기본 설정: VSCode Prettier Extension 사용

#### Front-end

- 변수, 함수 camelCase 사용, Class는 PascalCase 사용
- 문자열에선 기본적으로 `""`를 씀 (특수한 경우 제외)

#### Back-end

- 변수, 함수 camelCase 사용, Class는 PascalCase 사용
- 파일 구조는 MVC 패턴 따름
- 문자열에선 기본적으로 `""`를 씀 (특수한 경우 제외)

### 2. Branch 전략(GitFlow)

- **main**: 제품으로 출시되는 브랜치
- **develop**: 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 merge
- **feature**: 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 develop 브랜치에 merge
- **release**: 배포를 위해 main 브랜치로 보내기 전 먼저 QA(품질검사)를 하기 위한 브랜치
- **hotfix**: main 브랜치로 배포를 했는데 버그가 생겼을 때 긴급 수정하는 브랜치

<details>
<summary>GitFlow 과정</summary>

```
- master 브랜치에서 develop 브랜치를 분기합니다.
- 개발자들은 develop 브랜치에 자유롭게 커밋을 합니다.
- 기능 구현이 있는 경우 develop 브랜치에서 feature-* 브랜치를 분기합니다.
- 배포를 준비하기 위해 develop 브랜치에서 release-* 브랜치를 분기합니다.
- 테스트를 진행하면서 발생하는 버그 수정은 release-* 브랜치에 직접 반영합니다.
- 테스트가 완료되면 release 브랜치를 master와 develop에 merge합니다.
```

</details>

### 3. 커밋 메시지

- `type(타입): title(제목)`
- 제목 첫글자는 대문자로(EN)
- 제목 끝에 마침표 등 특수문자 X
- 제목은 명령문으로 사용, 과거형 X
- `type`은 아래 명시된 형태로

| Type 키워드  | 사용 시점                                                              |
| ------------ | ---------------------------------------------------------------------- |
| **feat**     | 새로운 기능 추가                                                       |
| **fix**      | 버그 수정                                                              |
| **test**     | 기능 테스트                                                            |
| **docs**     | 문서 수정                                                              |
| **style**    | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등) 기능 수정이 없는 경우 |
| **design**   | 사용자 UI 디자인 변경 (CSS 등)                                         |
| **test**     | 테스트 코드, 리팩토링 테스트 코드 추가                                 |
| **refactor** | 코드 리팩토링                                                          |
| **build**    | 빌드 파일 수정                                                         |
| **perf**     | 성능 개선                                                              |
| **chore**    | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                 |
| **rename**   | 파일 혹은 폴더명을 수정만 한 경우                                      |
| **remove**   | 파일을 삭제만 한 경우                                                  |
