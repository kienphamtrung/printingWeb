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
localStorage.setItem("numberOfAvailablePages", 10); // Replace 10 with the actual value

  // Function to update the content based on the value in local storage
  function updateAvailablePagesText() {
    const availablePagesTextElement = document.getElementById("availablePagesText");
    const numberOfAvailablePages = localStorage.getItem("numberOfAvailablePages");

    // Update the content with the bold text and the variable value
    availablePagesTextElement.innerHTML = `Number of available pages: <strong>${numberOfAvailablePages}</strong>`;
  }

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
  updateAvailablePagesText();

}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";

  // Clear previous error messages when closing the modal
  clearErrorMessages();
}

function clearErrorMessages() {
  // Remove error messages next to each input field
  const errorContainers = document.querySelectorAll(".error-container");
  errorContainers.forEach(container => container.innerHTML = "");
}

function submitForm() {
  // Clear previous error messages
  clearErrorMessages();

  // Check if all required fields are filled
  const printerID = document.getElementById("printerID");
  const inputPages = document.getElementById("inputPages");
  const pageSize = document.getElementById("pageSize");
  const copies = document.getElementById("copies");
  const layouts = document.getElementById("layouts");

  if (!printerID.value) {
    displayErrorMessage(printerID, "Please enter Printer ID.");
  }

  // if (!inputPages.value) {
  //   displayErrorMessage(inputPages, "Please enter Input Pages.");
  // }

  if (!pageSize.value) {
    displayErrorMessage(pageSize, "Please select Page Size.");
  }

  if (!copies.value) {
    displayErrorMessage(copies, "Please enter the number of Copies.");
  }

  // if (!layouts.value) {
  //   displayErrorMessage(layouts, "Please select Layouts.");
  // }

  // Check if there are any error messages
  const errorContainers = document.querySelectorAll(".error-container");
  const hasErrors = Array.from(errorContainers).some(container => container.innerHTML !== "");

  if (!hasErrors) {
    document.getElementById("printConfirmationModal").style.display = "block";
    closeModal();

    document.querySelector(".overlay").style.display = "block";
  }
}

function displayErrorMessage(inputElement, message) {
  // Create and append an error message next to the input field
  const errorContainer = document.createElement("div");
  errorContainer.className = "error-container";
  errorContainer.style.color = "red"; 

  errorContainer.innerHTML = message;
  
  inputElement.parentNode.appendChild(errorContainer);
}

function handleInputPagesChange() {
  const selectElement = document.getElementById("inputPagesSelect");
  const otherInput = document.getElementById("inputPagesOther");

  if (selectElement.value === "other") {
    // If "Other" is selected, show the input field
    otherInput.style.display = "inline-block";
    otherInput.required = true;
  } else {
    // If another option is selected, hide the input field
    otherInput.style.display = "none";
    otherInput.required = false;
  }
}

function closePrintConfirmation() {
  // Close the print confirmation modal
  document.getElementById("printConfirmationModal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";

  // Clear previous error messages when closing the main modal
  clearErrorMessages();
  window.location.href = 'printingPage.html';
  // Additional logic for switching to other pages goes here
  // For example, you can use window.location.href to navigate to another page
}