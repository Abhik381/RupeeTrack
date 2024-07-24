var menu_bar = document.querySelector(".menu-bar");
var menu_icon = document.querySelector(".menu");
var close_icon = document.querySelector(".close");

menu_icon.addEventListener("click", function() {
  menu_bar.classList.remove("hidden");
})

close_icon.addEventListener("click", function(){
  menu_bar.classList.add("hidden");
})
