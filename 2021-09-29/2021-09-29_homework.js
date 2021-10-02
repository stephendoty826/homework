// // 1. Positive Numbers
// // Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

// let arr = [1, -5, 2, -6, 7]

// function onlyEven(array){
//     let newArray = array.filter(num => num >= 0)
//     return newArray
// }

// let positiveArray = onlyEven(arr)

// console.log(positiveArray)



// // 2. Even Numbers
// // Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// let arr = [1, 5, 2, 6, 7]

// function onlyEven(array){
//     let newArray = array.filter(num => num % 2 == 0)
//     return newArray
// }

// let evenArray = onlyEven(arr)

// console.log(evenArray)



// // 3. Square the Numbers
// // Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// let arr = [1, 4, 7, 3, 9, 8]

// function squareTheNumbers(array){
//     let newArray = array.map(num => num * num)
//     return newArray
// }

// let squaredArray = squareTheNumbers(arr)

// console.log(squaredArray);



// // 4. Cities 1
// // Write a function which takes an array of city objects such as below as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

// var cities = [
// { name: 'Los Angeles', temperature: 60.0},
// { name: 'Atlanta', temperature: 52.0 },
// { name: 'Detroit', temperature: 48.0 },
// { name: 'New York', temperature: 80.0 } ]

// function coolCities(arrayOfCities){
//     let newArray = arrayOfCities.filter(cityObj => cityObj.temperature < 70)
//     return newArray
// }

// let coolerCities = coolCities(cities)

// console.log(coolerCities);



// // 5. Cities 2
// // Write a function which takes an array of city objects as input and returns an array of the cities names.

// var cities = [
// { name: 'Los Angeles', temperature: 60.0},
// { name: 'Atlanta', temperature: 52.0 },
// { name: 'Detroit', temperature: 48.0 },
// { name: 'New York', temperature: 80.0 } ]

// function cityNames(arrayOfCities){
//     let cityNamesArray = arrayOfCities.map(cityObj => cityObj.name)
//     return cityNamesArray
// }

// let namesOfCities = cityNames(cities)

// console.log(namesOfCities);



// // 6. Good Job!
// // Print out 'Good Job, {{name}}!' for each person's name, one on a line.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(name => console.log(`Good Job, ${name}!`))



// // 7. Sort an array
// // Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort()

// console.log(people);



// // 8. Sort an array, 2
// // Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort((a, b) => a.length - b.length)

// console.log(people);



// // 9. Sort an array, 3
// // Given an array of array of numbers like:

// var arr = [
// [1, 3, 4],
// [2, 4, 6, 8],
// [3, 6] ];

// // Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ]

// function sumOfArray(arrayOfNumbers){
//     let sum = 0
//     arrayOfNumbers.forEach(num => {sum += num})
//     return sum
// }

// let sortedArray = arr.sort((a, b) => sumOfArray(a) - sumOfArray(b))

// console.log(sortedArray);

// var arr2 = [[5, 1, 1, 6], [5, 5, 2, 7, 8], [1, 1, 1, 1, 5, 2, 2], [4, 8, 3, 8, 9]]

// let sortedArray2 = arr2.sort((a, b) => sumOfArray(a) - sumOfArray(b))

// console.log(sortedArray2)



// // 10. 3 times
// // Given this function:

// function call3Times(fun){ 
//     fun(); fun(); fun(); 
// }

// // Use the call3Times function to print "Hello, world!" 3 times.

// function fun(){
//     console.log("Hello, world!")
// }

// call3Times(fun)



// // 11. n times
// // You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// // > callNTimes(5, hello)
// // Hello, world!
// // Hello, world!
// // Hello, world!
// // Hello, world!
// // Hello, world!
// // You are allowed to use a loop in the implementation of callNTimes.

// function fun(){
//     console.log("Hello, world!")
// }

// function goodbye(){
//     console.log("Goodbye!")
// } 

// function callNTimes(numberOfTimes, func){
//     for(let i = 1; i <= numberOfTimes; i++){
//         func()
//     }
// }

// callNTimes(6, fun)

// callNTimes(3, goodbye)



// // 12. Sum an array
// // Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// // > sum([1, 2, 3])
// // 6

// function sum(arrayOfNumbers){
//     let sum = 0code
//     arrayOfNumbers.forEach(num => {sum += num})
//     return sum
// }

// let arr = [1, 2, 3]
// let arr2 = [4, 8, 3, 8, 9]

// console.log(sum(arr))
// console.log(sum(arr2))



// // 13. Acronym
// // Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// // > acronym(['very', 'important', 'person'])
// // 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'

// let vip = ['very', 'important', 'person']

// let nasa = ['national', 'aeronautics', 'space', 'administration']

// let lol = ["laughing", "out", "loud"]

// let yolo = ["you", "only", "live", "once"]

// let test = ['avocado', 'banana', 'cantelope', 'dingleberry']

// // function acronym(arrayOfWords){
// //     wordAcronym = arrayOfWords.map(word => {
// //         let splitWord = word.split("")
// //         let acronymArray = splitWord.reduce(preVal => preVal.toUpperCase())
// //         return acronymArray
// //     })
// //     return wordAcronym.join("")
// // }

// // After Veronica's explanation reduce and the existence of initialValue. 
// function acronym(arrayOfWords){
//     let acronym = arrayOfWords.reduce((acc, current)=> {
//         return acc + current[0].toUpperCase()
//     }, "")
//     return acronym
// }


// let acronym1 = acronym(yolo)

// console.log(acronym1);







