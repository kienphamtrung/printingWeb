const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const loginLink = document.querySelector('.split.home');
console.log(isLoggedIn);
loginLink.textContent = isLoggedIn ? 'Logout' : 'Login';
var login = document.getElementById("loginLink");

loginLink.addEventListener("click", () => {
  if (isLoggedIn) {

    loginLink.textContent = 'Logout';
    loginLink.href = ""
    // localStorage.setItem('name', null);

    localStorage.setItem('isLoggedIn', false);
  } else {

    loginLink.textContent = 'Login';
    // localStorage.setItem('isLoggedIn', true);
  }
});
