const loginLink = document.querySelector('.split.home');
console.log(localStorage.getItem('name'));
if(localStorage.getItem('isLoggedIn') === 'true'){
loginLink.textContent = localStorage.getItem('name');
}

document.getElementById('printing').addEventListener('click', function() {
    // Replace 'otherpage.html' with the path to the page you want to redirect to
    window.location.href = 'print.html';
  });
  