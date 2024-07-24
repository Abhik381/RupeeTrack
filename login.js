var form = document.querySelector("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var eye = document.querySelector(".eye");

var payload = {
  email: "",
  password: ""
};

var count = 0;

 email.addEventListener("input", function(e){
  payload.email =e.target.value;
 })
 password.addEventListener("input", function(e){
   payload.password = e.target.value;
 })
 
 form.addEventListener("submit", function(e){
   e.preventDefault();
   email.value = "";
   password.value = "";
 })

eye.addEventListener("click", function(){
   if (count == 0) {
     eye.classList.remove("ri-eye-close-line");
     eye.classList.add("ri-eye-2-line");
     password.type = "text";
     count = 1;
   } else {
     eye.classList.remove("ri-eye-2-line");
     eye.classList.add("ri-eye-close-line");
     password.type = "password";
     count = 0;
   }
 })
