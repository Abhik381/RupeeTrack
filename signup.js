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
 
 form.addEventListener("submit",async function(e){
   e.preventDefault();
   email.value = "";
   contact.value = "";
   password.value = "";
  var data = await axios.post("https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.min.js/users/create", payload);
  console.log(data.config)
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
