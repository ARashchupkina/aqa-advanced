// Завдання 2
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/todos/1>

// Функція повинна повертати як результат Promise що повертає об’єкт todo

function fetchToDoById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Error fetching todo by ID: ${response.status}`);
			}
			return response.json();
		})
		.catch((error) => {
			console.log(error.message); // Виводимо лише текст помилки
			return null; // Повертаємо null у разі помилки, щоб уникнути падіння коду
		});
}

// Виклик функції
fetchToDoById(1) // (999) Неіснуючий ID
	.then((todo) => {
		if (todo) {
			console.log('Fetched record todo by ID:', todo);
		} else {
			console.log('No record todo was found with this ID.');
			//console.log("--------------------");     // Розділяємо лінією після виводу
		}
	})
	.catch((error) => {
		console.log('Error fetching todo:', error); // Виводимо помилки, якщо вони є
	});

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/users/1>

// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних

function fetchUserById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Error fetching user by ID: ${response.status}`);
			}
			return response.json();
		})
		.catch((error) => {
			console.log('Error in fetchUserById:', error); // Виводимо лише текст помилки
			return null; // Повертаємо null у разі помилки, щоб уникнути падіння коду
		});
}
// fetchUserById(1).then(user => console.log(user));

// Масив з викликами функцій для Promise.all та Promise.race

const userPromises = [fetchUserById(1), fetchUserById(2)]; // Отримуємо користувача з ID 1, 2
const raceUserPromise = Promise.race(userPromises); // Використовуємо Promise.race для виконання лише першого завершеного промісу
const allUserPromises = Promise.all(userPromises);

let raceUserResult; // Присвоєння результатів виконання Promise.race
let allUserResults;

// Отримуємо результат для першого завершеного промісу

raceUserPromise
	.then((user) => {
		raceUserResult = user; // Результат першого завершеного промісу
		console.log('First user fetched (race):');
		console.log(raceUserResult); // Виведення першого завершеного користувача
		console.log('--------------------'); // Розділяємо для кращої читальності
	})
	.catch((error) => {
		console.log('Error fetching user (race):', error);
	});

// Використовуємо Promise.all для отримання результату для всіх користувачів

allUserPromises
	.then((users) => {
		allUserResults = users;
		console.log('All users fetched:');
		console.log(users); // Виведення масиву всіх користувачів
		//        console.log(JSON.stringify(users, null, 2));          // Повністю виводить вкладені об'єкти (2 - додає відступи)
		console.log('--------------------'); // Розділяємо після виводу
	})
	.catch((error) => {
		console.log('Error fetching all users:', error);
	});
