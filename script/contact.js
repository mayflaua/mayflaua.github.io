let today = new Date().toDateString()

let catContacts = document.querySelector(".nav-tree__title_contacts");
let catArrowContacts = document.querySelector(".cat-arrow__contacts");

let navTreeContactsEmail = document.querySelector(".nav-contacts__email");
let navTreeContactsPhone = document.querySelector(".nav-contacts__phone"); 

catContacts.addEventListener('click', function() {
  catArrowContacts.classList.toggle("cat-arrow_opened");
  navTreeContactsEmail.classList.toggle("invisible");
  navTreeContactsPhone.classList.toggle("invisible");
});

let catFindMe =  document.querySelector(".nav-tree__title_findme");
let catArrowFindMe = document.querySelector(".cat-arrow__findme");

let navTreeFindMeGithub = document.querySelector(".nav-findme__gh");
let navTreeFindMeTelegram = document.querySelector(".nav-findme__tg");

catFindMe.addEventListener('click', function() {
  catArrowFindMe.classList.toggle("cat-arrow_opened");
  navTreeFindMeGithub.classList.toggle("invisible");
  navTreeFindMeTelegram.classList.toggle("invisible");
});


let codeArea = document.querySelector("code");


document.addEventListener('keyup', function() {
  let nameInput = document.querySelector(".form-name__input");
  let emailInput = document.querySelector(".form-email__input");
  let messageInput = document.querySelector(".form-message__input");
  
  code = "\nconst button = document.querySelector('.submit-button');\n\nconst message = {\n\tname: \"" + nameInput.value + "\",\n\temail: \"" + emailInput.value + "\",\n\tmessage: \"" + messageInput.value + "\",\n\tdate: \"" + today + "\"\n}\n\nbutton.addEventListener('click', () => { \n\tform.send(message);\n})";
  
  codeArea.innerHTML = code;
  hljs.highlightAll();
})

thanksWindow = document.querySelector(".thanks");
contactForm = document.querySelector(".contact-form");

let sendNewMessageButton = document.querySelector(".thanks-button");
let sendMessageButton = document.querySelector(".submit-button");

sendNewMessageButton.addEventListener("click", function() {
  thanksWindow.classList.toggle("invisible");
  contactForm.classList.toggle("invisible");
})
sendMessageButton.addEventListener("click", function() {
  contactForm.classList.toggle("invisible");
  thanksWindow.classList.toggle("invisible");
})