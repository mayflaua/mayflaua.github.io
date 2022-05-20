let profTab = document.querySelector(".aside-prof-info");
let persTab = document.querySelector(".aside-pers-info");
let hobbiesTab = document.querySelector(".aside-hobbies");

profTab.addEventListener("click", function() {
  switchProffesional();
  profTab.classList.add("aside-button_current");
  persTab.classList.remove("aside-button_current");
  hobbiesTab.classList.remove("aside-button_current");
});

persTab.addEventListener("click", function() {
  switchPersonal();
  persTab.classList.add("aside-button_current");
  profTab.classList.remove("aside-button_current");
  hobbiesTab.classList.remove("aside-button_current");
});

hobbiesTab.addEventListener("click", function() {
  switchHobbies();
  hobbiesTab.classList.add("aside-button_current");
  persTab.classList.remove("aside-button_current");
  profTab.classList.remove("aside-button_current");
});

let navTitle = document.querySelector(".nav-tree__title");

// aside buttons
function switchProffesional() {
  navTitle.textContent = "professional-info";
}

function switchPersonal() {
  navTitle.textContent = "personal-info";
}

function switchHobbies() {
  navTitle.textContent = "hobbies";
}


let bioFolder = document.querySelector(".nav-tree__bio");
let interestsFolder = document.querySelector(".nav-tree__interests");
let educationFolder = document.querySelector(".nav-tree__education");


bioFolder.addEventListener('click', function() {
  bioFolder.firstChild.classList.toggle("folder-arrow_opened");
  document.querySelector(".nav-tree__bio_childhood").classList.toggle("invisible");
  document.querySelector(".nav-tree__bio_present").classList.toggle("invisible");
});
interestsFolder.addEventListener('click', function() {
  interestsFolder.firstChild.classList.toggle("folder-arrow_opened");
  document.querySelector(".nav-tree__interests_code").classList.toggle("invisible");
  document.querySelector(".nav-tree__interests_tech").classList.toggle("invisible");
});
educationFolder.addEventListener('click', function() {
  educationFolder.firstChild.classList.toggle("folder-arrow_opened");
  document.querySelector(".nav-tree__education_school").classList.toggle("invisible");
  document.querySelector(".nav-tree__education_university").classList.toggle("invisible");
});


let contentText = document.querySelector(".content-window-text");
let tabTitle = document.querySelector(".content-tab");
let slider = document.querySelector(".content-window-slider");

function li(string) {
  return "<li class=\"content-window-text__stroke\">" + string + "</li>";

}

let childhood = li("childhood");
let present = li("present");
let code = li("code");
let tech = li("tech");
let school = li("school");
let university = li("university");

document.querySelector(".nav-tree-content").addEventListener("click", function(e) {
  
  function openTab() {
    tabTitle.style.visibility = "visible";
    contentText.style.visibility = "visible";
    slider.style.visibility = "visible";
  }

  if (e.target.classList.contains("nav-tree__bio_childhood")) {
    tabTitle.innerHTML = "childhood" + "<button class=\"close\">x</button>";
    contentText.innerHTML = childhood;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__bio_present")) {
    tabTitle.innerHTML = "present" + "<button class=\"close\">x</button>";
    contentText.innerHTML = present;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__interests_code")) {
    tabTitle.innerHTML = "coding" + "<button class=\"close\">x</button>";
    contentText.innerHTML = code;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__interests_tech")) {
    tabTitle.innerHTML = "tech" + "<button class=\"close\">x</button>";
    contentText.innerHTML = tech;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__education_school")) {
    tabTitle.innerHTML = "school" + "<button class=\"close\">x</button>";
    contentText.innerHTML = school;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__education_university")) {
    tabTitle.innerHTML = "university" + "<button class=\"close\">x</button>";
    contentText.innerHTML = university;
    openTab();
  }
});