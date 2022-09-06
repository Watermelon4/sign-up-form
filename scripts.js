const userInputs = document.getElementsByClassName("user-input");
const passwordDiv = userInputs[4];
const confirmPasswordDiv = userInputs[5];

// not real, just for icons
for (let i = 0; i < 3; i++) {
  userInputs[i].addEventListener("change", checkValid);
};

/**
 * Toggles validity icons based on client-side validity.
 */
function checkValid() {
  if (this.validity.valid == true) {
    enableCheckMark(this);
  } else {
    enableCrossMark(this);
  };
};

/**
 * Toggles the icon states to have the check mark visible and the cross mark 
 * hidden.
 */
function enableCheckMark(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[1].style.visibility = "hidden"; // set cross hidden
  icons.children[0].style.visibility = "visible"; // set check visible
}

/**
 * Toggles the icon states to have the cross mark visible and the check mark 
 * hidden.
 */
function enableCrossMark(inputField) {
  const icons = inputField.nextElementSibling;
  icons.children[0].style.visibility = "hidden"; // set cross hidden
  icons.children[1].style.visibility = "visible"; // set check visible
}