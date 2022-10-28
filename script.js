let password_show_checkbox = document.querySelector("#checkbox-show-pass");
let fname_field = document.querySelector(".f-name");
let lname_field = document.querySelector(".l-name");
let mail_field = document.querySelector(".mail");
let password_field = document.querySelector(".password");
let confirm_password_field = document.querySelector(".confirm-password");
let error = 0;
let data = "";

// form_transition = document.querySelectorAll(".form-transaction");

function password_visibility(e) {
  if (e.checked == true) {
    password_field.type = "text";
  } else {
    password_field.type = "password";
  }
}

// validation
function validation() {
  document.querySelector(".empty-field-alart-1").classList.add("hidden");
  document.querySelector(".empty-field-alart-2").classList.add("hidden");
  document.querySelector(".empty-field-alart-3").classList.add("hidden");
  document.querySelector(".empty-field-alart-6").classList.add("hidden");
  document.querySelector(".empty-field-alart-9").classList.add("hidden");
  fname_field.classList.remove("border-red");
  lname_field.classList.remove("border-red");
  mail_field.classList.remove("border-red");
  password_field.classList.remove("border-red");
  error = 0;

  if (fname_field.value == "" && lname_field.value == "") {
    fname_field.classList.add("border-red");
    lname_field.classList.add("border-red");
    document.querySelector(".empty-field-alart-1").classList.remove("hidden");
    error = 1;
  } else if (fname_field.value == "") {
    fname_field.classList.add("border-red");
    document.querySelector(".empty-field-alart-2").classList.remove("hidden");
    error = 1;
  } else if (lname_field.value == "") {
    lname_field.classList.add("border-red");
    document.querySelector(".empty-field-alart-3").classList.remove("hidden");
    error = 1;
  }

  if (mail_field.value == "") {
    mail_field.classList.add("border-red");
    document.querySelector(".empty-field-alart-4").classList.remove("hidden");
    document.querySelector(".mail-rule").classList.add("hidden");
    error = 1;
  }

  if (password_field.value == "") {
    password_field.classList.add("border-red");
    document.querySelector(".empty-field-alart-6").classList.remove("hidden");
    document.querySelector(".password-rule").classList.add("hidden");
    error = 1;
  }

  if (password_field.value.localeCompare(confirm_password_field.value) == -1) {  //passowrd match
    error = 1;
    document.querySelector(".empty-field-alart-9").classList.remove("hidden");
    document.querySelector(".password-rule").classList.add("hidden");
  }

  if (error == 1) {
    return false;
  } else {
    data =
      "pass:" +
      password_field.value +
      "|| fname:" +
      fname_field.value +
      "|| lname:" +
      lname_field.value +
      "||";
    localStorage.setItem(mail_field.value, data);
    console.log(localStorage.getItem(mail_field.value));
  }
}
