let name = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");

flag = 1;

function validateSignup(){
    if(name.value == ""){
        document.getElementById("nameError").innerHTML = "Name is empty"
        flag = 0;
    }else if(name.value.length < 3){
        document.getElementById("nameError").innerHTML = "Name require mini 3 char"
        flag = 0;
    }else{
        document.getElementById("nameError").innerHTML = ""
        flag = 1;
    }
    
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "Username is empty";
        flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "Username require mini 3 char";
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(email.value == ""){
        document.getElementById("emailError").innerHTML = "Email is empty";
        flag = 0;
    }else if(email.indexOf('@') <= 0){
        document.getElementById("emailError").innerHTML = "Invalid @ position";
        flag = 0;
    }else{
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    }else if(password.value.length < 8){
        document.getElementById("passError").innerHTML = "Password require mini 8 char";
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }

    if (checkbox.checked == false){
        document.getElementById("checkboxError").innerHTML = "Please select this checkbox"
        flag = 0;
    }else{
        document.getElementById("checkboxError").innerHTML = "";
        flag = 1;
    }

    if(flag){
        return true;
    }else{
        return false;
    }
}