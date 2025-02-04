// Завдання 5: Об'єднання масивів

// Вам потрібно створити програму, яка об'єднає два масиви в один
// Ось кроки, які вам потрібно виконати:
// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.


const firstArray = [1, 2, 'first', 3, 4, 'Anna'];
const secondArray = [5, 6, 7, 'second', 8, 'Mariia'];
const concatenatedArray = firstArray.concat(secondArray);

console.log(concatenatedArray);



//вирішення через Spread operator (...)
const firstArray1 = [1, 2, 3, 4];
const secondArray1 = [5, 6, 7, 8];
const concatenatedArray1 = [...firstArray1, ...secondArray1];

console.log(concatenatedArray1);