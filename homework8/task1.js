// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.
// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.


const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}
console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeros: ${zeroCount}`);



//Рішення задачі через метод .forEach()

const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount1 = 0;
let negativeCount1 = 0;
let zeroCount1 = 0;

// Перебір чисел у масиві 
numbers.forEach(num => {
    if (num > 0) {
        positiveCount1++;
    } else if (num < 0) {
        negativeCount1++;
    } else {
        zeroCount1++;
    }
});
console.log(`Positive numbers: ${positiveCount1}`);
console.log(`Negative numbers: ${negativeCount1}`);
console.log(`Zeros: ${zeroCount1}`);