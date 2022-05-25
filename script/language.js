let dict = {
  // header
  'danil':'Данил',
  '_hello': '_привет',
  '_about-me': '_обо-мне',
  '_projects': '_проекты',
  '_contact-me': '_связаться',

  // footer
  'find me in:': 'так же я в:',

  // hello page
  'Hi all. I am': 'Привет. Я',
  'Daniil Fomichev': 'Даниил',
  '> Front-end developer': 'Front-end разработчик',
  '// complete the game to continue': '// выиграйте, чтобы продолжить',
  '// you can also see it on my GitHub page': '// игра так же есть на GitHub',
  '// find my profile on Github:': '// я на GitHub:',
  'start-game': 'начать',
  'game over!': 'игра окончена!',
  '// use keyboard': '// жми стрелки',
  '// arrows to play': '// для управления',
  '// food left': '// осталось',
  'skip': 'дальше',

  // about-page
  'personal-info': 'личная-информация',
  'work': 'работа',
  'catering establishments': 'общепит',
  'bio': 'биография',
  'childhood': 'детство',
  'present': 'настоящее',
  'interests': 'интересы',
  'coding': 'программирование',
  'tech': 'технологии',
  'education': 'образование',
  'high-school': 'школа',
  'university': 'университет',
  'contacts': 'контакты',

  // projects-page
  'projects': 'проекты',
  'Unfortunately, this site is my first and only project yet.': 'К сожалению, пока что это мой первый и единственный проект.',
  'Unselected by default technologies haven\'t been studied by me at the moment of this site creation process.': 'Невыбранные по умолчанию технологии не были изучены мной на момент создания этого сайта.',
  
  // contact page
  'find-me-also-in': 'я-есть-в',
  '_name:': '_имя:',
  '_email:': '_эл-почта:',
  '_message:': '_сообщение:',
  'submit-message': 'отправить',
  'Thank you! 🤘': 'Спасибо! 🤘',
  'Your message has been accepted. You will recieve answer really soon!': 'Сообщение было отправлено! Я отвечу как можно скорее!',
  'send-new-message': 'отправить-ещё'
}

// strip func
function trim(s){ 
  return ( s || '' ).replace( /^\s+|\s+$/g, '' ); 
}

function load_script() {
  if (document.title == 'ABOUT ME') {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    let oldScript = head.querySelector("#script");
    script.src = 'scripts/about.js';
    script.id = 'script';
    head.appendChild(script);
    head.removeChild(oldScript);
   }
  }


let LANGUAGE;


let words = document.querySelectorAll('.en');
let nameTag = document.querySelector('.header-name');

nameTag.addEventListener("click", function(e) {
  e.preventDefault();
  switchLang();
});

// swap dict keys and values
function swap(dict) {
  var ret = {};
  for(var key in dict){
    ret[dict[key]] = key;
  }
  return ret;
}

let lang = document.querySelector('.lang');
let page = document.querySelector('.page-container');

function switchLang() {

  lang.classList.toggle('rus');
  lang.classList.toggle('eng');
  page.animate(switchLangAnim, switchLangAnimTiming);

  for (let i=0;i<words.length;i++) {
    if ( trim(words[i].textContent) in dict) {
      let content = trim(words[i].textContent);
      words[i].textContent = dict[content];
    }
  }

  if (LANGUAGE == 'ru') {
    LANGUAGE = 'en'; 
    window.sessionStorage.setItem('LANGUAGE', 'en');
  }
  else { 
    LANGUAGE = 'ru';
    window.sessionStorage.setItem('LANGUAGE', 'ru');
  }
  dict = swap(dict);
  load_script();

}

let switchLangAnim = [
  {'opacity': '0'},
  {'opacity': '1'}
]

let switchLangAnimTiming = {
  duration: 400,
  iterations: 1,
}

if (window.sessionStorage.getItem('LANGUAGE') == 'ru') switchLang();
else LANGUAGE = 'en';