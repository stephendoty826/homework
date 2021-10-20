// // Hello, you!
// // Write a function hello which given a name, says hello to the name. Use the following template:

// // function hello(name) {
//      // put your code here
// // }
// // hello('Mustache');
// // Make the above program print the following to the console:

// // Hello, Mustache!

// function hello(name){
//     console.log(`Hello, ${name}!`);
// }

// hello("Sam")



// // Hello, you! Part 2
// // Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

// function hello(name = "world"){
//     console.log(`Hello, ${name}!`);
// }

// hello()

// hello("Jason")



// // Madlib
// // Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// // Example:

// // madlib('Anushka', 'art');
// // Output

// // 'Anushka's favorite subject in school is art.'

// function madlib(name, subject){
//     return (`${name}'s favorite subject in school is ${subject}`);
// }

// console.log(madlib("William", "math"))



// // Tip Calculator
// // Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// // good -> 20%

// // fair -> 15%

// // bad -> 10%

// // tipAmount(100, 'good');
// //   20

// // tipAmount(40, 'fair');
// //   6

// function tipAmount(bill, service){
//     if (service == "good"){
//         return bill * 0.2
//     }
//     else if (service == "fair"){
//         return bill * 0.15
//     }
//     else if (service == "bad"){
//         return bill * 0.1
//     }
//     else{
//         console.log("Please enter valid service level: 'good', 'fair', 'bad'")
//     }
// }  

// console.log(tipAmount(100, "good"))
// console.log(tipAmount(100, "fair"))
// console.log(tipAmount(100, "bad"))
// console.log(tipAmount(100, "awesome"))



// // Tip Calculator 2
// // Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

// // > totalAmount(100, 'good')
// //   120

// // > totalAmount(40, 'fair')
// //   46

// function tipAmount(bill, service){
//     if (service == "good"){
//         return bill * 0.2
//     }
//     else if (service == "fair"){
//         return bill * 0.15
//     }
//     else if (service == "bad"){
//         return bill * 0.1
//     }
//     else{
//         console.log("Please enter valid service level: 'good', 'fair', 'bad'")
//     }
// } 

// function totalAmount(bill, service){
//     return tipAmount(bill, service) + bill
// }

// console.log(totalAmount(100, "good"))
// console.log(totalAmount(100, "fair"))
// console.log(totalAmount(100, "bad"));
// console.log(totalAmount(100, "awesome"));



// // Tip Calculator 3
// // Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

// // splitAmount(100, 'good', 5);
// //   24

// // splitAmount(40, 'fair', 2);
// //   23

// function tipAmount(bill, service){
//     if (service == "good"){
//         return bill * 0.2
//     }
//     else if (service == "fair"){
//         return bill * 0.15
//     }
//     else if (service == "bad"){
//         return bill * 0.1
//     }
//     else{
//         console.log("Please enter valid service level: 'good', 'fair', 'bad'")
//     }
// } 

// function totalAmount(bill, service){
//     return tipAmount(bill, service) + bill
// }

// function splitAmount(bill, service, partySize){
//     return (totalAmount(bill, service)/partySize).toFixed(2)
// }

// console.log(splitAmount(100, "good", 7));
// console.log(splitAmount(100, "fair", 7));
// console.log(splitAmount(100, "bad", 7));
// console.log(splitAmount(100, "awesome", 7));



// // Print Numbers
// // Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// // printNumbers(1, 10);
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// function printNumbers(num1, num2){
//     for (index = num1; index <= num2; index++){
//         console.log(index);
//     }
// }

// printNumbers(6, 13)

// // Bonus
// // Write two versions of the above function. One using a while loop and the other using a for loop.

// function printNumbers(num1, num2){
//     var index = num1
//     while (index <= num2){
//         console.log(index);
//         index++
//     }
// }

// printNumbers(3, 15)



// // Print a Square
// // Write a function printSquare which is given a size and prints a square of that size using asterisks.

// // printSquare(5);
// // *****
// // *****
// // *****
// // *****
// // *****

// function printSquare(size){
//     for (index = 1; index <= size; index++){
//         console.log("*".repeat(size))
//     }
// }

// printSquare(5)



// // Print a box
// // Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// // printBox(6, 4);
// // ******
// // *    *
// // *    *
// // ******

// function printBox(length, height){
//     console.log("*".repeat(length));
//     for(index = 2; index < height; index++){
//         console.log("*" + " ".repeat(length-2) + "*")
//     }
//     console.log("*".repeat(length));
// }

// printBox(6, 4)



// // Print a Banner
// // Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

// // printBanner('Welcome to DigitalCrafts');
// // ****************************
// // * Welcome to DigitalCrafts *
// // ****************************

// function printBanner(banner){
//     console.log("*".repeat(banner.length + 4))
//     console.log("* " + banner + " *")
//     console.log("*".repeat(banner.length + 4))
// }

// printBanner("Welcome to New Vegas")




// // Factor a Number
// // Write a function factors which is given a number and returns an array containing all its factors. A factor divides a number completely without leaving any remainder. 

// function factors(num1){
//     for(index = 1; index <= num1; index++){
//         if(num1%index == 0){
//             console.log(index);
//         }
//     }
// }

// factors(28)



// // Caesar Cipher
// // Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

// // cipher('Genius without education is like silver in the mine', 13);
// // 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

// var message = "This is a test to see just how much this cipher function...handles punctuation and other symbols. Symbols like & and $ and #..."

// function cipher(message, offset){
//     message = message.toLowerCase()
//     alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     encryptedArray = []
//     for (i = 0; i < message.length; i++){
//         if (alphabet.includes(message[i])){
//             if (alphabet.indexOf(message[i]) + offset <= 25){
//                 encryptedIndex = alphabet.indexOf(message[i]) + offset
//                 encryptedArray.push(alphabet[encryptedIndex])
//             }
//             else {
//                 encryptedIndex = (alphabet.indexOf(message[i]) + offset) - 26
//                 encryptedArray.push(alphabet[encryptedIndex])
//             }
//         }
//         else {
//             encryptedArray.push(message[i])
//         }
//     }
//     return encryptedArray.join("")
// }

// console.log(cipher(message, 5))



// // Caesar Cipher 2
// // Write a function decipher which is given a string, an offset, and returns the original message.

// // decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
// // 'Genius without education is like silver in the mine'

// function decipher(encryptedMessage, offset){
//     alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     decryptedArray = []
//     for (i = 0; i < message.length; i++){
//         if (alphabet.includes(encryptedMessage[i])){
//             if (alphabet.indexOf(encryptedMessage[i]) - offset >= 0){
//                 decryptedIndex = alphabet.indexOf(encryptedMessage[i]) - offset
//                 decryptedArray.push(alphabet[decryptedIndex])
//             }
//             else {
//                 decryptedIndex = 26 + (alphabet.indexOf(encryptedMessage[i]) - offset)
//                 decryptedArray.push(alphabet[decryptedIndex])
//             }
//         }
//         else {
//             decryptedArray.push(encryptedMessage[i])
//         }
//     }
//     return decryptedArray.join("")
// }

// var decryptedMessage = cipher(message, 5)

// console.log(decipher(decryptedMessage, 5))



// // Leetspeak
// // Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// // A => 4 
// // E => 3 
// // G => 6 
// // I => 1 
// // O => 0 
// // S => 5 
// // T => 7

// // leetspeak('Leet');
// // l337

// var test1 = "this is a leetspeak message. I hope it works."

// function leetspeak(message){
//     message = message.toLowerCase()
//     leetMessage = []
//     arr=["a", "e", "g", "i", "o", "s", "t"]
//     leetArr=["4", "3", "6", "1", "0", "5", "7"]
//     for (i = 0; i < message.length; i++){
//         if (arr.includes(message[i])){
//             leetMessage.push(leetArr[arr.indexOf(message[i])])
//         }
//         else{
//             leetMessage.push(message[i])
//         }
//     }
//     return leetMessage.join("")
// }

// console.log(leetspeak(test1));



// // Long-long Vowels
// // Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// // longLongVowels('Good');
// // 'Goooood'
// // longLongVowels('Cheese');
// // 'Cheeeeese'
// // longLongVowels('Man');
// // 'Man'

// function longVowels(message) {
//     longVowelsArr = []
//     var vowels = ["a", "e", "i", "o", "u"]
//     for (i = 0; i < message.length; i++) {
//         if (vowels.includes(message[i])) {
//             if (message[i-1] == message[i]) {
//                 console.log(message[i]);
//                 longVowelsArr.push(message[i].repeat(5))
//             }
//         }
//         else {
//             longVowelsArr.push(message[i])
//             // console.log(message[i]);
//         }
//     }
//     return longVowelsArr.join("")
// }

// var test1 = "Good teeth"

// console.log(longVowels(test1));



// // Sum the numbers
// // Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

// // sumNumbers([1, 4, 8]);
// // 13

// arr = [1, 5, 3, 6]

// function sumNumbers(arrOfNums) {
//     var sum = 0
//     for (i = 0; i < arrOfNums.length; i++) {
//         sum += arrOfNums[i]
//     }
//     return sum
// }

// console.log(sumNumbers(arr));



// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// positiveNumbers([1, -3, 5, -3, 0]);
// [1, 5, 0]
// positiveNumbers([1, 2, 3]);
// [1, 2, 3]
// positiveNumbers([-1, -2, -3]);
// []

// arr = [1, -5, 3, -6, 0, 4, -2, 9]

// function positiveNumbers(arrOfNums) {
//     var positiveArr = []
//     for (i = 0; i < arrOfNums.length; i++) {
//         if (arrOfNums[i] >= 0) {
//             positiveArr.push(arrOfNums[i])
//         }
//     }
//     return positiveArr
// }

// console.log(positiveNumbers(arr));