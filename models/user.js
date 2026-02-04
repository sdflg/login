
// models/user.js

// 이 파일은 사용자 데이터 모델을 정의합니다.
// 지금은 간단한 예시이지만, 실제 애플리케이션에서는
// 데이터베이스와 상호작용하거나 더 복잡한 사용자 관련 로직을 포함할 수 있습니다.

class User {
    constructor(id, pw) {
        this.id = id;
        this.pw = pw;
    }

    // 로그인 유효성 검사
    isValidLogin(id, pw) {
        return id && pw;
    }

    // 회원가입 유효성 검사
    isValidSignup(id, pw, pwConfirm) {
        if (!id || !pw || !pwConfirm) {
            return { valid: false, message: '모든 필드를 입력해주세요.' };
        }
        if (pw !== pwConfirm) {
            return { valid: false, message: '비밀번호가 일치하지 않습니다.' };
        }
        return { valid: true };
    }
}
