// Завдання 2: Копіювання з мутацією

// Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.
// Ось кроки, які вам потрібно виконати:
// Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
// Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
// Виведіть новий масив на консоль.


const numbers = [1, 2, 3, 4, 5];
const numbersMultiplyByIndex = numbers.map((element, index) => {
    return element * index
});
console.log(numbersMultiplyByIndex);




//Варіант рішення через створення функції

function multiplyByIndex(element, index) {
    return element * index;
}
const numbers1 = [1, 2, 3, 4, 5];
const numbersMultiplyByIndex1 = numbers.map(multiplyByIndex);

console.log(numbersMultiplyByIndex1);





//Декларативний код

const numbers2 = [1, 2, 3, 4, 5];
const numbersMultiplyByIndex2 = [];

for (let i = 0; i < numbers2.length; i++) {
    numbersMultiplyByIndex2.push(numbers2[i] * i);
}
console.log(numbersMultiplyByIndex2);

