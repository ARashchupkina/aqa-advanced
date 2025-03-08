const BaseController = require(`./BaseController`);

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance('/BookStore/v1/Books');
	}

	async addBook(userId, bookId, token) {
		return await this.axiosInstance.post(
			`/BookStore/v1/Books`,
			{
				userId: userId,
				collectionOfIsbns: [
					{
						isbn: bookId,
					},
				],
			},
			{
				//calling the get API
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async deleteAllUserBooks(userId, token) {
		return await this.axiosInstance.delete(
			`/BookStore/v1/Books?UserId=${userId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	verifyAddedBookInfo(response, book) {
		expect(response.status).toEqual(201);
		expect(response.data.books[0].isbn).toBe(book.isbn);
	}
}

module.exports = new BooksController();
