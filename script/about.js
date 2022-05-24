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
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>professional-info";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>профессиональная-информация";
    
  }
  else {
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>professional-info";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>профессиональная-информация";
    
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
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>personal-info";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>личная-информация";
    
  }
  else {
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>personal-info";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>личная-информация";
  }
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
}

function switchHobbies() {
  // navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>hobbies";
  catArrowPersonal = document.querySelector(".cat-arrow__pers");
  document.querySelector(".nav-tree__work_catering").classList.add("invisible");
  document.querySelector(".nav-tree__bio_childhood").classList.add('invisible');
  document.querySelector(".nav-tree__bio_present").classList.add('invisible');
  workFolder.classList.add("invisible");
  bioFolder.classList.add("invisible");
  bioFolder.firstChild.classList.remove("folder-arrow_opened");
  interestsFolder.classList.remove("invisible");
  educationFolder.classList.add("invisible");
  workFolder.firstChild.classList.remove("folder-arrow_opened");
  

  document.querySelector(".nav-tree__work_catering").classList.add("invisible");
  if (catArrowPersonal.classList.contains("cat-arrow_opened")) {
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>hobbies ";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers cat-arrow_opened\"></div>увлечения";
  }
  else {
    if (LANGUAGE == 'en') navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>hobbies";
    else navTitle.innerHTML = "<div class=\"cat-arrow cat-arrow__pers\"></div>увлечения";
    
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


let childhood, present, code, tech, school, university, catering;





document.querySelector(".nav-tree-content").addEventListener("click", function(e) {
  if (LANGUAGE == 'en') {
    childhood = toList("What can I say? I wasn't a genius, top tier brawl stars player or cryptotrader and nft reseller. I've been eating sand. and beating nettle with a stick (a very powerful stick)");
    present = toList("Right now I'm trying myself in frontend development, as you may have been noticed I do that living in Cheboxary, Russia, but one day...");
    code = toList("My first coding experience was pretty long ago, 6-7 years I guess it was php development on php devel studio with almost no codejava, c++, Pascal, Basic, PHP, delphi, ruby, python, game development, game design, mobile development , ux/ui, cyber security, that's everything i can remember I've been trying to learn I tried - I failed - I waited - I tried again, but something new this been happening for a long time, but some unexpected thing happened to me...to be continued on work/catering");
    tech = toList("Coding wasn't the only think I liked - technologies are great at all! devices, electronics - all of them! But I never tried to go deep in most difficult things due to physics ignorance but this smart home things..it beckons..");
    school = toList("There's not that much what I can say - I was a geek with only couple geek friends? Who likes skinny guys with glasses and self-esteem troubles?.. Until they need help with English or Informatics?😃 By the way, when I started going to the gym, I understood that geeks can be fit. and so was i. not for long unfortunately");
    university = toList("I entered the Kazan Innovation University at the Faculty of Applied Informatics, but half year later I dropped out. Expensive and quite useless - I could learn everything by myself. But the decision was to live in the moment. It's continued for almost 3 years..");
    catering = toList("After dropping out of universuty, unfortunately I was absorbed by public catering. For three years I've been working as a cook at cafes firstly in my town, then in Cheboxary. I liked it for some time honestly, until I wanted to get IT profession again.");
 }
 else {
    childhood = toList("Что я могу сказать? Я не был гением, топ игроком в brawl stars или криптотрейдером и реселлером. Я ел песок. И бил крапиву палкой (очень мощной палкой)");
    present = toList("Прямо сейчас я пробую себя в frontend разработке , как вы, возможно, заметили. Сейчас я занимаюсь этим в Чебоксарах, но однажды...");
    code = toList("Мой первый опыт программирования был довольно давно, около 6-7 лет назад, это была php разработка на php devel studio почти без кода. Java, C++, Pascal, Basic, PHP, delphi, ruby, python, разработка игр, дизайн игр, разработка для мобильных устройств, ux/ui, кибербезопасность, это все, что я могу вспомнить, чему я пытался научитьсяю Я пытался - у меня не получалось - Проходило время - я попробовал снова, но что-то новое. Это продолжалось долго, пока не произошло... продолжение в работа/общепит");
    tech = toList("Не только программирование мне нравилось - технологии в принципе прикольные! Компы, электроника - все это! Но я никогда не пытался углубляться в некоторые сложные вещи из-за незнания физики, но эти девайсы для умного дома..так и манят..");
    school = toList("Я не так уж много могу сказать - я был задротом, у которого была всего пара друзей, тоже гиков. Кому нравятся худые парни в очках и с проблемами с самооценкой?.. Пока им не понадобится помощь с английским или информатикой😃 Кстати, когда я начал ходить в спортзал, я понял, что задроты могут быть в форме. Я был. К сожалению, недолго");
    university = toList("Я поступил в Казанский Инновационный Университет на факультет прикладной информатики, но через полгода бросил учебу. Дорого и бесполезно - я мог бы научиться всему сам. Но решил жить моментом. Это продолжается уже почти 3 года..");
    catering = toList("После того, как я бросил университет, к сожалению, я попал в общепит. Вот уже три года я работаю поваром в кафешках сначала в своем городе, потом в Чебоксарах. Честно говоря, мне это нравилось какое-то время, пока я снова не захотел войти в айти.");
 }
  function openTab() {
    tabTitle.style.visibility = "visible";
    contentText.style.visibility = "visible";
    slider.style.visibility = "visible";
  }

  if (e.target.classList.contains("nav-tree__bio_childhood")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "childhood" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "детство" + "<button class=\"close\">x</button>";
    contentText.innerHTML = childhood;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__bio_present")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "present" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "настоящее" + "<button class=\"close\">x</button>";
    contentText.innerHTML = present;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__interests_code")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "code" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "программирование" + "<button class=\"close\">x</button>";
    contentText.innerHTML = code;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__interests_tech")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "tech" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "технологии" + "<button class=\"close\">x</button>";
    contentText.innerHTML = tech;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__education_school")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "school" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "школа" + "<button class=\"close\">x</button>";
    contentText.innerHTML = school;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__education_university")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "university" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "университет" + "<button class=\"close\">x</button>";
    contentText.innerHTML = university;
    openTab();
  }

  else if (e.target.classList.contains("nav-tree__work_catering")) {
    if (LANGUAGE == 'en') tabTitle.innerHTML = "catering" + "<button class=\"close\">x</button>";
    else tabTitle.innerHTML = "общепит" + "<button class=\"close\">x</button>";
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
