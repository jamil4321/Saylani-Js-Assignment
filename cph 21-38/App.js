// //#CHAP 21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter Your First Name: ");
var lastName = prompt("Enter Your Second Name: ");
var fullName = firstName+" "+lastName;
alert("Welcome "+fullName+" to our website");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser 

var  mobile = prompt("Enter Your Favorite Mobile Name: ")
document.write(
    "<strong> My favourite phone is : "+mobile+
    "<br/> length of string "+mobile.length+"</br> <strong>"
);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var country = "pakistani";
document.write(
    "string: " +country+
    "</br> index of 'n' is :"+
    country.indexOf("n")+"<br/>"
)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .

var find = "Hello World";
document.write(
    "string: " +find+
    "<br/> last index of  'l' is "+
    find.lastIndexOf('l')+"<br/>"
)
// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .

var c5 = "pakistani";
document.write(
    "string: "+c5+
    "<br/> character at index 3: "+
    c5.charAt(3)+"<br/>"
)

// 6. Repeat Q1 using string concat() method.


var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Second Name");
var fullName = firstName.concat(" ", lastName);
alert("Welcome "+fullName+" to our website");




// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var replace = city.replace("Hyder","Islam")
document.write(
    "city name: "+city+
    "<br/> after replacement: "
    +replace+"<br/>"
);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together";
var nM = message.replace(/and/g,"&");
document.write(
    message+"<br/>"+nM+"<br/>"
);
 
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var str = "472";
var num = Number(str);
document.write(
    "value: "+str+
    "<br/>type: "+typeof(str)+
    "<br/> value: "+num+
    "<br/>type: "+typeof(num)+"<br/>"
);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var lowerCase = "peanuts";
document.write(
    "user input: " + lowerCase+
    "<br/> upper case: "+
    lowerCase.toUpperCase()+"<br/>"

);

// 11.
// Write a program that takes user input. Convert and
// show the input in title case.

var userInput = "javacript";
var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("user input: "+
userInput+"<br/> title case: "+
titleCase +"<br/>"
);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.56;
var str = num.toString();
var result;
for(var i = 0; i<num.toString().length; i++){
    if(num.toString().slice(i,i+1) === "."){
        result = num.toString().slice(0,i)+num.toString().slice(i+1);
    }else{
        console.log(" not found")
    }
}
document.write("number: "+num+"<br/> result: "+result) +"<br/>";

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var flag = true
while (flag) {
    var userName = prompt("Enter User Name : ")
    var count = 0;
    for (var i = 0; i < userName.length; i++) {
        if (userName.slice(i, i + 1) === "@" | userName.slice(i, i + 1) === "," | userName.slice(i, i + 1) === "." | userName.slice(i, i + 1) === "!") {
            count = count - 1
        } else {
            count = count + 1
        }
    }
    var total = userName.length;
    if (total === count) {
        flag = false
    }
    else {
        alert("Enter a valid User Name")
    }
}
alert(userName)


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
 
var a = ["cake","apple pie", "cookie","chips","patties"]
var user =prompt("welcome  to ABC bakery, what do you want to order sir/ma'am")
var lowerCase = user.toLowerCase();
var b = a.indexOf(lowerCase)
if(b<0){
    alert("we are sorry"+lowerCase+"is not available in our bakery")
}
else{
    alert(lowerCase+"is available at index "+b+"in our bakery ") +"<br/>"

}



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



var pass = prompt("Enter a valid password \n" +
    "a. It should contain alphabets and numbers\n " +
    "b.  It should not start with a number\n" +
    "c.  It must at least 6 characters long");
if (pass.length >= 6){
    if(pass.slice(0,1) <= String.fromCharCode(65)){
        alert("Password  can not begin with number ")

    }
    else {
        alert("Entered password 123cmd")
    }
}
else{
    alert("Please enter a valid password")+"<br/>"
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University Of Karachi";
var arr = university.slice()
document.write("<br/>")
for(var i = 0; i < arr.length; i++){
    document.write(arr[i]+"<br/>");

}

// 17. Write a program to display the last character of a user
// input.

var input = prompt("Enter country name");
var lastIndex = input.slice(-1);
alert(lastIndex)+"<br/>";

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var the_count = 0;
var fox = "The quick brown fox jumps over the lazy dog";

for(var i = 0; i<fox.length; i++){
    if(fox.toLowerCase().slice(i,i+3) === "the"){
        the_count++;
    }
}
document.write("text: "+fox+
"<br/> there are "+the_count+
"occurence(s) of the word 'the'" +"<br/>"
);

// //chap 26-30 

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var number = 3.45214;
var Round_off_Number = Math.round(3.45214);
var Floor_Number = Math.floor(3.45214);
var Ceil_Number = Math.ceil(3.45214);
document.write("number: " +number+"<br/>"+
      "Round off values:  " +Round_off_Number+"<br/>"+
      "Floor values:  " +Floor_Number+"<br/>"+
      "Ceil values:  " +Ceil_Number+"<br/>"
);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var number = -2.673;
var Round_off_Number = Math.round(-2.673);
var Floor_Number = Math.floor(-2.673);
var Ceil_Number = Math.ceil(-2/673);
document.write("number: " +number+"<br/>"+
      "Round off values:  " +Round_off_Number+"<br/>"+
      "Floor values:  " +Floor_Number+"<br/>"+
      "Ceil values:  " +Ceil_Number+"<br/>"
);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var number = -4;
var absolute = Math.abs(-4);
document.write(
    "the absolute value of" +number+
    " is " + absolute + " "
);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.



var dice = Math.random();
var n = (dice * 6)+1;
var a = Math.round(n);
document.write(
    "The random value of dice" + a + " "
);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser



var h = Math.round((Math.random() * 6) + 1);
var t = Math.round((Math.random() * 6) + 1);;
document.write(+ h + "<br/> random coin value: Head <br/> <br/> <hr/>");
document.write(+ t + "<br/> random coin value: Tails <br/>");

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var random = Math.floor(Math.random()* 100 ) + 4;
document.write("the random number between 1 to 100: " +random + "<br/>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
 
var weight =prompt("Enter your weight in kilogram");
var parse = parseInt(weight);
document.write("The weight of user is: " +parse+ "kgs")

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var s = prompt("Enter any number between 1 to 10");
var n = Math.floor(Math.random() * 10)+3;
if(s ==! n){alert ("Congratulations");}
else {alert("Sorry, better luck next time");}

//chap31-34

// 1. Write a program that displays current date and time in
// your browser.

function dateNtime(){
var date = new Date ();
document.write(date);
}
dateNtime();

// 2. Write a program that alerts the current month in words.
// For example December.

 var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December" ]
 var now = new Date();
 var month = now.getMonth();
 var currentMonth = monthArray[month];
 document.write("Current Month: " +currentMonth);


//  3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert("Today is " + nameOfToday);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var dayNames = ["Sat","Mon","Tue","Wed","Thurs","Fri"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday === dayNames[0] || nameOfToday === dayNames[1]) {
    document.write("It's Funday");
}else{
    document.write("It's Working day :'(");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

 var now = new Date ();
 var theDay = now.getDate();
 if (theDay < 16 ){
     document.write("First fifteen days of the month");
 }
 else document.write("Last days of the month");


//  6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var currentDate = new Date();
var miliseconds = currentDate.getTime();
var minutes = miliseconds / 60000;
document.write("Current date: "+ currentDate + "<br/>" );
document.write("Elapsed miliseconds since january 1, 1970: "+ miliseconds + "<br/>");
document.write("Elapsed minutes since januray 1, 1970: " + minutes + "<br/>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var currentDate = new Date();
var hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
}
else alert ("It's PM");

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var laterDate = new Date("Decemer 31, 2020");
document.write("Later Date: " + laterDate);
 
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015


var today = new Date();
var oldDate = new Date("June 18, 2015");
var msToday = today.getTime();
var msOldDate = oldDate.getTime();
var msDiff = msToday - msOldDate;
var dDIFF = msDiff / (1000 *60 * 60 * 24);
dDIFF = Math.floor(dDIFF);
alert(dDIFF + "days have passed since 1st Ramadan, 2015");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var today = new Date();
var oldDate = new Date("January 1, 2015");
var msToday = today.getTime();
var msOldDate = oldDate.getTime();
var msDiff = msToday - msOldDate;
var dDiff = msToday - msOldDate;
var dDiff = msDiff / 1000 ;
dDIFF = Math.floor(dDiff);
document.write("on reference date" + today +"," + dDiff + "seconds had passed  since beginning of 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var today = new Date();
document.write("Current Date: " + today + "<br/>");
var oneHourAgo = today.setHours(14);
document.write("1 hour ago, it was" +today);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var today = new Date();
document.write("current date: " + today + "<br/>");
var yearsAgo = today.setFullYear(1920);
document.write("100 years back, it was " + today);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = prompt("Enter your age");
var birthYear = 2019 - userAge;
document.write("Your age is " + userAge + "<br/>");
document.write("Your birth year is " +birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var CustomerNam = "ABC Customer";
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December" ];
var today = new Date();
var theDay = today.getMonth();
var nameOfMonth = monthNames[theDay-1];
var numUnits = 410;
var chargeUnit = 16;
var netAmount = numUnits * chargeUnit;
var latePayment = 350;
var grossAmount = netAmount + chargeUnit;

document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>ABC Customer</b><br />");
document.write("Month: " + "<b>" + nameOfMonth + "</b><br />");
document.write("Number of units: "+ "<b>" + numUnits + "</b><br />");
document.write("Charges per unit: "+ "<b>" + chargeUnit + "</b><br />");
document.write("Net amount payable (within due date): "+ "<b>" + netAmount + "</b><br />");
document.write("Late payment surcharge: "+ "<b>" + latePayment+ "</b><br />");
document.write("Gross amount payable (after due date): "+ "<b>" + grossAmount + "</b><br />");


//chap 35-38

// 1. Write a function that displays current date & time in your
// browser.

function dateNtime(){
    var date = new Date();
    document.write(date);
}
dateNtime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function userGreeting () {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + " " + lastName;
    alert("Welcome" + fullName);
}
userGreeting();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.



function sumNumbers(){
    var firstNum = +prompt("Enter your first number");
    var secNum = +prompt("Enter your second number");
    var sum = firstNum + secNum;
    alert(sum)

}
sumNumbers();



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function Calculator(num1 ,num2){
    var a = num1;
    var b = num2;
    document.write(a + b);
}

Calculator(5, 5);

// 5. Write a function that squares its argument.

function square(num) {
    var square = Math.pow(num, 2);
    document.write(square);
}
square(7);

// 6. Write a function that computes factorial of a number.

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else return num * factorial(num - 1);
}
document.write(factorial(5));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting(start, end) {
    var start =prompt("Enter start number");
    var end = prompt("Enter end number");
    var array = [];
    for (var i = start; i <= end; i++){
        document.write(array.push(i));

    }
    return array;
}
counting();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perp) {
base = prompt("Enter base length");
perp = prompt("Perpendicular height");
return Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));

}

document.write("Hypotenuse of triangle is " +calculateHypotenuse());

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

var length = prompt("Enter the length of rectangle");
var width = prompt("Enter the width of rectangle");

function area(length,  width) {
    return length * width;
}
document.write("The area of rectangle is " + area(length, width));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrome(str){
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count= 0;
    if(cstr === ""){
        console.log("nothing found!");
        return false;
    }
  if ((cstr.length) % 2 === 0){
      count= (cstr.length) /2;

  }else {
      if ( cstr.length === 1){
          console.log(str + "is a palindrome.");
          return true;
      }else {
          count = (cstr.length -1) / 2;
      }
  }

for (var i = 0; i < count;i++ ) {
    if (cstr[i] != cstr.slice(-1-i)[0]){
        console.log(str + "is not a palindrome");
        return false;
    }
}
console.log(str + "is a palindrome");
return true;
}

palindrome("Jamil")

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function upperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++){
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring
    (1);
    }
    return splitStr.join(' ');

}

document.write("STRING : 'the quick brown fox' <br>");
document.write("OUTPUT: " + upperCase("the quick brown fox"));


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(str) {
    var array = str.match(/\w[a-z]{0,}/gi);
    var result = array[0];

    for(var i =1; i < array.length; i++) {
        if(result.length < array[i].length){
            result = array[i];
        }
    }
    return result
}

document.write("String: web development tutorial<br>");
document.write("The longest word: " + longestWord('web development tutorial'));




// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function charCount(str, letter) {
    var letterCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) == letter) {
            letterCount += 1;
        }
    } 
    return letterCount;
}

document.write("string: JSResourceS.com <br> ")
document.write("'o' occurs " + charCount("JSResources.com", "o") + "times within the string");




// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// •
// •
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// •
// •
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle πr 2


function calcCircumference(radius) {
    var circumference =( Math.PI*2)*radius;
    console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

calcCircumference(5);
calcArea(5);
