const passwordField = document.querySelector(".password input");
const showPasswordBtn = document.querySelector(".password i");
let showPassword = false;

// showPasswordBtn.addEventListener("mousedown", () => {
//   if (!showPassword) {
//     showPassword = true;
//     passwordField.type = "password";
//     showPasswordBtn.classList.replace("fa-eye", "fa-eye-slash");
// } else {
//     showPassword = false;
//     passwordField.type = "text";
//     showPasswordBtn.classList.replace("fa-eye-slash", "fa-eye");
//   }
//   passwordField.focus();
// });


showPasswordBtn.addEventListener("mouseup", () => {
    showPassword = true;
    passwordField.type = "password";
    showPasswordBtn.classList.replace("fa-eye", "fa-eye-slash");
    passwordField.focus();
});

showPasswordBtn.addEventListener("mousedown", () => {
    showPassword = false;
    passwordField.type = "text";
    showPasswordBtn.classList.replace("fa-eye-slash", "fa-eye");
    passwordField.focus();
});