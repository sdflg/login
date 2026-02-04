document.getElementById('btn-signup-complete').addEventListener('click', function() {
    const id = document.getElementById('signup-id').value;
    const pw = document.getElementById('signup-pw').value;
    const pwConfirm = document.getElementById('signup-pw-confirm').value;

    if (!id || !pw || !pwConfirm) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    if (pw !== pwConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    alert('가입되었습니다!');
    // 실제 서버 연동 시에는 여기에 데이터 전송 로직 추가
    window.close(); // 회원가입 완료 후 창 닫기
});

document.getElementById('btn-goto-login').addEventListener('click', function() {
    window.close(); // 현재 창 닫기
    // 또는 window.opener.location.href = 'index.html'; // 부모 창 리다이렉트
});