document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'Admin.html';
  });
  function openModal() {
    document.getElementById('addPrinterModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('addPrinterModal').style.display = 'none';
  }

  function addPrinter() {
    // Get form values
    var printerID = document.getElementById('printerID').value;
    var queueStatus = document.getElementById('queueStatus').value;
    var job = document.getElementById('job').value;
    var location = document.getElementById('location').value;
    var status = document.getElementById('status').value;

    // Get the table body
    var tableBody = document.querySelector('tbody');

    // Create a new row
    var newRow = document.createElement('tr');

    // Populate the new row with form values
    var printerData = [printerID, queueStatus, job, location];

    for (var i = 0; i < printerData.length; i++) {
        var cell = document.createElement('td');
        cell.textContent = printerData[i];
        newRow.appendChild(cell);
    }

    // Create a new cell for the status dropdown
    var statusCell = document.createElement('td');

    // Create the select element
    var select = document.createElement('select');
    select.className = 'status-select';

    // Create options for the select element
    var enableOption = document.createElement('option');
    enableOption.value = 'enable';
    enableOption.textContent = 'Enable';

    var disableOption = document.createElement('option');
    disableOption.value = 'disable';
    disableOption.textContent = 'Disable';

    // Set the default selected option based on the form value
    if (status === 'enable') {
        enableOption.selected = true;
    } else {
        disableOption.selected = true;
    }

    // Append options to the select element
    select.appendChild(enableOption);
    select.appendChild(disableOption);

    // Append the select element to the status cell
    statusCell.appendChild(select);

    // Append the status cell to the new row
    newRow.appendChild(statusCell);

    // Add the new row to the table
    tableBody.appendChild(newRow);

    // Close the modal
    closeModal();

    // Prevent form submission
    return false;
}