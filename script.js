const dispaly = document.querySelector("#outputValue");
let buttons = document.querySelectorAll(".button");

let mathematicalExpresion = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let operations = ["+", "-", "*", "/"];
    let pressedButton = button.value;
    if (pressedButton == "=") {
      mathematicalExpresion += getInputValue();
      dispaly.value = evaluate(mathematicalExpresion);
      mathematicalExpresion = "";
    } else if (pressedButton === "AC") {
      clearDisplay();
    } else if (!pressedButton.includes(operations)) {
      dispaly.value += pressedButton;
    } else {
      mathematicalExpresion += getInputValue();
      mathematicalExpresion += pressedButton;
    }
  });
});

function getInputValue() {
  return dispaly.value;
}

function clearDisplay() {
  dispaly.value = "";
  mathematicalExpresion = "";
}

function evaluate(mathematicalExpresion) {
  return eval(mathematicalExpresion);
}
