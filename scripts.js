const userInputs = document.getElementsByClassName("user-input");
const passwordDiv = userInputs[4];
const confirmPasswordDiv = userInputs[5];

// not real, just for icons
for (let i = 0; i < 3; i++) {
  userInputs[i].addEventListener("change", checkValid);
};
// comparison validation
// confirmPasswordInput.addEventListener("change", comparePassword);

// function comparePassword() {
//   if (passwordInput.value == confirmPasswordInput.value) {
//     confirmPasswordInput.validity.patternMismatch = false;
//     confirmPasswordCrossMark.style.visibility = "hidden";
//     confirmPasswordCheckMark.style.visibility = "visible";
//     passwordInput.validity.patternMismatch = false;
//     passwordCrossMark.style.visibility = "hidden";
//     passwordCheckMark.style.visibility = "visible";
//   } else {
//     confirmPasswordInput.validity.patternMismatch = true;
//     confirmPasswordCheckMark.style.visibility = "hidden";
//     confirmPasswordCrossMark.style.visibility = "visible";
//     passwordInput.validity.patternMismatch = true;
//     passwordCheckMark.style.visibility = "hidden";
//     passwordCrossMark.style.visibility = "visible";
//   };
// };

function checkValid() {
  let icons = this.nextElementSibling;
  if (this.validity.valid == true) {
    icons.children[1].style.visibility = "hidden"; // set cross hidden
    icons.children[0].style.visibility = "visible"; // set check visible
  } else {
    icons.children[0].style.visibility = "hidden"; // set check hidden
    icons.children[1].style.visibility = "visible"; // set cross visible
  };
};