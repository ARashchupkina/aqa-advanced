// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
	if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
		throw new Error('Denominator is 0 or one of the arguments is not a number');
	}
	return denominator / numerator;
}

try {
	const result = divide(2, 'ten');
	console.log(`Result: ${result}`);
} catch (error) {
	console.log('Error: ' + error.message);
} finally {
	console.log('Operation completed');
}

// Additional task
// Task: Implement a makeCounter function that takes a number and returns another function.
// This returned function will always return a number that is 5 greater than the previous one.
// Each time you call this function, it will return a number that is 5 greater than the previous number.
// By using the closure mechanism, this can be easily solved.

function makeCounter(num) {
	let counter = num; // початкове значення лічильника
	function inner() {
		counter += 5; // збільшуємо значення на 5
		return counter; // повертаємо оновлене значення
	}
	return inner; // повертаємо функцію inner
}

const counter1 = makeCounter(10); // створюємо лічильник, початкове значення 10
//const counter2 = makeCounter(10);  // створюємо ще один лічильник (лічильник2)з початковим значенням 10
console.log(counter1()); // Перший виклик - поверне 15
console.log(counter1()); // Другий виклик - поверне 20
console.log(counter1()); // Третій виклик - поверне 25
console.log(counter1()); // Четвертий виклик - поверне 30
//console.log(counter2());  // Пятий виклик - поверне 15 (лічильник2)

export default makeCounter; // експортуємо функцію
