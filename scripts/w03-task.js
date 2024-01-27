/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function declaration for the 'add' function
function add (number1, number2) {
    return number1 + number2;
}
// Function declaration for the 'addNumbers' function
function addNumbers() {
    // Get values from HTML form controls with IDs of add1 and add2
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
  
    // Call the 'add' function with the obtained values and assign the result to an HTML form element with an ID of sum
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
  
// Add a "click" event listener to the HTML button with an ID of addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
};
  
    // Function expression for the 'subtractNumbers' function
    function subtractNumbers() {
    // Get values from HTML form controls with IDs of subtract1 and subtract2
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  
    // Call the 'subtract' function with the obtained values and assign the result to an HTML form element with an ID of difference
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
  
// Add a "click" event listener to the HTML button with an ID of subtractNumbers
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for the "multiplyNumbers" function
const multiplyNumbers = () => {
  // Get values from HTML form controls with IDs of factor1 and factor2
  let factorNumber1 = Number(document.querySelector('#factor1').value);
  let factorNumber2 = Number(document.querySelector('#factor2').value);

  // Call the 'multiply' function with the obtained values and assign the result to an HTML form element with an ID of product
  document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
};

// Add a "click" event listener to the HTML button with an ID of multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
  
// Function expression for the 'divideNumbers' function
const divideNumbers = function() {
    // Get values from HTML form controls with IDs of dividend and divisor
    let dividendValue = Number(document.querySelector('#dividend').value);
    let divisorValue = Number(document.querySelector('#divisor').value);
  
    // Call the 'divide' function with the obtained values and assign the result to an HTML form element with an ID of quotient
    document.querySelector('#quotient').value = divide(dividendValue, divisorValue);
};
  
// Add a "click" event listener to the HTML button with an ID of divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  


/* Decision Structure */
// Assuming there is an HTML element with an ID of 'subtotal' for user input,
// an ID of 'membershipCheckbox' for the membership checkbox, and
// an ID of 'total' for displaying the total amount.

// Add an event listener to the button with an ID of 'getTotalDue'
document.querySelector('#getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable to store the numeric value entered by the user in the 'subtotal' field
    let subtotalAmount = parseFloat(document.querySelector('#subtotal').value);
  
    // Check if the membership checkbox is checked
    let applyDiscount = document.querySelector('#member').checked;
  
    // Apply a 20% discount if the membership checkbox is checked
    if (applyDiscount) {
      subtotalAmount *= 0.8; // Apply a 20% discount
    }
  
    // Output the total to the 'total' span with two decimals using a template string
    document.querySelector('#total').textContent = `Total Due: $${subtotalAmount.toFixed(2)}`;
  });
  
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of 'array'
document.querySelector('#array').innerHTML = numbersArray;

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of 'odds'
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of 'evens'
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of 'sumOfArray'
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() array method to multiply each element in the array by 2 and assign the result to the HTML element with an ID of 'multiplied'
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with an ID of 'sumOfMultiplied'.
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);