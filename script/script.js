// When user clicks submit button, a modal box will appear to confirm receipt of submission
// user can click the button or the X icon in modal box to escape
// the inputs clear from the form

// Get the modal
const modal = document.getElementById("modalBox");
// Get the button that opens the modal
const button = document.getElementById("submitButton");
// Get the button that closes the modal
const closeButton = document.getElementById("buttonClose");
// Get the X button in the modal that also closes the modal 
const closeXButton = document.querySelector("span");

// Get the input fields
const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const inputEmail = document.querySelector('input[type="email"]');
// console.log(inputEmail);
const textArea = document.querySelector('#message');

// When the user clicks on the button, open the modal
button.onclick = function(e) {
  e.preventDefault();
  modal.style.visibility = "visible";
}

// When the user clicks on the modal button, close the modal
closeButton.onclick = function () {
  modal.style.visibility = "hidden";
  inputName.value = "";
  inputEmail.value = "";
  textArea.value = "";
};

// When the user clicks on the X button in modal, close the modal
closeXButton.onclick = function () {
  modal.style.visibility = "hidden";
  inputName.value = "";
  inputEmail.value = "";
  textArea.value = "";
};


//

// Trying to only allow the form submit if the fields contain content:

// const input = document.querySelector('input');

// const isEmpty = (str) => !str.trim().length;

// button.onclick = function (e) {
//   e.preventDefault();

//   if (input.trim().length !== 0) {
//     modal.style.visibility = "visible";
//   }
// };