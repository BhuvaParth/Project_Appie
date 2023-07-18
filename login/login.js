let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let flag = 1;

function validateLogin(){
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
