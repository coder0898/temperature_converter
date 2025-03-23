const InputTemperatureScale = document.getElementById("tempFrom");
const OutputTemperatureScale = document.getElementById("tempTo");
const InputValue = document.getElementById("inputVal");
const ConvertBtn = document.getElementById("convertBtn");
const ResetBtn = document.getElementById("resetBtn");

const CardChange = document.getElementById("card-change");
const CardContainer = document.querySelector("#card-change .card-content");

function ConvertTemperature(inputTemperature, firstScale, secondScale) {
  let convertResult = 0;
  const constantValue = 9 / 5;
  switch (firstScale) {
    case "celsius":
      if (secondScale == "fahrenheit") {
        convertResult += Math.floor(inputTemperature * constantValue + 32);
        CardChange.style.backgroundColor = "#FDEE00";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} F</p>`;
      } else if (secondScale == "kelvin") {
        convertResult += inputTemperature + 273.15;
        CardChange.style.backgroundColor = "#FF0800";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} K</p>`;
      } else {
        convertResult += inputTemperature;
        CardChange.style.backgroundColor = "#318CE7";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} C</p>`;
      }
      InputValue.value = "";
      break;

    case "fahrenheit":
      if (secondScale == "celsius") {
        convertResult += Math.floor(
          (inputTemperature - 32) * (1 / constantValue)
        );
        CardChange.style.backgroundColor = "#318CE7";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} C</p>`;
      } else if (secondScale == "kelvin") {
        convertResult += Math.floor(
          (inputTemperature + 459.67) * (1 / constantValue)
        );
        CardChange.style.backgroundColor = "#FF0800";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} K</p>`;
      } else {
        convertResult += inputTemperature;
        CardChange.style.backgroundColor = "#FDEE00";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} F</p>`;
      }
      InputValue.value = "";
      break;

    case "kelvin":
      if (secondScale == "celsius") {
        convertResult += inputTemperature - 273.15;
        CardChange.style.backgroundColor = "#318CE7";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} C</p>`;
      } else if (secondScale == "fahrenheit") {
        convertResult += Math.floor(inputTemperature * constantValue - 459.67);
        CardChange.style.backgroundColor = "#FDEE00";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} F</p>`;
      } else {
        convertResult += inputTemperature;
        CardChange.style.backgroundColor = "#FF0800";
        CardChange.style.color = "#FFFF";
        CardContainer.innerHTML = `<h4>${secondScale}</h4>
        <p>${convertResult} K</p>`;
      }
      InputValue.value = "";
      break;
    default:
      console.log("Invalid input temperature scale selected..");
      break;
  }
}

ConvertBtn.addEventListener("click", () => {
  let tempValue = Number(InputValue.value),
    firstSelect = InputTemperatureScale.value,
    secondSelect = OutputTemperatureScale.value;
  if (isNaN(tempValue) || firstSelect == "" || secondSelect == "") {
    CardChange.style.backgroundColor = "#F5F5F5";
    CardChange.style.color = "black";
    CardContainer.innerHTML = `<p>No result</p>`;
  } else {
    ConvertTemperature(tempValue, firstSelect, secondSelect);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  CardChange.style.backgroundColor = "#F5F5F5";
  CardChange.style.color = "black";
  CardContainer.innerHTML = `<p>No result</p>`;
});

ResetBtn.addEventListener("click", () => {
  CardChange.style.backgroundColor = "#F5F5F5";
  CardChange.style.color = "black";
  CardContainer.innerHTML = `<p>No result</p>`;
  InputTemperatureScale.value = "";
  OutputTemperatureScale.value = "";
});
