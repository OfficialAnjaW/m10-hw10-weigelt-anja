'use strict';

// It is always helpful to use comments in your code!

// Arrow Function 1 (Alternative)

// const boilingTemp = document.getElementById('boiling-temp');
//
// const addBoiling = () => {
//   boilingTemp.innerText = "212";
// }
// addBoiling();

// Arrow Function 1

var boilingTemp = document.getElementById('boiling-temp');

var addBoiling = function addBoiling() {
  var boilingText = document.createTextNode('212');
  boilingTemp.appendChild(boilingText);
};
addBoiling();

// Arrow Function 2

var freezingTemp = document.getElementById('freezing-temp');

var addFreezing = function addFreezing() {
  var freezingText = document.createTextNode('32');
  freezingTemp.appendChild(freezingText);
};
addFreezing();

// Arrow Function 3

var waterTemp = document.getElementById('water-temp');

var addWater = function addWater() {
  var waterText = document.createTextNode('90');
  waterTemp.appendChild(waterText);
};
addWater();

// setTimeout

var boilingSection = document.getElementById('boiling');
var frozenSection = document.getElementById('frozen');
var goodSection = document.getElementById('good-temp');

var hotTemp = 212;
var coldTemp = 32;
var currentTemp = 90;

if (currentTemp > hotTemp) {
  setTimeout(function () {
    boilingSection.classList.remove('hide');
    boilingSection.classList.add('show');
  }, 3000);
} else {
  if (currentTemp < coldTemp) {
    setTimeout(function () {
      frozenSection.classList.remove('hide');
      frozenSection.classList.add('show');
    }, 3000);
  } else {
    setTimeout(function () {
      goodSection.classList.remove('hide');
      goodSection.classList.add('show');
    }, 3000);
  }
}

// Basic Setup

// setTimeout(() => {
//   boilingSection.classList.remove('hide');
//   boilingSection.classList.add('show');
// }, 3000);

// setTimeout(() => {
//   frozenSection.classList.remove('hide');
//   frozenSection.classList.add('show');
// }, 3000);

// setTimeout(() => {
//   goodSection.classList.remove('hide');
//   goodSection.classList.add('show');
// }, 3000);