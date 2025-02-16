// Завдання 1

// Створіть функцію handleNum яка буде приймати 3 параметри.
// a число
// b Колбек функцію яку треба викликати якщо передане число парне
// c Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(number, handleEvenCb, handleOddCb) {
	if (number % 2 === 0) {
		handleEvenCb(number);
	} else {
		handleOddCb(number);
	}
}
function handleEven(number) {
	console.log(`Number ${number} is even`);
}
function handleOdd(number) {
	console.log(`Number ${number} is odd`);
}

handleNum(40, handleEven, handleOdd);
handleNum(33, handleEven, handleOdd);
