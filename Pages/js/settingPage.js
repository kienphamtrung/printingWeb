document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'Admin.html';
  });

  document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Setting successfully!');
});
