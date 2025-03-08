const { default: axios } = require('axios');
const BooksController = require('./controllers/BooksController');
const AccountsController = require('./controllers/AccountsController');
const { faker } = require(`@faker-js/faker`);
const booksList = require('./test-data/books');
let token;
let userId;

describe.only('Creating users', () => {
	beforeAll(async () => {
		// token = await AccountsController.getAuthToken();
		// userId = await AccountsController.getUserId();
		// const response = await BooksController.deleteAllUserBooks(userId, token);
		// expect(response.status).toEqual(204);
	});

	test('Create new user 1', async () => {
		const userName = faker.internet.username();
		const userPassword = faker.internet.password() + '6!';

		console.log(`userName: ${userName}`);
		console.log(`userPassword: ${userPassword}`);

		const response = await AccountsController.createNewUser(
			userName,
			userPassword,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
	});
});
