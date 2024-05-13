# Dejay 회의실 예약 관제 뷰어

### 설정법

- RoomWatcher 프로젝트에서 id, pw, 회의실 목록을 설정하여 KT bizmeka에서 회의실 정보를 크롤링하여 DB에 저장하고 있는지 확인한다.
- /src/utils/constants 에서 ROOM_TYPE 을 설정한다.
- 실행하여 태블릿에서 확인한다.

### 기능

- 회의실명 클릭 시 회의실 변경
- 날짜 클릭 시 오늘 날짜로 변경
- 날짜 좌우 영역 클릭 시 날짜 이동 가능
- 시간 영역 스와이프 시 날짜 변경
- 당월이 아닌 날짜로 이동 제한
- 지난 회의 회색 처리
- 현재 회의 파랑 처리
- 다가올 회의 하얀색 처리
- 회의 시작 시 "회의 중"으로 상태 변경
- 회의 종료 시 "회의실 체크인"으로 상태 변경
- 회의 임의 종료 시 현재 회의 종료 (회색 처리)
- 회의 임의 종료 취소 시 종료 취소 (파랑 처리)

### 사용법

- 자동으로 회의 시작, 종료 시에 하단 버튼에 상태가 반영되며, 필요시 버튼 클릭으로 종료, 재시작이 가능하다.

### 드제이 2층 서버 세팅

- 파일 경로: /usr/local/referenceRoom/RoomWatcher/roomwatcher
- 부팅시 자동 실행
- 수동 실행 명령어: docker run -d --name room-watcher-con --restart always -p 3000:80 room-watcher
- git 주소: https://github.com/YumStoneSteak/RoomWatcher.git

### 실행 및 빌드 명령어

- 개발 실행 : npm start
- 빌드 : npm run build

### 기술 스택

- React

### Git Commit Convention

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Docs : 문서 수정
- Style : 코드 포매팅, 세미콜론 누락, 코드 변경이 없는 경우
- Refactor : 코드 리팩토링
- Test : 테스트 코드, 리팩토링 테스트 코드 추가
- Chore : 빌드 업무 수정, 패키지 매니저 수정

**Convention Example**

    (Summary)
    Feat: 예약 리스트 추가

    (Description)
    :Detailed Notes:
    - map을 이용한 리스트 추가

### 코드 구조

- pages
  - Schedule : 메인
- components
  - Date : 날짜 표시, 변경
  - Time : 시간표, 일정 표시
  - header
    - RoomName : 회의실 표시, 변경
  - footer
    - StateBtn : 회의 상태 표시, 변경
- styles
  - cssReset : css 초기화
  - style : 전역 css
  - DateBtnAni : 날짜 변경 화살표 애니메이션
- utils
  - constants : 상수, ROOM_TYPE 설정
  - dummyDate : 예시 데이터 저장
  - useInterval : 인터벌 커스텀훅
  - useSwipe : 스와이프 동작
