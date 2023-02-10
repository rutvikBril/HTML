document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("add-modal").style.display = "block";
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("loc_name").value;
  var address = document.getElementById("loc_add").value;

  var location = { name: name, address: address };

  var locations = JSON.parse(localStorage.getItem("locations")) || [];
  console.log(locations);
  locations.push(location);
  localStorage.setItem("locations", JSON.stringify(locations));

  addLocationToTable(location);

  document.getElementById("add-modal").style.display = "none";
});

function addLocationToTable(location) {
  var tableBody = document.getElementById("location_list");
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = location.name;
  row.appendChild(nameCell);

  var addressCell = document.createElement("td");
  addressCell.textContent = location.address;
  row.appendChild(addressCell);

  tableBody.appendChild(row);
}

var storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
storedLocations.forEach(function (location) {
  addLocationToTable(location);
});

// const viewBtn = document.querySelector("#viewBtn");
// const popup = document.querySelector("#popup");
// const closePopupBtn = document.querySelector("#closePopupBtn");

// viewBtn.addEventListener("click", function () {
//   popup.style.display = "block";
//   const storedData = JSON.parse(localStorage.getItem("crud"));
//   if (storedData) {
//     document.querySelector("#name_veiw_data").value = storedData;
//     document.querySelector("#location_drcr_veiw_data").value = storedData;
//   }
// });

// closePopupBtn.addEventListener("click", function () {
//   popup.style.display = "none";
// });

// const deleteBtn = document.querySelector("#deleteBtn");
// const confirmationPopup = document.querySelector("#confirmationPopup");
// const yesBtn = document.querySelector("#yesBtn");
// const noBtn = document.querySelector("#noBtn");

// deleteBtn.addEventListener("click", function () {
//   confirmationPopup.style.display = "block";
// });

// yesBtn.addEventListener("click", function () {
//   confirmationPopup.style.display = "none";
//   localStorage.removeItem("crud");
//   // Remove the record from the table
// });

// noBtn.addEventListener("click", function () {
//   confirmationPopup.style.display = "none";
// });

// // edit button

// const editBtn = document.querySelector("#editBtn");
// const editPopup = document.querySelector("#editPopup");
// const saveBtn = document.querySelector("#saveBtn");
// const closeEditPopupBtn = document.querySelector("#closeEditPopupBtn");

// editBtn.addEventListener("click", function () {
//   editPopup.style.display = "block";
//   const storedData = JSON.parse(localStorage.getItem("crud"));
//   if (storedData) {
//     document.querySelector("#edit_name").value = storedData.arr;
//     document.querySelector("#edit_add").value = storedData.arr;
//   }
// });

// saveBtn.addEventListener("click", function () {
//   const recordData = {
//     edit_name: document.querySelector("#edit_name").value,
//     edit_add: document.querySelector("#edit_add").value,
//   };
//   localStorage.setItem("crud", JSON.stringify("crud"));
//   editPopup.style.display = "none";
//   // Update the record in the table
// });

// closeEditPopupBtn.addEventListener("click", function () {
//   editPopup.style.display = "none";
// });
