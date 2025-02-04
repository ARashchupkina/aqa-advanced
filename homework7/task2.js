// Завдання 2

// Створіть функцію яка приймає один параметр: num.
// Усередині функції виведіть значення num в консоль.
// Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
// Фунція повинна викликатися, доки num не стане менше або рівне 0.
// Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.


function counter(num) {
    console.log(num);
    if (num > 0) {
        counter(num - 1);
    }
}
counter(5);

console.log("------------");


function* fibonacciGenerator() {
    let prev = 0;
    let current = 1;

    yield prev;

    while (true) {
        const next = prev + current;
        yield next;
        prev = current;
        current = next;
    }
}
const fib = fibonacciGenerator();

for (let i = 0; i < 9; i++) {  // Викликаємо перші 9 чисел Фібоначчі
    console.log(fib.next().value);
}
export default fibonacciGenerator; 
