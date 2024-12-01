// Завдання 3

// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods"
    }
    if (ordered === 0) {
        return "Your order is empty"
    }
    return "Your order is accepted"
}
console.log(checkOrder(10, 5));
console.log(checkOrder(10, 15)); 
console.log(checkOrder(10, 0)); 


// Additional Task1
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"


function ShortLongShort(a, b) {

    if (a.length < b.length) {
        return a + b + a; // Коротший рядок a ззовні
    } else {
        return b + a + b; // Коротший рядок b ззовні
    }
}
console.log(ShortLongShort("5", "15"));
console.log(ShortLongShort("15", "5")); 



// Additional Task2
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function isNumberEven(n) {
    return n % 2 === 0;
}
console.log(isNumberEven(30));
console.log(isNumberEven(5));
console.log(isNumberEven(18.6));
console.log(isNumberEven(26.0))


// Additional Task3
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentCar(days) {

    if (days >= 7) {
        return 40 * days - 50; // Знижка 50$
    }
    if (days >= 3 && days < 7) {
        return 40 * days - 20; // Знижка 20$
    }
    return 40 * days;
}
console.log(rentCar(10)); //10*40-50=350
console.log(rentCar(2)); //2*40=80
console.log(rentCar(5)); //5*40-20=180