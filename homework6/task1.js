// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration

function calculateRectangleArea(width, height) {
	let result = width * height; //локальна змінна
	return result;
}

let result = calculateRectangleArea(5, 10);
console.log(result);

// function expression

const calculateRectangleArea2 = function (width, height) {
	let result2 = width * height;
	return result2;
};

const result2 = calculateRectangleArea2(5, 10);
console.log(result2);

// arrow function

const calculateRectangleArea3 = (width, height) => width * height;

//const result3 = calculateRectangleArea3(5, 10);
console.log(calculateRectangleArea3(5, 10));
