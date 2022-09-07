const userInputs = document.getElementsByClassName("user-input");
const password = userInputs[4];
const confirmPassword = userInputs[5];

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

  if (this.value == "") {
    hideIcons(this)
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
};

/**
 * Toggles the icon states to have the cross mark visible and the check mark 
 * hidden.
 * @param {object} inputField 
 */
function enableCrossMark(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[0].style.visibility = "hidden"; // set cross hidden
  icons.children[1].style.visibility = "visible"; // set check visible
};

/**
 * Sets visibility of both icons to hidden.
 * @param {object} inputField 
 */
function hideIcons(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[0].style.visibility = "hidden"; // set cross hidden
  icons.children[1].style.visibility = "hidden"; // set check hidden
};

function compareToPassword() {
  if (confirmPassword.validity.valid == true) {
    if (confirmPassword.value == "") {
      hideIcons(confirmPassword);
    }
    else if(password.value == "") {
      enableCrossMark(confirmPassword);
    }
    else if(password.value == confirmPassword.value) {
      enableCheckMark(confirmPassword);
    }
    else {
      enableCrossMark(confirmPassword);
    };
  }
  else if (confirmPassword.value == "") {
    hideIcons(confirmPassword)
  }
  else {
    enableCrossMark(confirmPassword)
  };
};

function compareToConfirm() {
  if (password.value == confirmPassword.value) {
    enableCheckMark(confirmPassword);
  }
  else if (confirmPassword.value == "") {
    hideIcons(confirmPassword);
  }
  else {
    enableCrossMark(confirmPassword);
  };
};

for (let i = 0; i < 6; i++) {
  userInputs[i].addEventListener("input", checkValid);
};
confirmPassword.addEventListener("input", compareToPassword);
password.addEventListener("input", compareToConfirm);
