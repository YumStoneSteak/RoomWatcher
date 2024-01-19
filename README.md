# Dejay 회의실 예약 관제 뷰어

### 기능

- 회의실명 클릭 시 회의실 변경
- 날짜 클릭 시 오늘 날짜로 변경
- 날짜 좌우 영역 클릭 시 날짜 이동 가능
- 시간 영역 스와이프 시 날짜 변경
- 당월을 넘어가는 날짜 이동 제한
- 지난 회의 회색 처리
- 현재 회의 파랑 처리
- 다가올 회의 하얀색 처리
- 회의 시작 시 "회의 중"으로 상태 변경
- 회의 종료 시 "회의실 체크인"으로 상태 변경
- 회의 임의 종료 시 현재 회의 종료 (회색 처리)
- 회의 임의 종료 취소 시 종료 취소 (파랑 처리)

### 실행 및 빌드 명령어

- 개발 실행 : npm start
- 빌드 : npm run build

### 기술스택

- React

### Git Commit Convention

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Docs : 문서 수정
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- Refactor : 코드 리펙토링
- Test : 테스트 코드, 리펙토링 테스트 코드 추가
- Chore : 빌드 업무 수정, 패키지 매니저 수정

**Convention Example**

    (Summary)
    Feat: 예약 리스트 추가

    (Description)
    :Detailed Notes:
    - map을 이용한 리스트 추가

### 코드 구조

- pages
  - Schedule : 메인 부분
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
  - DateBtnAni : 날짜 변경 화살표 에니메이션
- utils
  - dummyDate : 예시 데이터 저장
  - useInterval : 인터벌 커스텀훅
  - useSwipe : 스와이프 동작
