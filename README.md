
# React 첫 개인 과제

### 메인 페이지
![스크린샷 2024-08-13 오후 8 15 12](https://github.com/user-attachments/assets/8e8c91f3-b60b-4fd0-85c1-ef4b5cf809b4)

### 국가 추가 페이지
![스크린샷 2024-08-13 오후 8 17 06](https://github.com/user-attachments/assets/9427fdaa-6134-40da-8ff8-dc79c9e3a417)

---

## 프로젝트 개요

- Goal : Olympic Medal Tracker 만들기 

### 메인 기능

- 제출 폼 UI 구현하기: 나라 이름과 금, 은, 동 메달 수를 입력할 수 있는 폼을 만듭니다.
- 메달 집계 CRUD 구현하기
  - Create: 새로운 나라와 그 나라가 획득한 메달 수를 추가합니다.
  - Read: 나라별 메달 집계 리스트를 보여줍니다.
  - Update: 기존에 추가된 나라의 메달 수를 수정할 수 있습니다.
  - Delete: 나라 정보를 삭제할 수 있습니다.

- 정렬: 메달 집계는 금메달 수를 기준으로 내림차순 정렬되어야 합니다.
 

### 필수 구현 사항

1. 나라 이름과 메달 수를 입력하고, [추가하기] 버튼을 클릭하면 메달 집계에 새로운 나라가 추가되고, input 필드는 다시 빈 값으로 바뀌도록 구성해주세요.
2. **업데이트 기능 구현하기**: 국가 이름과 메달 수를 입력하고, [업데이트] 버튼을 클릭하면 이미 추가된 국가의 메달 수를 수정합니다.
3. 메달 리스트는 금메달 수를 기준으로 내림차순 정렬하여 화면에 표시됩니다.
4. Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. **컴포넌트 구조는 자유롭게 구현해보세요.**
    - 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.


### 추가 도전 과제

1. 나라 이름을 입력했을 때 이미 등록된 국가라면 `alert` 메시지를 띄워 사용자에게 알립니다.
2. 입력된 국가가 등록되지 않은 경우 `alert` 메시지를 띄워 사용자에게 알립니다.
3. 금메달로만 순위를 결정하면 너무 섭섭하죠? 메달 총 개수도 함께 보여주도록 하고 금메달이 아닌, 획득한 메달 총 개수로 정렬을 할 수 있게 해봅시다.
4. 매번 어플리케이션을 새로고침 할 때마다 데이터가 다 날아가서 속상하죠? 로컬스토리지에 입력한 정보를 항상 업데이트 되게끔하고 메달 정보에 관한 useState 의 초기값을 항상 로컬스토리지에서 가져오도록 해보세요.

---

## 프로젝트 소개

### 배포 링크

<https://olympic-medal-tracker-mu.vercel.app/>

### 개발환경(기술)

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black">

<img src="https://camo.githubusercontent.com/9e30e8175154be99e32777c31d5854a0bab39e1caf6e3fa1ef6495d27366fc6f/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323130372f504e472f3531322f66696c655f747970655f7673636f64655f69636f6e5f3133303038342e706e67" width="30" height="30">

