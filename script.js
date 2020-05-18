//Programming Foundations, Module assignment 1, Tore Berg, jan20FT.



//Question 1. Declare a variable called firstVar but don't initialise it with a value.

var firstVar 
console.log(firstVar); //undefined

//Question 2. Declare a variable called name and assign it your first name.

var name = "Tore";
console.log(name); //Tore

//Question 3. Declare and initialise a variable with a number value.

var myAge = 38;
console.log(myAge); //38

//Question 4. Create a variable called division and initialise it with a value of 20 divided by 5.

var division = 20 / 5;
console.log(division); //4

//Question 5. Write code that checks the type of the value "frog".

var animal = "frog";
typeof(animal);
console.log(typeof(animal)); //string

//Question 6. Declare and initialise a variable called orderHasShipped with a boolean value.

var orderHasShipped = true;

/*Question 7. Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "true". If not, console log the string value "false".*/

if(orderHasShipped === true) {
    console.log("true"); //true
}
else {
    console.log("false");
}

//8. Create a for loop that counts from 0 to 9. Console log the value of the counter variable inside the loop.

for(var count = 1; count <= 9; count++) {
    console.log(count); //checked the loop in the console. Counts from 1-9.
}