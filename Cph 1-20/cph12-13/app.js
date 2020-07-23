// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("you have done something wrong")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var number1 = +prompt("Enter first Integar");
// var number2 = +prompt("Enter second Integar");
// if (number1> number2) {
//     alert(number1 + " is larger than" + number2)
// }
// else if (number1 < number2 ) {
//     alert(number2 + " is larger than" + number1)

// }
//  else alert(number1 + " and " + number2 + " are equal");



// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number");

//  if (number > 0 ) {
//     alert("The given number is Positive")

// }

// else if (number < 0 ) {
//     alert("The given number is Negative")

// }

// else alert( "The given number is zero");



// // 4. Write a program that takes a character (i.e. string of
// // length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter a character");
// if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//     alert("true")
// }
// else alert("false");



// // 5. Write a program that

// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise.
// var password = "abc123";
// var userPassword = prompt("Enter your password");
// if (userPassword === null || userPassword === ""){
//     alert("please enter your password");
// }

// else if (userPassword === password) {
//     alert("correct! the password you entered matches the original password");
// }

// else alert("incorrect password");


// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hour = 13;
// if (hour <18) {
//     greeting = "good day";
// }
// else greeting = "good evening";

// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 1900 = 7pm. Implement the
// // following case using if, else & else if statements


// var time = +prompt("what time is it?");
// if(time >= 0000 && time <1200){
//     alert("good morning");
// }
// else if(time >= 1200 && time <1700){
//     alert("good afternoon");
// }
// else if(time >= 1700 && time <1100){
//     alert("good evening");
// }
// else if(time >= 2100 && time <2359){
//     alert("good night");
// }