const Book = require('./Book');

class Ebook extends Book {
	constructor(name, author, year, fileFormat) {
		// Викликаємо конструктор батьківського класу
		super(name, author, year); // Викликаємо конструктор класу Book
		this.fileFormat = fileFormat;
		//this.year = year;                           // Повторно викликаємо сеттер для year, щоб валідація спрацювала
	}

	//Сеттер з валідацією
	set fileFormat(fileFormat) {
		const allowedFormats = ['txt', 'pdf', 'epub'];
		if (allowedFormats.includes(fileFormat)) {
			this._fileFormat = fileFormat;
		} else {
			console.error(
				`Invalid format. Allowed formats are: ${allowedFormats.join(', ')}`,
			);
		}
	}

	//Геттер
	get fileFormat() {
		return this._fileFormat;
	}

	// Метод для виведення інформації
	printInfo() {
		console.log(
			`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`,
		);
	}

	//Статичний метод для класу Ebook
	static createEbookFromBook(book, fileFormat) {
		const allowedFormats = ['txt', 'pdf', 'epub'];
		if (!allowedFormats.includes(fileFormat)) {
			console.error(
				`Invalid file format. Allowed formats: ${allowedFormats.join(', ')}`,
			);
			return null; // Повертаємо null, якщо формат невірний
		}

		// Створюємо та повертаємо екземпляр Ebook передаючи значення з Book
		return new Ebook(book.name, book.author, book.year, fileFormat);
	}
}

module.exports = Ebook; // Експортуємо клас
