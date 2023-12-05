const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const loginLink = document.querySelector('.split.home');
const PrintService = document.querySelector('.PrintService');

console.log(isLoggedIn);
loginLink.textContent = isLoggedIn ? 'Đăng xuất' : 'Đăng nhập';
var login = document.getElementById("loginLink");

loginLink.addEventListener("click", () => {
  if (isLoggedIn) {

    loginLink.textContent = 'Đăng xuất';
    loginLink.href = ""
    // localStorage.setItem('name', null);

    localStorage.setItem('isLoggedIn', false);
  } else {

    loginLink.textContent = 'Đăng nhập';
    // localStorage.setItem('isLoggedIn', true);
  }
});

PrintService.addEventListener("click", () => {
  if (isLoggedIn) {

    // PrintService.href = ""
    // localStorage.setItem('name', null);

    // localStorage.setItem('isLoggedIn', false);
  } else {

     PrintService.href = "login.html"
    // localStorage.setItem('isLoggedIn', true);
  }
});