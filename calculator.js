//Declaring the variable

const firstNumber = document.querySelector("#First-number");
const secondNumber = document.querySelector("#Second-number");
const showResult = document.querySelector("#result");
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const mulButton = document.querySelector("#mul");
const divButton = document.querySelector("#div");

//function to perform calculations
function calculate(operation) {
  //convert input values to numbers

  let number1 = parseFloat(firstNumber.value);
  let number2 = parseFloat(secondNumber.value);
  //ensure input are valid numbers

  if (isNaN(number1) || isNaN(number2)) {
    showResult.value = "Please enter valid numbers";
    return;
  }
  let result;
  //perform the calculation based on the operation
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "sub":
      result = number1 - number2;
      break;
    case "mul":
      result = number1 * number2;
      break;
    case "div":
      if (number2 === 0) {
        showResult.value = "cannot divide by zero";
        return;
      }
      result = number1 / number2;
      break;
    default:
      result = "Invalid operation";
  }
  showResult.value = result;
}
