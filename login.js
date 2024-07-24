var form = document.querySelector("form");
var email = document.getElementById("email");
var contact = document.getElementById("contact");
var password = document.getElementById("password");

var payload = {
  email: "",
  password: "",
  contact
};

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
