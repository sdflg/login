document.getElementById('btn-login').addEventListener('click', function() {
    const id = document.getElementById('login-id').value;
    const pw = document.getElementById('login-pw').value;

    if (!id || !pw) {
        alert('아이디와 비밀번호를 입력해주세요.');
        return;
    }

    alert(`로그인 시도: ID - ${id}, PW - ${pw}`);
    // 실제 로그인 로직 (예: 서버로 데이터 전송)은 여기에 구현
});

document.getElementById('btn-signup').addEventListener('click', function() {
    window.open('signup.html', '_blank', 'width=600,height=700');
});
