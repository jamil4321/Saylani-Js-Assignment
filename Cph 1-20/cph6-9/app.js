// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write(
    "Result: <br/> The value of a is:" +a+
    "<br/> ----------------"+

    "<br/><br/> The value of ++ a is:"+(++a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a++ is:"+(a++)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of  --a is:"+(--a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a-- is:"+(a--)+
         "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
        ) 


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

var a = 2
var b = 1
var result = --a - --b + ++b + b--;

document.write(" a is ="+a)
document.write("<br/> b is = "+b)
document.write("<br/> result is ="+result +"</br> </br>")

// 3. Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Enter your Name")
alert("Hello" +userName+" have a good day")

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = prompt("Enter a number for Table","5")
var a = Number(table);
var num = 1
document.write(
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"

)

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )
