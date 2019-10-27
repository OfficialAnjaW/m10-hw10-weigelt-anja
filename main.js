// It is always helpful to use comments in your code!

// Arrow Function 1 (Alternative)

// const boilingTemp = document.getElementById('boiling-temp');
//
// const addBoiling = () => {
//   boilingTemp.innerText = "212";
// }
// addBoiling();

// Arrow Function 1

const boilingTemp = document.getElementById('boiling-temp');

const addBoiling = () => {
  const boilingText = document.createTextNode('212');
  boilingTemp.appendChild(boilingText);
}
addBoiling();

// Arrow Function 2

const freezingTemp = document.getElementById('freezing-temp');

const addFreezing = () => {
  const freezingText = document.createTextNode('32');
  freezingTemp.appendChild(freezingText);
}
addFreezing();

// Arrow Function 3

let waterTemp = document.getElementById('water-temp');

let addWater = () => {
  let waterText = document.createTextNode('90');
  waterTemp.appendChild(waterText);
}
addWater();

// setTimeout

const boilingSection = document.getElementById('boiling');
const frozenSection = document.getElementById('frozen');
const goodSection = document.getElementById('good-temp');

setTimeout(() => {
  boilingSection.classList.remove('hide');
  boilingSection.classList.add('show');
}, 3000);

setTimeout(() => {
  frozenSection.classList.remove('hide');
  frozenSection.classList.add('show');
}, 3000);

setTimeout(() => {
  goodSection.classList.remove('hide');
  goodSection.classList.add('show');
}, 3000);
