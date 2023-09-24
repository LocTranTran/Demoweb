var isLoggedIn = false; // Biến lưu trạng thái đăng nhập
var isRedirecting = false; // Biến kiểm tra xem đã chuyển hướng trang hay chưa

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Kiểm tra email và mật khẩu
  if (email === 'tran26122003@gmail.com' && password === '12345') {      
    // Chuyển hướng đến trang "main.html"
    redirectToMainPage();
  } else {
    alert('Email hoặc mật khẩu không đúng');
  }
}

function redirectToMainPage() {
  if (!isRedirecting) {
    isRedirecting = true; // Đánh dấu đang chuyển hướng trang
    isLoggedIn = true; // Đánh dấu đã đăng nhập
    window.location.href = '../main/Main.html';
  }
}

function checkout() {
  if (isLoggedIn) {
    // Thực hiện các hoạt động liên quan đến thanh toán
    // Ví dụ: hiển thị thông báo, chuyển hướng trang, v.v.
    alert('Đã thực hiện thanh toán');
  } else {
    alert('Vui lòng đăng nhập trước khi thanh toán');
    // Hoặc chuyển hướng đến trang đăng nhập
    window.location.href = '../Login/login.html';
  }
}