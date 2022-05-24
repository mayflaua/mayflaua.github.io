burger = document.querySelector(".burger");
content = document.querySelector("main");
menu = document.querySelector(".header-nav");

burger.addEventListener("click", function() {
  content.classList.toggle("invisible");
  menu.classList.toggle("active");
  burger.classList.toggle("closing");
})
