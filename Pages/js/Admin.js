document.getElementById('managing').addEventListener('click', function() {
    window.location.href = 'printerPage.html';
  });
  
  document.getElementById('AdminHistory').addEventListener('click', function() {
    window.location.href = 'AdminHistory.html';
  });
  document.getElementById('setting').addEventListener('click', function() {
    window.location.href = 'settingPage.html';
  });
const loginLink = document.querySelector('.split.home');
console.log(localStorage.getItem('name'));
if(localStorage.getItem('isLoggedIn') === 'true'){
loginLink.textContent = localStorage.getItem('name');
}