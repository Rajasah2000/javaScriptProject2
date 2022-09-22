const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");

let displayValue1 = "";
let displayValue2 = "";
let result = null;
let lastOperation = "";


numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {

    displayValue2 += e.target.innerText;
    display2.innerText = displayValue2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
   
    if (!displayValue2){
        return;
    } 
    const operationName = e.target.innerText;
    if (displayValue1 && displayValue2 && lastOperation) {
      allOperation();
    } 
    else {
      result = displayValue2;
    }
    
    lastOperation =operationName;
    clearVar(lastOperation);
  });
  
});
const clearVar = (name="") =>{

  displayValue1 += displayValue2 + name;
  display1.innerText = displayValue1;
  display2.innerText = result;
  displayValue2 = "";
  
}


const allOperation = () => {
  if (lastOperation == "*") {
    result = parseInt(result)  * parseInt(displayValue2);
  } else if (lastOperation == "+") {
    result = parseInt(result)  + parseInt(displayValue2);
  } else if (lastOperation == "-") {
    result = parseInt(result)  - parseInt(displayValue2);
  } else if (lastOperation == "/") {
    result = parseInt(result)  / parseInt(displayValue2);
  }
}


equalEl.addEventListener("click", () => {
  if (!displayValue2 || !displayValue1) return;
  allOperation();
  clearVar();
  display2.innerText = result;
    display1.innerHTML = display1.innerHTML+'=';
   
  displayValue2 = result;
  displayValue1 = "";
});

clearAllEl.addEventListener("click", () => {
  displayValue1 = "";
  displayValue2 = "";
  display1.innerText = "0";
  display2.innerText = "0";
  result = "";

});

//   data through event

window.addEventListener("keydown", (e) => {
  if (e.key === "0" ||e.key === "1" ||e.key === "2" ||e.key === "3" ||e.key === "4" ||e.key === "5" ||e.key === "6" ||e.key === "7" ||e.key === "8" ||e.key === "9") {
    clickButtonEl(e.key);

  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    clickOperation(e.key);
  } 

  else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
});

const clickButtonEl = (key) => {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
const clickOperation = (key) => {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
const clickEqual = () => {
  equalEl.click();
}