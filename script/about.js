function toList(string) {
  string = string.split(' ');
  var lines = [];

  for (var i=0; i<string.length; i+=7) {
    lines.push(string.slice(i, i+7).join(' '));
  }
  
  var result = '';
  for (var i=0; i<lines.length; i++) {
    result += li(lines[i]);
  }
  
  return result
}

function li(string) {
  return "<li class=\"content-window-text__stroke\">" + string + "</li>";

}

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


let workFolder = document.querySelector(".nav-tree__work");
// aside buttons
function switchProffesional() {
  // navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>professional-info";
  workFolder.classList.remove("invisible");
  bioFolder.classList.add("invisible");
  interestsFolder.classList.add("invisible");
  educationFolder.classList.add("invisible");
  document.querySelector(".nav-tree__bio_childhood").classList.add("invisible");
  document.querySelector(".nav-tree__bio_present").classList.add("invisible");
  document.querySelector(".nav-tree__interests_code").classList.add("invisible");
  document.querySelector(".nav-tree__interests_tech").classList.add("invisible");
  document.querySelector(".nav-tree__education_school").classList.add("invisible");
  document.querySelector(".nav-tree__education_university").classList.add("invisible");
  interestsFolder.firstChild.classList.remove("folder-arrow_opened");
  educationFolder.firstChild.classList.remove("folder-arrow_opened");
  bioFolder.firstChild.classList.remove("folder-arrow_opened");
  if (catArrowPersonal.classList.contains("cat-arrow_opened")) {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>professional-info";
  }
  else {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>professional-info";
  }
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
}

function switchPersonal() {
  // navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>personal-info";
  workFolder.classList.add("invisible");
  bioFolder.classList.remove("invisible");
  interestsFolder.classList.remove("invisible");
  educationFolder.classList.remove("invisible");
  workFolder.firstChild.classList.remove("folder-arrow_opened");
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
  document.querySelector(".nav-tree__work_catering").classList.add("invisible");
  if (catArrowPersonal.classList.contains("cat-arrow_opened")) {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>personal-info";
  }
  else {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>personal-info";
  }
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
}

function switchHobbies() {
  // navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>hobbies";
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
  document.querySelector(".nav-tree__work_catering").classList.add("invisible");
  workFolder.classList.add("invisible");
  bioFolder.classList.add("invisible");
  interestsFolder.classList.remove("invisible");
  educationFolder.classList.add("invisible");
  workFolder.firstChild.classList.remove("folder-arrow_opened");

  document.querySelector(".nav-tree__work_catering").classList.add("invisible");
  if (catArrowPersonal.classList.contains("cat-arrow_opened")) {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>hobbies ";
  }
  else {
    navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>hobbies";
  }
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
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
workFolder.addEventListener('click', function() {
  workFolder.firstChild.classList.toggle("folder-arrow_opened");
  document.querySelector(".nav-tree__work_catering").classList.toggle("invisible");
});


let contentText = document.querySelector(".content-window-text");
let tabTitle = document.querySelector(".content-tab");
let slider = document.querySelector(".content-window-slider");



let childhood = toList("childhood");
let present = toList("present");
let code = toList("code");
let tech = toList("tech");
let school = toList("school");
let university = toList("university");

let catering = toList("catering");


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

  else if (e.target.classList.contains("nav-tree__work_catering")) {
    tabTitle.innerHTML = "catering" + "<button class=\"close\">x</button>";
    contentText.innerHTML = catering;
    openTab();
  }

let closeButton = document.querySelector(".close");

closeButton.addEventListener('click', function() {
  tabTitle.style.visibility = "hidden";
  slider.style.visibility = "hidden";
  contentText.style.visibility = "hidden";
});
});


let catPersonal = document.querySelector(".nav-tree__title_pers");
let catContacts = document.querySelector(".nav-tree__title_contacts");

let catArrowPersonal = document.querySelector(".cat-arrow__pers");
let catArrowContacts = document.querySelector(".cat-arrow__contacts");

let navTreePersonal = document.querySelector(".nav-tree-content");
let navTreeContactsEmail = document.querySelector(".nav-contacts__email");
let navTreeContactsPhone = document.querySelector(".nav-contacts__phone");

catPersonal.addEventListener('click', function() {
  catArrowPersonal.classList.toggle("cat-arrow_opened");
  navTreePersonal.classList.toggle("invisible");
});

catContacts.addEventListener('click', function() {
  catArrowContacts.classList.toggle("cat-arrow_opened");
  navTreeContactsEmail.classList.toggle("invisible");
  navTreeContactsPhone.classList.toggle("invisible");
});

