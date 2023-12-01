document.addEventListener("DOMContentLoaded", function () {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let btnSignup = document.querySelector(".btn-signup");
    let btnLogin = document.querySelector(".btn-login");
  
    btnSignup.addEventListener("click", (e) => {
      e.preventDefault();
      let user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      let json = JSON.stringify(user);
      if (!username.value || !email.value || !password.value) {
        alert("Please enter entire information");
      } 
      else {
      if(password.value != confirmPassword.value){
        alert("Wrong confirm password");
      }
      else {
        localStorage.setItem(username.value, json);
        alert("dang ky thanh cong");
      }
    }
  });
  });
  