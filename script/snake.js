
function getRandomCoord(max) {
  // returns random coordinate from 0 to max
  let num = Math.random() * max;
  return Math.floor(num);
}

function startGame() {
  run = setInterval(game, 1000/speed);
  startButton.setAttribute("hidden", "")
  startButton.removeEventListener('click', startGame);
  startButton.addEventListener('click', function() {
    clearInterval(run);
    clearPosition();
    startGame();
  });
  
}

function clearPosition() {
  // reset snake position, apple position, score, game over overlay

  applePosition = [getRandomCoord(width), getRandomCoord(height)];
  score = 0;
  resetScoreFields();
  direction = 1;
  snakeBody = []
  // centering snake body
  for (let i = 0; i < startLenght; i++) {
    snakeBody.push([Math.floor(width/2), Math.floor(height/2)+1]);
  }
  gameOver.setAttribute("hidden", "");
}

function resetScoreFields() {
  for (let food of foods) {
    food.style.opacity = 1;
  }
}

function waitScreen() {

  // make everything shine
  context.shadowColor=appleColor;
  context.shadowBlur=10;

  // clearing game field
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(1, 22, 39, 0.84)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  renderSnake();
}

function renderSnake() {
  for (let i = 0; i < snakeBody.length; i++) {
    // imitating fade-out of snake from head to tail
    // // // // why is this four-block snake has only 3 blocks visible>? am i so bad in math?
    currAlpha = 1 - i * (1 / (snakeBody.length));
    context.fillStyle = "rgba(67, 217, 173, " + currAlpha + ")";

    // making a round head depending on direction
    if (i == 0) {
      // only first block really needs in head rounding
      context.beginPath();
      if (direction == 1) {
        context.arc(snakeBody[0][0]*10+5, snakeBody[0][1]*10, 5, 0, 2 * Math.PI, false);
        context.fillRect(snakeBody[0][0] * blockSize, snakeBody[0][1] * blockSize, 10, 10);
      }
      else if (direction == 2) {
        context.arc(snakeBody[0][0]*10+10, snakeBody[0][1]*10+5, 5, 0, 2 * Math.PI, false);
        context.fillRect(snakeBody[0][0] * blockSize, snakeBody[0][1] * blockSize, 10, 10);
      }
      else if (direction == 3) {
        context.arc(snakeBody[0][0]*10+5, snakeBody[0][1]*10+10, 5, 0, 2 * Math.PI, false);
        context.fillRect(snakeBody[0][0] * blockSize, snakeBody[0][1] * blockSize, 10, 10);
      }
      else if (direction == 4) {
        context.arc(snakeBody[0][0]*10, snakeBody[0][1]*10+5, 5, 0, 2 * Math.PI, false);
        context.fillRect(snakeBody[0][0] * blockSize, snakeBody[0][1] * blockSize, 10, 10);
      }
      context.fill();
    }
    else {
      // non-head blocks
      context.fillRect(snakeBody[i][0] * blockSize, snakeBody[i][1] * blockSize, 10, 10);
    }
}
}

function drawStartGameText() {
  startButton.innerHTML = "start-game";
}

function drawStartAgainButton() {
  if (LANGUAGE == 'en') startButton.innerHTML = "start-again";
  else startButton.innerHTML = "ещё-раз";
  startButton.removeAttribute("hidden");
  startButton.classList.add("start-again-button")
}

function drawPlayAgainButton() {
  if (LANGUAGE == 'en') startButton.innerHTML = "play-again";
  else startButton.innerHTML = "сыграть-ещё";
  startButton.removeAttribute("hidden");
  startButton.classList.add("start-again-button")
}

function drawGameOver() {
  if (LANGUAGE == 'en') gameOver.innerHTML = "game over!";
  else gameOver.innerHTML = "игра окончена!"
  gameOver.removeAttribute("hidden");
}

function drawWellDone() {
  if (LANGUAGE == 'en') gameOver.innerHTML = "well done!";
  else gameOver.innerHTML = "отлично!";
  gameOver.removeAttribute("hidden");
  navBar.classList.remove("hidden");
}
let movePassed;
game = function() {
  // move passed per step indicator
  movePassed = false;

  // make everything shine
  context.shadowColor=appleColor;
  context.shadowBlur=10;

  // clearing game field
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(1, 22, 39, 0.84)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // snake behaviour
  // direction
  if (direction == 1) {
    snakeBody.unshift([snakeBody[0][0], --snakeBody[0][1]]);
  }  else if (direction == 2) {
      snakeBody.unshift([++snakeBody[0][0], snakeBody[0][1]]);
  } else if (direction == 3) {
      snakeBody.unshift([snakeBody[0][0], ++snakeBody[0][1]]);
  } else if (direction == 4) {
      snakeBody.unshift([--snakeBody[0][0], snakeBody[0][1]]);
  }
  snakeBody.pop();

  // rendering
  renderSnake();
  
  // end game conditions
  //score = 10
  if (score == 10) {
    drawWellDone();
    drawPlayAgainButton();
    clearInterval(run);
  }

  // snake get out of field
  if (snakeBody[0][0] * 10 > canvas.width-1 || snakeBody[0][1] * 10 > canvas.height-1 || snakeBody[0][0] * 10 < 0 || snakeBody[0][1] * 10 < 0) {
    drawStartAgainButton();  
    drawGameOver();
    clearInterval(run);
      // alert("Score: " + score + '\nerr: out of field');
  }
  // snake touches itself
  snakeBody.forEach(function(e, i) {
    let lastBlock = snakeBody.length - 1;
    if (e[0] == snakeBody[lastBlock][0] && e[1] == snakeBody[lastBlock][1] && i < lastBlock && score >= untouchableScore) {
      drawStartAgainButton();
      drawGameOver();
      clearInterval(run);
      // alert("Score: " + score + '\nerr: self-touch');
    } 
  })

  // apple spawn
  
  // context.fillStyle = appleColor;
  // context.fillRect(applePosition[0] * blockSize, applePosition[1] * blockSize, 10, 10);
  context.beginPath();
  context.arc(applePosition[0]*10+5, applePosition[1]*10+5, 5, 0, 2 * Math.PI, false);
  context.fillStyle = appleColor;
  context.fill();



  // new apple if it was picked 
  if (snakeBody[0][0] == applePosition[0] && snakeBody[0][1] == applePosition[1]) {
    snakeBody.push(snakeBody[snakeBody.length - 1]);
    applePosition[0] = getRandomCoord(width);
    applePosition[1] = getRandomCoord(height);
    score++;
    foods[10-score].style.opacity = 0.4;
  };
}

// arrow keys listener
document.addEventListener("keydown", function(e) {
  e.preventDefault();
  // if key is arrow right
  if (e.keyCode == "39" && direction !== 4 && !movePassed) {
    document.querySelector(".snake-game__info_arrows-arrowright").style.opacity = 0.6;
    direction = 2; 

    movePassed = true;
  }
  // if key is arrow down
  if (e.keyCode == "40" && direction !== 1 && !movePassed) {
    document.querySelector(".snake-game__info_arrows-arrowdown").style.opacity = 0.6;
    direction = 3; 

    movePassed = true;
  }
  // if key is arrow left
  if (e.keyCode == "37" && direction !== 2 && !movePassed) {
    document.querySelector(".snake-game__info_arrows-arrowleft").style.opacity = 0.6;
    direction = 4; 

    movePassed = true;
  }
  // if key is arrow up
  if (e.keyCode == "38" && direction !== 3 && !movePassed) {
    document.querySelector(".snake-game__info_arrows-arrowup").style.opacity = 0.6;
    direction = 1; 

    movePassed = true;
  }
})

document.querySelector(".snake-game__info_arrows-arrowright").addEventListener('click', function() {
  if (direction !== 4 && !movePassed)  {
    direction = 2;
    movePassed = true;
  }
})
document.querySelector(".snake-game__info_arrows-arrowup").addEventListener('click', function() {
  if (direction !== 3 && !movePassed) {
    direction = 1;
    movePassed = true;
  }
})
document.querySelector(".snake-game__info_arrows-arrowdown").addEventListener('click', function() {
  if (direction !== 1 && !movePassed) { 
    direction = 3;
    movePassed = true;
  }
})
document.querySelector(".snake-game__info_arrows-arrowleft").addEventListener('click', function() {
  if (direction !== 2 && !movePassed) {
   direction = 4;
   movePassed = true;
  } 
})

document.addEventListener("keyup", function(e) {
  e.preventDefault();

  // if key is arrow right
  if (e.keyCode == "39") {
    document.querySelector(".snake-game__info_arrows-arrowright").style.opacity = 1;
  }
  // if key is arrow down
  if (e.keyCode == "40") {
    document.querySelector(".snake-game__info_arrows-arrowdown").style.opacity = 1;
  }
  // if key is arrow left
  if (e.keyCode == "37") {
    document.querySelector(".snake-game__info_arrows-arrowleft").style.opacity = 1;
  }
  // if key is arrow up
  if (e.keyCode == "38") {
    document.querySelector(".snake-game__info_arrows-arrowup").style.opacity = 1;
  }
})

const speed = 4;  // moves per second
const untouchableScore = 1; // minimum score to self-touch end game // 0 sets instant death(bug)
const startLenght = 4; // initial snake body lenght

const appleColor = "rgb(67, 217, 173)";


let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

let score = 0;
let blockSize = 10;
//               🠙 1 (up) default
//  (left) 4 🠘    🠚 2 (right)  
//             🠛 3 (down)
let direction = 1;

let width = canvas.width/blockSize;
let height = canvas.height/blockSize;

// foods left counter
let foods = document.getElementsByClassName('snake-game__info_foods-food');



let startButton = document.getElementById('start-game__button');
startButton.addEventListener('click', startGame);
let skipButton = document.querySelector('.skip');


let gameOver = document.getElementById("game-over");

let navBar = document.querySelector(".header-nav");

// initial clearing
clearPosition();
waitScreen();


skipButton.addEventListener('click', function() {
  navBar.classList.remove("hidden");
  score = 10;
  clearInterval(run);

  drawWellDone();
})  






