// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe("fibSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

//   FAIL  ./code-challenges.test.js
//   fibSequence
//     ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

//   ● fibSequence › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//     ReferenceError: fibSequence is not defined




// b) Create the function that makes the test pass.
// PSEUDO:
// Create a function takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// paramter will be number
// input:

// input:
// declare a new variable called newFibArr that will return the end result
// use conditionals for is the number is greater than 2
// use .push to keep pushing the previous number to be added to the new
// output: an array that length containing the numbers of the Fibonacci sequence
// had to google fibonacci sequence
// syntax errors keep happening on lines 61, 62, and 63
// I know on line 64 I need to use .push and I need to add together two instances, but I can't figure out how to set that up properly
// I ended up reaching out to some of my cohort mates to understand how to better set up my function. I understand the pieces of the puzzle, but really struggle with putting them together to make the big picture work. I don't think I would have figured this out on my own. I need to study for loops more.


const fibSequence = (number) => {
    let newFibArr = [1, 1]
    for(let i = 0; i <number-2; i++){
        if(number > 2){
            newFibArr.push(newFibArr[i] + newFibArr[i+1])
        }else {
            return "not a valid entry"
        }       
    }
    return newFibArr
}
 












// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe("oddLeastToGreat", () => {
    const newArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const newArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(oddLeastToGreat(newArr1)).toEqual([-9, 7, 9, 199])
        expect(oddLeastToGreat(newArr2)).toEqual([-823, 7, 23])
    })
})

// FAIL  ./code-challenges.test.js
// oddLeastToGreat
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)

// ● oddLeastToGreat › takes in an array and returns a new array of only odd numbers sorted from least to greatest

//   ReferenceError: oddLeastToGreat is not defined

// b) Create the function that makes the test pass.
//PSEUDO
//input:[4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"] name this newArr1
// input 2: ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"] name this new Arr2
// parameter will be an array
// use modulo 2 to get only odd numbers
// use typeof to extract only the numbers from the array
// use .sort to sort array from least to greatest
// output: [-9, 7, 9, 199] and [-823, 7, 23]

const oddLeastToGreat = (array) => {
    return array.filter(value => {
        if (value % 2 !== 0 && typeof (value) === "number") {
            return array
        }
    }).sort((a, b) => a - b)
}












// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("sum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(sum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sum(numbersToAdd3)).toEqual([])
    })
})

// FAIL  ./code-challenges.test.js
// sum
//   ✕ takes in an array and returns an array of the accumulating sum (1 ms)

// ● sum › takes in an array and returns an array of the accumulating sum

//   ReferenceError: sum is not defined

// b) Create the function that makes the test pass.
// PSEUDO
// input: [2, 4, 45, 9], [0, 7, -8, 12], []
// parameter is an array
// use conditionals
// output: [2, 4, 45, 9], [0, 7, -8, 12], []

const sum = (array) => {
    let newArr = []
    return array.map((value, index) => {
        if (index > 0) {
            return newArr = value + newArr
        } else {
            return newArr = value
        }
    })
}
