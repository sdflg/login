
// controllers/authController.js
import User from '../models/user.js';

document.addEventListener("DOMContentLoaded", () => {
    const user = new User();

    if (document.getElementById('btn-login')) {
        document.getElementById('btn-login').addEventListener('click', () => {
            const id = document.getElementById('login-id').value;
            const pw = document.getElementById('login-pw').value;

            if (!user.isValidLogin(id, pw)) {
                alert('아이디와 비밀번호를 입력해주세요.');
                return;
            }

            alert(`로그인 시도: ID - ${id}, PW - ${pw}`);
        });
    }

    if (document.getElementById('btn-signup')) {
        document.getElementById('btn-signup').addEventListener('click', () => {
            window.open('signup.html', '_blank', 'width=600,height=700');
        });
    }

    if (document.getElementById('btn-signup-complete')) {
        document.getElementById('btn-signup-complete').addEventListener('click', () => {
            const id = document.getElementById('signup-id').value;
            const pw = document.getElementById('signup-pw').value;
            const pwConfirm = document.getElementById('signup-pw-confirm').value;

            const validation = user.isValidSignup(id, pw, pwConfirm);
            if (!validation.valid) {
                alert(validation.message);
                return;
            }

            alert('가입되었습니다!');
            window.close();
        });
    }

    if (document.getElementById('btn-goto-login')) {
        document.getElementById('btn-goto-login').addEventListener('click', () => {
            window.close();
        });
    }
});
