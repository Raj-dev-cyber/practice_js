x = Math.random()
console.log(x);
console.log("CALCULATOR");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

let method = Number(prompt("Enter the method you want to use"));

let input = Number(prompt("Enter first number"));
let input2 = Number(prompt("Enter second number"));



if ((x < 0.1) && (method == 1)) {
  console.log(input - input2)
}
else if ((x < 0.1) && (method == 2)){
  console.log(input / input2)
}
else if ((x < 0.1) && (method == 3)){
  console.log(input + input2)
}
else if ((x < 0.1) && (method == 4)){
  console.log(input ** input2)
}
else{
  if ((x > 0.1) && (method == 1)){
    console.log(input + input2)
  }
  else if ((x > 0.1) && (method == 2)){
    console.log(input - input2)
  }
  else if ((x > 0.1) && (method == 3)){
    console.log(input * input2)
  }
  else if ((x > 0.1) && (method == 4)){
    console.log(input / input2)
  }
  else{
    console.log("Invalid input")
  }
}
