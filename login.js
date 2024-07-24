var form = document.querySelector("form");
var email = document.getElementById("email");
var contact = document.getElementById("contact");
var password = document.getElementById("password");
var eye = document.querySelector(".eye");

var payload = {
  email: "",
  password: "",
  contact
};

var count = 0;

 email.addEventListener("input", function(e){
  payload.email =e.target.value;
 })
 contact.addEventListener("input", function(e){
   payload.contact = e.target.value;
 })
 password.addEventListener("input", function(e){
   payload.password = e.target.value;
 })
 
 form.addEventListener("submit", function(e){
   e.preventDefault();
   email.value = "";
   contact.value = "";
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
