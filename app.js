
// input store in variable and show upper and lower case

// let userName = prompt("Enter your name")
// document.write(userName.toLowerCase())
// document.write(userName.toUpperCase())
// console.log(typeof(userName));

// **********************************************************
// input are in string formate it can be converrted by using Number property

// let password = prompt("Enter your password")
// document.write(password)

// let passwordInNumber =Number(password)
// console.log(typeof(passwordInNumber));

// ******************************************************************

// let FirstName = prompt("Enter your Firstname")
// document.write(FirstName)

// let LastName = prompt("Enter your Lastname")
// document.write(LastName)

// let Email = prompt("Enter your Email")
// if(Email=="bilal@gmail.com"){
//     alert("you are already registerd")
// }else{
//     document.write(Email)
// }

// let Password = prompt("Enter your password")
// let confirmPassword = prompt("Confirm your password")
// if(Password == confirmPassword){
//     document.write(Password)
// }else{
//     alert("your password is incorrect")
// }


// **********************************************************************************

// ****************** FOR EACH LOOP ****************
// const myCoding =[
//     {
//         languagename: "javascript",
//         filename : "JS"
// },
// {
//     languagename : "python",
//     filename:"py"
// },
// {
//     languagename :"Ruby",
//     filename : "Ry"
// }]

// myCoding.forEach(element => {
//     console.log(element.filename)
//     console.log(element.languagename)
    
// });

// --------------------------------------------------------------------------
// ************************************** filter**********

// const myArray = [1,2,3,4,5,6,7,8,9,10,11,12]

// const newarray = myArray.filter( (num)=>num >6)
// console.log(newarray);

// another way ++++++++++++

// const newarray = myArray.filter((num) =>{
//     return num > 5
// })
// console.log(newarray);

// ---------------------------------------------------------------
// *****************************Map AND filter both using chaining**************

// const myArray = [1,2,3,4,5,6,7,8,9]

// const result = myArray.map((num) => num * 10).filter((num) => num < 40)

// console.log(result);

// --------------------------------------------------------------------

// ************************ reduse 

// const myArray = [1,2,3,4,5,6,7]

// const result = myArray.reduce((acc , curr)=> acc + curr ,0)

// console.log(result);

// ----------------------Shoping Cart using reduse --------------

// const ShopingCart =[
//     {
//         itemName: 'JS-Course',
//         price : 799
//     },
//     {
//         itemName: 'Python',
//         price : 699
//     },
//     {
//         itemName: 'Java',
//         price : 999
//     },
//     {
//         itemName: 'Data-structure',
//         price : 1200
//     },
//     {
//         itemName: 'Data-science',
//         price : 1700
//     },
//     {
//         itemName: 'Artificial Inteligence',
//         price : 1000
//     }
// ]

// const priceToBuy = ShopingCart.reduce((acc , item)=>
// acc + item.price ,0)

//these gives total price of all course

// console.log(priceToBuy);

// ---------------------------------------------------------------

// *********************************** Filter
// const books = [
//     {
//         title:'book-one', genre :'fiction',publish:'1981',edition:'2004'
//     },
//     {
//         title:'book-two', genre :'Non-fiction',publish:'1992',edition:'2008'
//     },
//     {
//         title:'book-three', genre :'history',publish:'1999',edition:'2007'
//     },
//     {
//         title:'book-four', genre :'Non-fiction',publish:'1989',edition:'2010'
//     },
//     {
//         title:'book-five', genre :'science',publish:'2009',edition:'2014'
//     },
//     {
//         title:'book-six', genre :'fiction',publish:'1987',edition:'2010'
//     },
//     {
//         title:'book-seven', genre :'history',publish:'1986',edition:'1996'
//     },
//     {
//         title:'book-eight', genre :'science',publish:'2011',edition:'2016'
//     },
//     {
//         title:'book-nine', genre :'Non-fiction',publish:'1981',edition:'1989'
//     }
// ]

// const result = books.filter((BK)=>BK.genre === 'history')

// const result = books.filter((BK)=>{
// return BK.genre === 'history' && BK.publish >= 2000
// })

// console.log(result);

// -----------------------------------------------------------------
// **********************ARRAYS PRACTISE WORK************************
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

// let arr = ['ssc', 'bcs', 'hsc', 'bs', 'bcom', 'msc', 'mphil','phD']

// document.write(arr)


// -----------------------------------------------------------------
// 8.    Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// var studentNames = ["Bilal", "Sufyan","Ahtasham"]
// var studentScores = [320,230,480]


// function calculatePercentage(studentScores,totalMarks) {
//     return(studentScores/ totalMarks)*100
// } 

// for (var i = 0; i <=studentNames.length; i++){
//     var studentNames = studentNames[i]
    
//     var studentScores = studentScores[i]
//     var totalMarks = 500;
//     var percentage = calculatePercentage(studentScores,totalMarks)
// }
// console.log(
//     `${studentNames}'s Score: ${studentScores}, Percentage: ${percentage.toFixed(2)}%`
//   );


// -----------------------------------------------------------------

// 9. Initialize an array with color names. Display the array 
// elements in your browser.
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.

// let colorArray = ['black', 'white', 'blue', 'green', 'yellow'];
// console.log(colorArray);
// let userinput = prompt('What color you want to add')
// colorArray.unshift(userinput);
// console.log(colorArray);

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.


// let colorArray = ['black', 'white', 'blue', 'green', 'yellow'];
// console.log(colorArray);
// let userinput = prompt('What color you want to add')
// colorArray.push(userinput);
// console.log(colorArray);

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.


// let colorArray = ['black', 'white', 'blue', 'green', 'yellow'];
// let index = parseInt(prompt('which index number do you want'))
// let color = prompt('which color do you want')

// colorArray.splice(index,0, color)
// console.log(colorArray);

// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser

// let colorArray = ['black', 'white', 'blue', 'green', 'yellow'];
// let index = parseInt(prompt('which index number do you want'))
// let whichIndexNo = parseInt(prompt('which index number do you delete please enter'));

// colorArray.splice(index,whichIndexNo)
// console.log(colorArray);


// ----------------------------------------------------------------
// 10.   Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// let studentScoreArray = [90,20,40,70,80,30,10,60,50]
// console.log(studentScoreArray.sort());


// ----------------------------------------------------------------
// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

// let cities = ['New York', 'toronto', 'San Francisco', 'san-tx', 'chile'];
// let selectedCities = [];

// selectedCities = cities.slice(1, 4)
// console.log(selectedCities);


// ----------------------------------------------------------------
// 12.    Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

// var arr = ['This', 'is', 'my', 'cat'];
// newArr = arr.join('');
// console.log(newArr); 

// ----------------------------------------------------------------
// 13.  Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

// let fifoQueue = ['monitor', 'desktop','pc', 'laptop'];

// console.log("Dequeued Value 1:", fifoQueue.shift());
// console.log("Dequeued Value 2:", fifoQueue.shift());
// console.log("Dequeued Value 3:", fifoQueue.shift());
// console.log("Dequeued Value 4:", fifoQueue.shift());


// ----------------------------------------------------------------

// 14.  Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In- 
// First Out)


// let fifoQueue = ['monitor', 'desktop','pc', 'laptop'];

// console.log("Dequeued Value 1:", fifoQueue.pop());
// console.log("Dequeued Value 2:", fifoQueue.pop());
// console.log("Dequeued Value 3:", fifoQueue.pop());
// console.log("Dequeued Value 4:", fifoQueue.pop());


// ----------------------------------------------------------------
// 15.  Write a program to store phone manufacturers (Apple, 
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<label for="manufacturer">Select a Phone Manufacturer:</label>');
// document.write('<select id="manufacturer">');


// for (var i = 0; i < manufacturers.length; i++) {
//   document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// document.write('</select>');


// ----------------------------------------------------------------
// 1. Declare and initialize an empty multidimensional array

// let multidimensionalArray =[[],[],[]]

// multidimensionalArray[0][0]='1'
// multidimensionalArray[0][1]='2'
// multidimensionalArray[1][0]='3'
// multidimensionalArray[1][1]='4'
// multidimensionalArray[2][0]='5'
// multidimensionalArray[2][1]='6'
// console.log(multidimensionalArray);

// ----------------------------------------------------------------
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// let matrix = [
//     [1, 2, 3, 4],
//     [7, 8, 9,0],
//     [6, 5, 1,2]
// ]

// for (let i = 0; i <matrix.length; i++) {
//     document.write("<h2>" + matrix[i] + "</h2>")
// }


// ----------------------------------------------------------------
// 3. Write a program to print numeric counting from 1 to 10.

// for(let i = 1; i <= 10; i++){
// document.write(i + "</br>")
// }

// ----------------------------------------------------------------
// 4.  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// let tableNumber = parseInt(prompt("enter number which table do you want to print"))
// let range = parseInt(prompt("enter range which table do you want to print"))

// for (let i = 1; i <= range; i++){
//     document.write(tableNumber + "*" + i + "=" + tableNumber*i + "<br/>");
// }


// ----------------------------------------------------------------
// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'orange']

// for(let i=0; i<fruits.length; i++){
//     document.write("Elemnet at index"+ i +fruits[i]+"<br/>")
// }

// ----------------------------------------------------------------
// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// A-----
// for (var i = 1; i <= 15; i++) {
// document.write(i+" ")
// }

// B-----
// for (var i = 10; i >= 1; i--) {
// document.write(i+" ")
// }

// C-------
// for (var i = 0; i <= 20; i+=2) {
//     document.write(i+" ")
//     }

// D------
// for (var i = 1; i <= 19; i+=2) {
//     document.write(i+" ")
//     }

// E----
// for (var i = 0; i <= 20; i+=2) {
//     document.write(i+" K")
//     }


// ----------------------------------------------------------------

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:





// ----------------------------------------------------------------

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var A = [-100,-24, -53, -78, -91, -12];

// var max = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i];
//     }
//     console.log(max);
// }


// ----------------------------------------------------------------

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var A = [-100,-24, -53, -78, -91, -12];

// var min = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] < min) {
//         min = A[i];
       
//     }
// }



// ----------------------------------------------------------------

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + " ,");
//     }
// }












































