var firstError = document.getElementById("first-error");
var lastError = document.getElementById("last-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var submitError =  document.getElementById("submit-error");

function validateFirst(){
    var  FirstName = document.getElementById("first").value; 
    if(FirstName.length == 0) {
        firstError.innerHTML = " First Name required!";
        return false
    }
    if(!FirstName.match(/[A-Za-z]/)){
        firstError.innerHTML ="Enter name!";
        return false 
    }
    firstError.innerHTML ="";
   return true
    
}

function validateLast(){
    var  LastName = document.getElementById("last").value; 
    if(LastName.length == 0) {
        lastError.innerHTML = "Last Name required!";
        return false
    }
    if(!LastName.match(/[A-Za-z]/)){
        lastError.innerHTML ="input name!";
        return false 
    }
    lastError.innerHTML ="";
   return true
    
}

function validateEmail(){
    var  email = document.getElementById("mail").value; 
       if(email.length == 0){
        emailError.innerHTML = "Email required!";
        return false;
       }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "invaild email!";
         return false; 
    }
    
        emailError.innerHTML = "";
        return true;
    
   
}
function validatePassword(){
    var  password = document.getElementById("password").value; 
    if(password.length == 0) {
        passwordError.innerHTML = "Password required!";
        return false
    }
     if(password.length < 6){
        passwordError.innerHTML ="Weak!";
        return false
    }  
    passwordError.innerHTML ="";
        return true
    
}

function validateForm(){
    if(!validateFirst() || !validateLast() || !validateEmail() || !validatePassword()) {
        submitError.innerHTML = "pls Fill Form!"
        return false;
    }
}

