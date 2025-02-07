//Завдання 1
// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд


function newReason(phrase, time) {     
    console.log(`${phrase} ${time}`);

}
setTimeout(newReason, 5000, "The execution delay time was in seconds:", 5000);  //Перший 5000 (другий аргумент setTimeout) — це затримка в мілісек перед виконанням ф-ції sayHello. Вона запуститься через 5 секунд. Другий 5000 (останній аргумент) —  другий параметр у sayHello.


//Інша реалізація через callback

// function getMessage(callback) {
//     console.log("The request will be processed for 3 seconds..");
//     setTimeout(function () {
//         const data = "New customer was created 201 OK";
//         callback(data);
//     }, 3000);
// }

// function printMessage(data) {
//     console.log("Data: " + data);
// }
// getMessage(printMessage);