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

#Project 2
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