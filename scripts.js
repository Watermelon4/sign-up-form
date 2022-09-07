const userInputs = document.getElementsByClassName("user-input");
const password = userInputs[4];
const confirmPassword = userInputs[5];

for (let i = 0; i < 6; i++) {
  userInputs[i].addEventListener("change", checkValid);
};
password.addEventListener("change", comparePasswords)
confirmPassword.addEventListener("change", comparePasswords)

/**
 * Toggles validity icons based on client-side validity.
 */
function checkValid() {
  if (this.validity.valid == true) {
    enableCheckMark(this);
  } 
  else {
    enableCrossMark(this);
  };
};

/**
 * Toggles the icon states to have the check mark visible and the cross mark 
 * hidden.
 * @param {object} inputField 
 */
function enableCheckMark(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[1].style.visibility = "hidden"; // set cross hidden
  icons.children[0].style.visibility = "visible"; // set check visible
}

/**
 * Toggles the icon states to have the cross mark visible and the check mark 
 * hidden.
 * @param {object} inputField 
 */
function enableCrossMark(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[0].style.visibility = "hidden"; // set cross hidden
  icons.children[1].style.visibility = "visible"; // set check visible
}

/**
 * Sets visibility of both icons to hidden.
 * @param {object} inputField 
 */
function hideIcons(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[0].style.visibility = "hidden"; // set cross hidden
  icons.children[1].style.visibility = "hidden"; // set check hidden
}

/**
 * Controls icon visibility based on the password and confirm password fields.
 */
function comparePasswords() {
  checkValid()
  // both are blank
  if (confirmPassword.value == "" && password.value == "") {
    hideIcons(password)
    hideIcons(confirmPassword)
  }
  // both are matching
  else if (password.value == confirmPassword.value) {
    enableCheckMark(password)
    enableCheckMark(confirmPassword)
  }
  // confirm password field is empty
  else if (confirmPassword.value == "") {
    enableCheckMark(password)
  }
  // password field is empty
  else if (password.value == "") {
    hideIcons(password)
  }
  else {
    enableCrossMark(confirmPassword)
  }
}
