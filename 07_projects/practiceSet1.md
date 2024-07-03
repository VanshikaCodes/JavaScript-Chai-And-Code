# Projects Related To DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const greyButton = document.querySelector("#grey");
greyButton.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "grey";
});

const yellowButton = document.querySelector("#yellow");
yellowButton.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "yellow";
});

const whiteButton = document.querySelector("#white");
whiteButton.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "white";
});

const blueButton = document.querySelector("#blue");
blueButton.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "blue";
});
              // ORRRRRRRRRRRRRRRRRRRRRRR
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons);

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // body.style.backgroundColor = e.target.id

    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") body.style.backgroundColor = e.target.id;
    if (e.target.id === "yellow") body.style.backgroundColor = e.target.id;
    if (e.target.id === "white") body.style.backgroundColor = e.target.id;
    if (e.target.id === "blue") body.style.backgroundColor = e.target.id;
  });
});
```

# Project 2
``` JavaScript
const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);

  if(height < 0 || isNaN(height) || height === ''){
    results.innerHTML = `Please give a valid height ${height}`
  } else if(weight < 0 || isNaN(weight) || weight === ''){
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi} </span>`
    switch (bmi) {
      case (bmi <18.6):
      results.textContent = `UnderWeight : ${bmi}`
      break;
      case (bmi > 18.6 && bmi <24.9):
      results.innerHTML = `NormalRange : ${bmi}`
      break;
      default:
      results.textContent = `OverWeight : ${bmi}`
    }
  }
})
```


# Project 3

```JavaScript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);

```

# roject 4 

```JavaScript
const form = document.querySelector('form')
console.log(form)
const msg = document.querySelector(".resultParas")
// console.log(msg)
const rand = Math.floor(Math.random() * (100 - 1) + 1)
console.log(rand)
const arr = []
let chances = 10
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = parseInt(document.querySelector('#guessField').value);
  // console.log(number)
  if(number === '' || number < 0 || isNaN(number) || number > 100){
    msg.children[2].innerHTML =" Enter a number between 1 to 100"
  }
  else {
    arr.push(number)
    document.querySelector(".guesses").innerHTML = arr
    document.querySelector(".lastResult").innerHTML = --chances
    if(number < rand) {
      msg.children[2].innerHTML = `Enter a higher number than ${number}`
      
    }
    else if(number > rand){
      msg.children[2].innerHTML = `Enter a lower number than ${number}`
    }
    else {
      msg.children[2].innerHTML = `Hoorahhhh you guessed it right in ${10-chances}`
    }
  }
})
             //ORRRRRRRRRRRRRRRRRRRR

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

# Project 6

```JavaScript

const randomColor = function() {
  return Math.floor(Math.random() * 255)
}

let intervalId
const changeBackground = function() {
  const color = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`
  document.body.style.backgroundColor = color
}

const startChangeColor = function () {
  if (!intervalId){
  intervalId = setInterval(changeBackground, 2000)
  }
}

const stopChangeColor = function () {
  clearInterval(intervalId)
  intervalId = null
}

document.querySelector("#start").addEventListener('click', startChangeColor)

document.querySelector("#stop").addEventListener('click', stopChangeColor)

```