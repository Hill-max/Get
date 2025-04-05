const toggleCheckbox = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

if (toggleCheckbox) {
  toggleCheckbox.addEventListener("change", () => {
    passwordField.type = toggleCheckbox.checked ? "text" : "password";
  });
}
