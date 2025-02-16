// Завдання 6: Сортування масивів

// У вас є вихідний масив сonst numbersList = [1,10,14,2,4,5,43,34]
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newSortedList = numbersList.slice(); //новий масив, копія numbersList
newSortedList.sort((a, b) => a - b);

console.log(numbersList);
console.log(newSortedList);

//Additional task1

//write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0

function averageNumber(numbersList) {
	if (numbersList.length === 0) {
		return 0;
	}
	const sum = numbersList.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
	);
	return Math.round(sum / numbersList.length);
}
const newAverageArray = [1, 3, 5, 12, 15];
console.log(averageNumber(newAverageArray));

//Additional task2

// create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. no floats or non-positive integer will be passed.
// for java those integers will come as double precision (long)
// for example, when an array will is passed like [19, 5, 42, 2, 77], the output should be 7
// [10, 34344553, 3453445, 3453545353453] should return 3453455

function twoSmallestNumbers(numbers) {
	numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}
console.log(twoSmallestNumbers([19, 5, 42, 2, 77]));

//Additional task3

//Given an array of numbers, return the difference between the largest and smallest Values.
//For example [23, 3, 19, 21, 16] should return 20 (23-3)
//[1, 434, 555, 34, 112] should return 554 (555-1)
//The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

function findDifference(numbers) {
	numbers.sort((a, b) => a - b);
	return numbers[numbers.length - 1] - numbers[0];
}
console.log(findDifference([23, 3, 19, 21, 16]));
console.log(findDifference([1, 434, 555, 34, 112]));
