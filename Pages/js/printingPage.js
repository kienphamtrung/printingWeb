const loginLink = document.querySelector('.split.home');
console.log(localStorage.getItem('name'));
if(localStorage.getItem('isLoggedIn') === 'true'){
loginLink.textContent = localStorage.getItem('name');
}

document.getElementById('printing').addEventListener('click', function() {
    window.location.href = 'print.html';
  });
  
  document.getElementById('buying').addEventListener('click', function() {
    window.location.href = 'buyPage.html';
  });
  