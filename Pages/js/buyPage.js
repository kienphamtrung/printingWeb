document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'printingPage.html';
  });
  // const numberOfAvailablePages = localStorage.getItem("numberOfAvailablePages");

  if(localStorage.getItem("numberOfAvailablePages") == null){
    console.log(localStorage.getItem("numberOfAvailablePages"));
    localStorage.setItem("numberOfAvailablePages", 0); 
    // numberOfAvailablePages = localStorage.getItem("numberOfAvailablePages");
    availablePage.innerHTML = `Số trang in hiện có: <strong>${localStorage.getItem("numberOfAvailablePages")}</strong>`;
  }
  else{
    console.log(localStorage.getItem("numberOfAvailablePages"));

    availablePage.innerHTML = `Số trang in hiện có: <strong>${localStorage.getItem("numberOfAvailablePages")}</strong>`;
  }

  function accept() {
    var numberInput = document.getElementById('numbers').value;
    console.log(numberInput);
    if(numberInput){
      window.open("https://bkpay.hcmut.edu.vn/bkpay/home.action");
      var numberOfAvailablePages = localStorage.getItem("numberOfAvailablePages");
      localStorage.setItem("numberOfAvailablePages", parseInt(numberOfAvailablePages) + parseInt(numberInput)); 
      availablePage.innerHTML = `Số trang in hiện có: <strong>${localStorage.getItem("numberOfAvailablePages")}</strong>`;

    }

  }