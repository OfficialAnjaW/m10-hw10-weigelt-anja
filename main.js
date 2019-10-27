// It is always helpful to use comments in your code!

// Arrow Function 1

// const boilingTemp = document.getElementById('boiling-temp');
//
// const addBoiling = () => {
//   boilingTemp.innerText = "212";
// }
// addBoiling();

const boilingTemp = document.getElementById('boiling-temp');

const addBoiling = () => {
  const boilingText = document.createTextNode('212');
  boilingTemp.appendChild(boilingText);
}
addBoiling();

// Arrow Function 2

// Arrow Function 3
