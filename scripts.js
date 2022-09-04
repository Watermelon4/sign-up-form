/*  when character entered in field
      call validation function
      if conditions met
        set valid to true
        check visible
      else
        set invalid
        cross visible

    validation()
      separate for each field
      check both password fields on confirm
*/

const signupInputs = document.getElementsByClassName("input-and-icon");

const passwordDiv = signupInputs[4];
const passwordInput = passwordDiv.querySelector("#password-input")
const passwordCheckMark = passwordDiv.querySelector("#check-mark")
const passwordCrossMark = passwordDiv.querySelector("#cross-mark")

const confirmPasswordDiv = signupInputs[5];
const confirmPasswordInput = confirmPasswordDiv.querySelector("#confirm-password-input")
const confirmPasswordCheckMark = confirmPasswordDiv.querySelector("#check-mark")
const confirmPasswordCrossMark = confirmPasswordDiv.querySelector("#cross-mark")

confirmPasswordInput.addEventListener("change", comparePassword)

function comparePassword() {
  if (passwordInput.value == confirmPasswordInput.value) {
    confirmPasswordInput.validity.patternMismatch = false;
    confirmPasswordCrossMark.style.visibility = "hidden"
    confirmPasswordCheckMark.style.visibility = "visible"
    passwordInput.validity.patternMismatch = false
    passwordCrossMark.style.visibility = "hidden"
    passwordCheckMark.style.visibility = "visible"
  } else {
    confirmPasswordInput.validity.patternMismatch = true
    confirmPasswordCheckMark.style.visibility = "hidden"
    confirmPasswordCrossMark.style.visibility = "visible"
    passwordInput.validity.patternMismatch = true
    passwordCheckMark.style.visibility = "hidden"
    passwordCrossMark.style.visibility = "visible"
  }
}
