// <!-- chap# 38-42 -->

// <!-- 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


function power(a, b) {
    return Math.pow(a, b)
}

console.log(power(2, 3))

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...


function leapYear() {
    var year = +prompt("Enter Year")
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        alert(year + "is leap year")
    }
    else {
        alert(year + "is not a leap year")
    }
}


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2 -->
// <!-- Calculate area of triangle using 2 functions

function triangle(a, b, c) {
    var s = (a + b + c) / 2
    return s
    function area() {
        var area = s(s - a)(s - b)(s - c);

        return area
    }

}
console.log("The Area of Trianlge is :" + triangle(5, 4, 6))

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function marks(chemistry, physics, maths) {
    function average() {
        var avg = (chemistry + physics + maths) / 3
        return avg


    }
    function percentage() {
        var per = (chemistry + physics + maths) / 300 * 100
        return per
    }
    console.log(`Marks avg ${average()} Marks Percentage ${percentage()}`)
}
marks(80, 70, 70)



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function indexOf(str, queryStr) {
    for (var i = 0; i < str.lenght; i++) {
        for (var j = 0; j < queryStr.lenght; j++) {
            if (str[i + j] !== queryStr[j]) {
                break
            }
            if (j == queryStr.lenght - 1) {
                return i
            }
        }
    }
    return -1
}
var index = indexOf("Hello world", "w")
console.log(index)

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function sentence(str) {
    var vowels = ["a", "e", "i", "o", "u"]
    return str.split("").filter(
        function (elm) {
            return vowels.indexOf(elm.toLowerCase()) == -1
        }
    ).join("")
}
console.log(sentence("Good Night"))


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence -->


// <!-- “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

var sentence = "Pleases read this application and give me gratuity";
var vowel = 0;
function switchVowel(str) {
    var strArr = str.split('');
    for (var i = 0; i < strArr.length; i++) {
        switch (strArr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (strArr[i + 1]) {
                    case 'a':
                        vowel++;
                        break;
                    case 'e':
                        vowel++;
                        break;
                    case 'i':
                        vowel++;
                        break
                    case 'o':
                        vowel++;
                        break;
                    case 'u':
                        vowel++;
                        break;
                    default:
                        break
                }
                break

            default:
                break
        }

    }
}
switchVowel(sentence)




// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function distance() {
    var input = +prompt("Enter distance in KM");
    function meter() {
        var meter = input * 1000;
        return meter;
    }

    function feet() {
        var feet = input * 3280.84;
        return feet;
    }


    function inches() {
        var inches = input * 39370.1;
        return inches;
    }

    function centimeters() {
        var centimeters = input * 100000;
        return centimeters;
    }

    document.write("Distance in meter: " + meter() + "<br>");
    document.write("Distance in feet: " + feet() + "<br>");
    document.write("Distance in inches: " + inches() + "<br>");
    document.write("Distance in centimeter: " + centimeters());

}
distance();



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calPyout() {
    var workingHours = prompt("Enter total working hours");
    switch (true) {
        case workingHours > 40: {
            var amountPaid = (workingHours - 40) * 12;
            alert("Your overtime is " + amountPaid);
            break;
        }
        default: {
            alert("Sorry not sufficient working hours");
        }
    }
}
calPyout();


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the
// withdrawer

// -->



function currencyNotes() {
    var amount = prompt("Enter amount to withdraw");
    var hundred = Math.floor(amount / 100);
    var fifty = Math.floor((amount % 100) / 50);
    var ten = Math.floor((amount % 100) % 50) / 10;
    var remaining = Math.floor(((amount % 100) % 50) % 10);
    document.write("You will have" + hundred + "hundred notes" + fifty + "fifty notes" + ten + "ten notes");

}
currencyNotes();



// <!-- chap#43-48 -->


// <!-- 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function removeRow(child) {
    var row = child.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(row);
}


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser. -->
var counter = document.getElementById('counter')
var num = 0;
counter.innerHTML = 0
function increase() {
    num++;
    counter.innerHTML = num

}
function decrease() {
    num--;
    counter.innerHTML = num

}

// <!-- 
// chap#49-52

// 1. Create a signup form and display form data in your web
// page on submission.

var userName = document.getElementById('userName')
var email= document.getElementById('email')
var pass = document.getElementById('pass')
var cpass = document.getElementById('cpass')
var singUpDiv = document.getElementById('singUpDiv')
function singup(){
    if (userName.value === '' && email.value === '' && pass.value ==='' && cpass.value === ''){
        singUpDiv.innerHTML = "Kindly Inster all Value"
    }
    if(pass.value===cpass.value){
        singUpDiv.innerHTML = `Thank you ${userName.value} for registration`
    }
    else{
        singUpDiv.innerHTML="Password is not match"
    }
}


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
var div = document.getElementById('para')

var text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima ducimus cupiditate dignissimos nobis a rerum soluta ut dolore esse nam, quas, quod vitae optio, itaque vel incidunt in ex.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nisi nulla! Consequuntur in minus ipsa labore exercitationem, rem vel delectus itaque molestiae modi, unde non officia ipsam, minima ea dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium sapiente dolorem minus esse totam ratione beatae, amet explicabo ipsum delectus hic nihil possimus eius tempore pariatur accusamus aspernatur aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem amet incidunt accusantium voluptates eius minus saepe. Maxime numquam inventore, assumenda illum, impedit excepturi, sed aperiam labore nam saepe adipisci tempore. <<<`
var text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repudiandae asperiores voluptatibus, aliquid,nesciunt itaque fuga, aperiam quis laborum natus voluptas aspernatur tempore nisi laudantium pariatur perspiciatis ut vero recusandae. >>>>`
function showMore() {
    div.children[0].innerText = text1
    div.children[1].innerText = 'Show Less'
    div.children[1].getAttributeNode('onclick').value = 'showLess()'

}
function showLess() {
    div.children[0].innerText = text2
    div.children[1].innerText = 'Show More'
    div.children[1].getAttributeNode('onclick').value = 'showMore()'

}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row. -->

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}



// <!-- chap53-58

// 1-Consider you have 4 images in a file as shown below: 


// Modal code is available in this assignment file.
var arrImgSrc = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.png']
        var imgDiv = document.getElementById('img')
        var modal = document.getElementById('modal');
            modal.classList.add('modal-open')
            modal.classList.remove('modal-close')
        for (var i = 0; i < arrImgSrc.length; i++) {
            var img = document.createElement('img')
            var imgAtt = document.createAttribute('src')
            img.src = arrImgSrc[i]
            img.setAttribute('onclick','open(arrImgSrc[i])')
            imgDiv.appendChild(img)
        }
        function open(imgSrc) {
            console.log('clicked')
            
            modal.classList.add('modal-open')
            modal.classList.remove('modal-close')
            var imgModal = document.getElementById('modal-img')
            imgModal.src = imgSrc;
        }
        function onClosedImagModal(){
            modal.classList.remove('modal-open')
            modal.classList.add('modal-close')
            setTimeout(()=>{ modal.style.display = "none"; }, 550)
        }



// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph. -->
    var pTag = document.getElementById('zoom')
    var size= 10
    function zoomIn(){
        size = size+10
        pTag.style.fontSize = `${size}px`
    }
    function zoomOut(){
        size = size-10
        pTag.style.fontSize = `${size}px`
    }

// <!-- chap58-67

// 1- Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>

// i- Get element of id “main-content” and assign them in a variable.
// ii- Display all child elements of “main-content” element.
// iii- Get all elements of class “render” and show their innerHTML
// in browser.
// iv- Fill input value whose element id first-name using javascript.
// v-  Repeat part iv for id ”last-name” and “email”.

var mainContent = document.getElementById('main-content')
console.log(mainContent.children)
var render = document.getElementsByClassName('render')
for (var i=0;i<render.length;i++){

    console.log(render[i].innerHTML)
}

var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var email = document.getElementById('e-mail')

firstName.value= "Jamil"
lastName.value="Ahmed"
email.value="Jamil.Ahmed@gmail.com"




// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName ”.
// vi. Get parent node and node type of element having id “email”
console.log(document.getElementById("form-content").nodeType)
console.log(document.getElementById("lastName").childNodes)
console.log(document.getElementById("lastName").childNodes[0].value="LastName Update")

console.log(mainContent.firstChild,mainContent.lastChild)
console.log(document.getElementById('lastName').nextSibling,document.getElementById('lastName').previousSibling)
console.log(document.getElementById('email').parentElement)


