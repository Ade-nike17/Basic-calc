 //read operator
const operator = prompt('Enter operator (+, -, * or /)');

//read the numbers
const num_1 = parseFloat(prompt('Enter your first number: '));
const num_2 = parseFloat(prompt('Enter your second number: '));

//when a null value is entered
let result = 0;
 if (isNaN(num_1) || isNaN(num_2)) {
    alert('Input Error! Refresh page and enter a valid input');
 }
 else{

    if (operator == '+'){
        result = num_1 + num_2;
    }else if (operator == '-'){
        result = num_1 - num_2;
    }else if (operator == '*'){
        result = num_1 * num_2;
    }else if (operator == '/'){
        result = num_1 / num_2;
    }
 }
 document.write(num_1 + operator + num_2 + ' = ' + result);

