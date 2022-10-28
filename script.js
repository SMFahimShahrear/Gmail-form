let password_show_checkbox = document.querySelector("#checkbox-show-pass");
let password_field = document.querySelector(".password");
let mail_field = document.querySelector(".mail");
form_transition = document.querySelectorAll(".form-transaction");

console.log(form_transition);
function password_visibility(e){
    if(e.checked == true){
        password_field.type = "text";
        // document.querySelector(".main-title").innerText = 'Yoooo';
    }
    

    else{
        password_field.type = "password";
    }
}

// validation
function validation(){
    if(mail_field.value == ''){
        mail_field.classList.add("border-red");
        // mail_field.style.borderColor = "red";
    }


    if(password_field.value == ''){
        password_field.classList.add("border-red");
    }
    document.querySelector(".main-title").innerText = 'Yoooo';
    return false;
}

