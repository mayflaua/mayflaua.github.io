function checked(item) {
  if (item.classList.contains("nav-tree-content__item_selected")) {
    return true;
  }
  else {
    return false;
  }
}

let reactItem = document.querySelector(".nav-tree-content__item_react");
let htmlItem = document.querySelector(".nav-tree-content__item_html");
let cssItem = document.querySelector(".nav-tree-content__item_css");
let vueItem = document.querySelector(".nav-tree-content__item_vue");
let angularItem = document.querySelector(".nav-tree-content__item_angular");
let flutterItem = document.querySelector(".nav-tree-content__item_flutter");

reactItem.addEventListener("click", function() {
  reactItem.classList.toggle("nav-tree-content__item_selected");
  reactItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});
htmlItem.addEventListener("click", function() {
  htmlItem.classList.toggle("nav-tree-content__item_selected");
  htmlItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});
cssItem.addEventListener("click", function() {
  cssItem.classList.toggle("nav-tree-content__item_selected");
  cssItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});
vueItem.addEventListener("click", function() {
  vueItem.classList.toggle("nav-tree-content__item_selected");
  vueItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});
angularItem.addEventListener("click", function() {
  angularItem.classList.toggle("nav-tree-content__item_selected");
  angularItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});
flutterItem.addEventListener("click", function() {
  flutterItem.classList.toggle("nav-tree-content__item_selected");
  flutterItem.children[1].classList.toggle("nav-tree-content__checkbox_selected");
});