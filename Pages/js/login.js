let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(username.value);

  // let userAccount;
  console.log(user);
  let json = JSON.stringify(user);

  if (!username.value || !email.value || !password.value) {
    alert("Please fill entire information");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("Logged in successfully");
    let name = "name";
    localStorage.setItem(name, username.value);
    localStorage.setItem('isLoggedIn', true);

    console.log(username);

    // document.querySelector('.split.home').textContent = username.value;
    window.location.href = "homePage.html";
  } else {
    alert("Login failed! Check your information or maybe you have not register");
  }
});