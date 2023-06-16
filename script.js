const body = document.querySelector("body");
const passwordField = document.querySelector(".password input");
const usernameField = document.querySelector(".username");
const showPasswordBtn = document.querySelector(".password i");
const loginBtn = document.querySelector("button[type='submit']");
let showPassword = false;
let users = [];

function User(username, password) {
  this.username = username;
  this.password = password;
}

users.push(new User("John22", "Password"));
users.push(new User("admin", "admin"));

if (body.id === "login-form") {
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

  loginBtn.addEventListener("click", () => {
    users.forEach((el) => {
      let correctData = false;

      if (
        passwordField.classList.contains("incorrect-data") ||
        usernameField.classList.contains("incorrect-data")
      ) {
        passwordField.classList.remove("incorrect-data");
        usernameField.classList.remove("incorrect-data");
        document.querySelector(".show-password").style.background =
          "var(--InputBgg)";
      }

      if (el.username !== usernameField.value) {
        usernameField.classList.add("incorrect-data");
        passwordField.classList.add("incorrect-data");
        document.querySelector(".show-password").style.background =
          "var(--incorrectDataBg)";
        correctData = false;
      } else {
        if (el.password !== passwordField.value) {
          passwordField.classList.add("incorrect-data");
          correctData = false;
        } else {
          correctData = true;
        }
      }

      if (correctData) {
        loginBtn.classList.add("correctLogin");
        loginBtn.innerText = "Correct";
        setTimeout(() => {
          document.location.href = "app.html";
          loginBtn.classList.remove("correctLogin");
          loginBtn.innerText = `Login`;
        }, 700);
      }
    });
  });
}

if (body.id === "app") {
    document.querySelector("#back-Btn").addEventListener("click", () => history.back())
}