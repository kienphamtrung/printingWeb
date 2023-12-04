const fileInput = document.getElementById('file-input');

const fileInputLabel = document.getElementById(
  'file-input-label',
);

fileInput.addEventListener('change', () => {
  if (fileInput.value === '') {
    fileInputLabel.innerHTML = 'Choose a file';
  } else {
    const realPathArray = fileInput.value.split('\\');

    fileInputLabel.innerHTML =
      realPathArray[realPathArray.length - 1];
  }
});

document.getElementById('returnButton').addEventListener('click', function() {
  window.location.href = 'printingPage.html';
});
