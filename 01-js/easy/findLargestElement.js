/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let temp = numbers[0];
    numbers.map(num => {
        if (num > temp) {
            temp = num;
        }
    })
    return temp;
}

module.exports = findLargestElement;