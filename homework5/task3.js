// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

let number = 6;
for (let i = 1; i <= 10; i++) {
console.log(`${number} * ${i} = ${number * i}`);
}
    


let number1 = 6;
let number2 = 1;
while (number2 <= 10) {
console.log(`${number1} * ${number2} = ${number1 * number2}`);
number2++
}
    