// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter Your City Name")

if (city === "Karachi"| city === "Karachi"){
    alert("Welcome to city of lights")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender")
if  (gender === "Male"| gender ==="male"){
    alert("Good Morning Sir")
}

if  (gender === "Female"| gender ==="female"){
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

 var light = prompt("Enter Traffic SIgnal Light Color")
 if (light=== "Red"| light ==="red"){
     alert("Must Stop")
 }

 if (light=== "Yellow"| light ==="yellow"){
    alert("Ready to move")
}

if (light=== "Green"| light ==="green"){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car

var fuel = prompt("Enter Your Remaining Fuel Levl")
if (fuel === "0.25"){
    alert("Please refill the fuel in your car")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }





// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var totalMarks = 300;
var sub1 = prompt("Enter Your First Subject Marks")
var sub2 = prompt("Enter Your Second Subject Marks")
var sub3 = prompt("Enter Your Third Subject Marks")
var sub1Marks = Number(sub1)
var sub2Marks = Number(sub2)
var sub3Marks = Number(sub3)
var markObtained = sub1Marks+sub2Marks+sub3Marks
var percentage = markObtained/totalMarks*100

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

if (percentage >= 60){
    grade = "B";
    remarks = "You Need to improve";
}
if (percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks sheet</h1>"+
    "<br/>Total Marks :"+totalMarks+
    "<br/>Marks Obtained :"+markObtained+
    "<br/>Percentage :"+percentage+"%"+
    "<br/>Grade :"+grade+
    "<br/>Remarks :"+remarks

)

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var number = 10
var userInput = +prompt("Enter the number")
if (number==userInput){
    alert("BINGO! Correct Answer")
}

else if (userInput+1==number){
    alert("Close enough to the correct answer")
}

else{
    alert("You lost!")
}



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt("Enter a Number to check is divisible by 3")

if (num % 3 === 0){
    alert("Your Given Number is Divisible by 3")

}else {
    alert("Your Given Number is not Divisble by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = prompt("Enter a number: ")
if(num % 2 === 0){
    alert(num +" is a even number")
}else{
    alert(num +" is a odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("Enter the temperature")
var t = Number(temp)

if (t > 40){
    alert("It is too hot outside")
}

if (t > 30){
    alert("The weather today is Normal")
}

if (t > 20){
    alert("Today's weather is cool")
}

if (t > 10){
    alert("OMG! Today's weather is a cool")
}

// 11.
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var a = prompt("Enter First number")
var b = prompt("Enter Second number")
var operator = prompt("Enter an operator operation(+,-,*,/,%)")
var num1 = Number(a)
var num2 = Number(b)

if (operator === "+"){
    alert ("Your Ans is "+(num1+num2))
}

if (operator === "-"){
    alert ("Your Ans is "+(num1-num2))
}

if (operator === "*"){
    alert ("Your Ans is "+(num1*num2))
}

if (operator === "/"){
    alert ("Your Ans is "+(num1/num2))
}

if (operator === "%"){
    alert ("Your Ans is "+(num1%num2))
}
