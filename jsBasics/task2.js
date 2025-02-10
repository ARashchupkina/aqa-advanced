// task2
// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб.
// Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб.
// Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання.
// Виведіть результат в консоль.

// //конкатенація
let grandmother = 'Mariia';
let grandfather = 'Fedir';
let greeting =
	'Our congratulations on the birth of your first grandchild, dear ' +
	grandmother +
	' and ' +
	grandfather;

console.log(greeting);

//шаблонний рядок
let grandmother1 = 'Mariia';
let grandfather1 = 'Fedir';
let greeting1 = `Our congratulations on the birth of your first grandchild, dear ${grandmother1} and ${grandfather1}`;

console.log(greeting1);
