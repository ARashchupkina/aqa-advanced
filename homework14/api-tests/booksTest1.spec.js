const axios = require('axios');

const isbn0 = '9781449325862';
const userId = '23da7e96-4767-477c-b298-cf71cf21ef54';

// https://demoqa.com/books
// https://bookstore.toolsqa.com/swagger/

describe('demoqa API', () => {
	test('Get a book by index', async () => {
		const response = await axios.get(
			'https://bookstore.toolsqa.com/BookStore/v1/Books',
			{
				//calling the get API
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		console.log(response.data.books[3]);
		expect(Array.isArray(response.data.books)).toBeTruthy(); //перевіркa чи books існує і є масивом
		expect(response.status).toEqual(200); //asserting if the response code is 200
		expect(response.data.books.length).toBe(8);
		expect(response.data.books[3].title).toBe('Speaking JavaScript');
	});

	test.skip('Check if user exist', async () => {
		const response = await axios.post(
			'https://bookstore.toolsqa.com/Account/v1/Authorized',
			{
				userName: 'asemenyuk2110+hillel@gmail.com',
				password: 'Qwerty123!',
			},
			{
				//calling the get API
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzZW1lbnl1azIxMTAraGlsbGVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiUXdlcnR5MTIzISIsImlhdCI6MTczOTgyNzI5Mn0.gSkcmmc2XjAvA-VgbBzyBKXqeK4sjkFyTP3_TjsaEA4',
				},
			},
		);
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(response.data).toBeTruthy();
	});

	const axiosInstanse = axios.create({
		baseURL: 'https://bookstore.toolsqa.com/BookStore/v1/',
		validateStatus: function (status) {
			return true;
		},
	});

	test("Add a book to user's account", async () => {
		const response = await axios.post(
			`/Books`,
			{
				userId: userId,
				collectionOfIsbns: [
					{
						isbn: isbn0,
					},
				],
			},
			{
				//calling the get API
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzZW1lbnl1azIxMTAraGlsbGVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiUXdlcnR5MTIzISIsImlhdCI6MTczOTgzNTI3OX0.O8pabF9O9HYTt0KHEX8s9YzI63hJFzIRIfPGQ7nJnac',
				},
			},
		);
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(isbn0);
		// expect(response.data).toBeTruthy();
	});

	test.only('Add a book with incorrect token', async () => {
		const response = await axiosInstanse.post(
			`/Books`,
			{
				userId: '23da7e96-4767-477c-b298-cf71cf21ef54',
				collectionOfIsbns: [
					{
						isbn: isbn0,
					},
				],
			},
			{
				//calling the get API
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer hgfggft',
				},
			},
		);
		console.log('RESPONSETEXT' + JSON.stringify(response.data));
		expect(response.status).toEqual(401);
		expect(response.data.message).toBe('User not authorized!');
		// expect(response.data).toBeTruthy();
	});
});
