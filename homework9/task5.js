// Завдання 5

// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі


const users = [
    {
        name: "John",
        email: "John@gmail.com",
        age: 19,
        gender: "male"
    },

    {
        name: "Doroty",
        email: "Doroty@gmail.com",
        age: 31,
        gender: "female"
    }
];

for (const user of users) {
    const { name, email, age, gender } = user;
    console.log(`${name}, ${email}, ${age}, ${gender}`)
}


//Additional tasks

// An isogram is word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case
// Example:(Input->Output)
// "DermatogLyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str) {
    let lowerStr = str.toLowerCase(); // перетворюємо рядок у нижній регістр
    let checked = {}; // об'єкт для збереження перевірених літер


    for (let i = 0; i < lowerStr.length; i++) {
        let letter = lowerStr[i]; // поточний символ

        // якщо літера вже зустрічалася, це не ізограма
        if (checked[letter]) {
            return false;
        }

        // додаємо літеру в об'єкт
        checked[letter] = true;
    }

    // якщо не знайшли повторів то це ізограма
    return true;
}

let str = "DermatogLyphics";
console.log(isIsogram(str));


// simple, given a string of words, return the length of the shortest word(s). 
// string will never be empty you do not need to account for different data types

const sentence = "Це речення має кілька слів";

const words = sentence.split(" "); // Розбиваємо рядок на масив слів
const lengths = words.map(word => word.length); // Отримуємо масив довжин слів
const minLength = Math.min(...lengths); // Знаходимо найменшу довжину

console.log(minLength); // Виводимо мінімальну довжину




// You are given an array (which will have a length at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N


function findOutlier(integers) {

    const evens = integers.filter((num => num % 2 === 0)); //фільтруємо парні числа
    const odds = integers.filter((num => num % 2 !== 0)); //фільтруємо непарні числа
    if (evens.length === 1) {
        return evens[0] // якщо в масиві є одне парне число - вертаємо це парне число як виключення
    } else {
        return odds[0]; 
    }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));