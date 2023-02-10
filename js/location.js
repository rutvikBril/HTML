// document.getElementById("add-button").addEventListener("click", function () {
//   document.getElementById("add-modal").style.display = "block";
// });

// // Close modal when Cancel button is clicked
// document.querySelector("#close-btn").addEventListener("click", function () {
//   document.getElementById("add-modal").style.display = "none";
// });

// // Submit location form
// document.getElementById("myForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let locationName = document.getElementById("loc_name").value;
//   let address = document.getElementById("loc_add").value;

//   // Create a new record object
//   let newRecord = {
//     locationName: locationName,
//     address: address,
//   };

//   // Add new record to the location table
//   let tableBody = document.querySelector("#location_list tbody");
//   let newRow = document.createElement("tr");
//   newRow.innerHTML =
//     "<td>" +
//     newRecord.locationName +
//     "</td><td>" +
//     newRecord.address +
//     "</td><td><button  class='view-btn'><i class= 'fa fa-eye' aria-hidden=true></i></button><button class='edit-btn'><i class='fa fa-pencil' aria-hidden=true></button> <button class='delete-btn'><i class='fa fa-trash' aria-hidden=true></i></button> </td>";
//   tableBody.appendChild(newRow);

//   // Close modal
//   document.getElementById("add-modal").style.display = "none";
// });
// document
//   .getElementById("location_list")
//   .addEventListener("click", function (e) {
//     if (e.target.classList.contains("view-btn")) {
//       const locationRow = e.target.closest("tr");
//       const locationName = locationRow.querySelector("#loc_name").textContent;
//       const address = locationRow.querySelector("#loc_add").textContent;
//       document.getElementById("view-location-name").textContent = locationName;
//       document.getElementById("view-address").textContent = address;
//       document.getElementById("view-modal").style.display = "block";
//     }
//   });

// document.querySelectorAll(".close-btn").forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     document.querySelectorAll(".modal").forEach(function (modal) {
//       modal.style.display = "none";
//     });
//   });
// });

const addButton = document.getElementById("add-button");
const popup = document.getElementById("add-modal");
const form = document.getElementById("myForm");
const locationNameInput = document.getElementById("loc_name");
const addressInput = document.getElementById("loc_add");
const locationList = document.getElementById("location_list");
const viewPopup = document.querySelector("#popup");
const viewLocationForm = document.querySelector("#form");

addButton.addEventListener("click", function () {
  popup.style.display = "block";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const locationName = locationNameInput.value;
  const address = addressInput.value;

  const location = { locationName, address };
  addLocationToTable(location);

  locationNameInput.value = "";
  addressInput.value = "";
  popup.style.display = "none";
});

function addLocationToTable(location) {
  const row = document.createElement("tr");

  const locationNameCell = document.createElement("td");
  locationNameCell.textContent = location.locationName;
  row.appendChild(locationNameCell);

  const addressCell = document.createElement("td");
  addressCell.textContent = location.address;
  row.appendChild(addressCell);
  const actionCell = document.createElement("td");
  const viewBtn = document.createElement("button");
  viewBtn.textContent = "View";
  viewBtn.addEventListener("click", () => {
    viewPopup.style.display = "block";
    document.querySelector(".name_veiw_data").value = locationData[0];
    document.querySelector(".location_drcr_veiw_data").value = locationData[0];
  });
  actionCell.appendChild(viewBtn);
  row.appendChild(actionCell);

  locationList.appendChild(row);
}
function retrieveLocationData() {
  return [{ locationName: "Location 1", address: "address1" }];
}

const locationDataList = retrieveLocationData();
locationDataList.forEach((locationData) => {
  addLocationToTable(locationData);
});
