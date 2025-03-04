const { default: axios } = require('axios');
const BooksController = require('./controllers/BooksController');
const AccountsController = require('./controllers/AccountsController');
const { faker } = require(`@faker-js/faker`);
const booksList = require('./test-data/books');
let token;
let userId;

test('Get all books', async () => {
	const response = await BooksController.getAllBooks();
	console.log(response.data);
});

describe.only('Adding books', () => {
	beforeAll(async () => {
		token = await AccountsController.getAuthToken();
		userId = await AccountsController.getUserId();
		const response = await BooksController.deleteAllUserBooks(userId, token);
		expect(response.status).toEqual(204);
	});

	test('Add a book 1', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[0].isbn,
			token,
		);
		console.log(response.data);
		console.log('Books count from API:', response.data.books.length);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
	});

	test('Add a book 2', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[1].isbn,
			token,
		);
		console.log(response.data);
		console.log('Books count from API:', response.data.books.length);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[1].isbn);
	});

	test('Add a book 3', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[2].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[2].isbn);
	});

	test('Add a book 4', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[3].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[3].isbn);
	});

	test('Add a book 5', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[4].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[4].isbn);
	});

	test('Add a book 6', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[5].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[5].isbn);
	});

	test('Add a book 7', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[6].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(booksList[6].isbn);
	});

	test('Add a bo ok 8', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[7].isbn,
			token,
		);
		console.log(response.data);
		BooksController.verifyAddedBookInfo(response, booksList[7]);
	});

	test('Test faker', async () => {
		console.log(faker.internet.email());
	});

	// test.only('Test auth token', async () => {
	//     const response = await axios

	//     console.log(response.data.token);
	//     })
	// })

	// test.only('Remove all user`s books', async () => {
	//     const response = await BooksController.deleteAllUserBooks(userId, token);
	//     console.log(response.status)
});
