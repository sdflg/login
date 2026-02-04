# 프로젝트 블루프린트

## 개요

HTML, CSS, JavaScript를 사용하여 Firebase Authentication 및 **Realtime Database**와 연동된 로그인/회원가입 시스템을 단일 `index.html` 파일 내에 구축합니다.

## 기능

*   **Firebase 연동**:
    *   Firebase 앱을 초기화하고 Firebase Authentication (`getAuth`) 및 **Realtime Database (`getDatabase`)**를 설정합니다.
    *   ES 모듈을 사용하여 Firebase SDK를 가져옵니다.
*   **회원가입 및 데이터 저장**:
    *   모달 대화상자에서 이메일과 비밀번호를 입력받습니다.
    *   Firebase의 `createUserWithEmailAndPassword` 함수로 신규 사용자를 생성합니다.
    *   **계정 생성 성공 시, `users/{uid}` 경로에 사용자의 이메일과 가입 시각(`createdAt`)을 Realtime Database에 저장합니다.**
*   **로그인**:
    *   메인 뷰에서 이메일과 비밀번호를 입력받습니다.
    *   Firebase의 `signInWithEmailAndPassword` 함수를 사용하여 사용자를 인증합니다.
*   **로그아웃**:
    *   로그인 성공 시 '로그아웃' 버튼이 표시됩니다.
    *   Firebase의 `signOut` 함수를 사용하여 로그아웃을 처리합니다.
*   **UI**:
    *   로그인 상태에 따라 UI가 동적으로 변경됩니다.
    *   사용자 피드백을 위한 알림창(alert)을 제공합니다.

## 현재 작업

Firebase Realtime Database 기능을 추가하여 회원가입 시 사용자 정보를 데이터베이스에 저장합니다.

### 할 일

1.  `firebase-database.js` 및 관련 함수(`getDatabase`, `ref`, `set`)를 import 합니다.
2.  `getDatabase`를 호출하여 데이터베이스 인스턴스를 초기화합니다.
3.  `createUserWithEmailAndPassword` 성공 콜백 내부에 Realtime Database에 데이터를 저장하는 로직을 추가합니다.
4.  데이터베이스 저장 성공/실패에 대한 사용자 피드백(alert)을 구현합니다.
