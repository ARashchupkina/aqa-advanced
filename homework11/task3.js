// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchToDoById(id) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos/${id}`,
		);
		if (!response.ok) {
			throw new Error(`Error fetching todo by ID: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		return null;
	}
}

async function runFetchToDo() {
	const todo = await fetchToDoById(1);
	if (todo) {
		console.log('Fetched record todo by ID:', todo);
	} else {
		console.log('An error occurred: No record todo was found with this ID.');
	}
	console.log('--------------------');
}
runFetchToDo();

//частина 2

async function fetchUserById(id) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`,
		);
		if (!response.ok) {
			throw new Error(`Error fetching user by ID: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		return null;
	}
}

async function runFetchUsers() {
	const userPromises = [fetchUserById(1), fetchUserById(2)];
	try {
		const raceUserResult = await Promise.race(userPromises); // Отримання першого завершеного
		console.log('First user fetched (race):', raceUserResult);
		//console.log(JSON.stringify(raceUserResult, null, 2));                 // Отримання вкладеного обєжкту
		console.log('--------------------');
	} catch (error) {
		console.log('Error fetching user (race):', error);
		console.log('--------------------');
	}

	try {
		const allUserResults = await Promise.all(userPromises);
		console.log('All users fetched (all):', allUserResults);
		//console.log(JSON.stringify(allUserResults, null, 2));
		console.log('--------------------');
	} catch (error) {
		console.log('Error fetching all users (all):', error);
		console.log('--------------------');
	}
}
runFetchUsers();
