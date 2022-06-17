let celcius = document.querySelector("#celcius");
let kelvin = document.querySelector("#kelvin");
let fahrenheit = document.querySelector("#fahrenheit");

// Celcius to Fahrenheit and Kelvin
// document.getElementById("celcius").addEventListener("input", );

function cConverter(valNum) {
  valNum = parseFloat(valNum);
  fahrenheit.value = eval(`${valNum} * 1.8 + 32`).toFixed(2);
  kelvin.value = eval(`${valNum} + 273.15`).toFixed(2);
}

// Fahrenheit to Celcius and Kelvin
function fConverter(valNum) {
  valNum = parseFloat(valNum);
  celcius.value = eval(`(${valNum} - 32) / 1.8`).toFixed(2);
  kelvin.value = eval(`(${valNum} - 32) / 1.8 + 273.15`).toFixed(2);
}

// Kelvin to Celcius and Fahrenheit
function kConverter(valNum) {
  valNum = parseFloat(valNum);
  fahrenheit.value = eval(`1.8 * (${valNum} - 273) + 32`).toFixed(2);
  celcius.value = eval(`${valNum} - 273.15`).toFixed(2);
}

// Reset
function reset() {
  fahrenheit.value = reset;
  celcius.value = reset;
  kelvin.value = reset;
}
