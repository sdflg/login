document.getElementById('signup-btn').addEventListener('click', function() {
    window.open('signup.html', '_blank', 'width=500,height=600');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 로그인 로직 구현 (예: alert)
    alert('로그인 되었습니다!');
});
