let formData = [];

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let errorMessage = document.getElementById("error-message");

  if (name === "" || email === "" || password === "") {
    errorMessage.textContent = "Please fill out all fields.";
  } else {
    errorMessage.textContent = "";

    // Store form data in an object
    let formDataItem = {
      name: name,
      email: email,
      password: password,
    };

    // Add the object to the array
    formData.push(formDataItem);

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Refresh the table
    displayDataInTable();
  }

  return false; // Prevent form submission
}

function displayDataInTable() {
  let tableBody = document.querySelector("#dataTable tbody");

  // Clear the existing table rows
  tableBody.innerHTML = "";

  // Populate the table with data from the array
  formData.forEach(function (item, index) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = item.name;
    cell2.textContent = item.email;
    cell3.textContent = item.password;

    // Create a button to remove the row
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeRow(index);
    };

    cell4.appendChild(removeButton);
  });
  function removeRow(index) {
    if (index >= 0 && index < formData.length) {
      // Remove the row from the table
      formData.splice(index, 1);
      displayDataInTable();
    }
  }
}
