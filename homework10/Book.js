class Book {

    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    };

    //Сеттери з валідацією
    set name(name) {
        if (typeof name === "string" && name.length > 0) {
            this._name = name;
        } else {
            console.error("Invalid name. It must be a non-empty string")
        }
    };

    set author(author) {
        if (typeof author === "string" && author.length > 0) {
            this._author = author;
        } else {
            console.error("Invalid author. It must be a non-empty string")
        }
    };

    set year(year) {
        if (typeof year === "number" && year > 0) {
            this._year = year;
        } else {
            console.error("Invalid year. It must be a positive number");
        }
    };

    //Геттери
    get name() {
        return this._name;
    };

    get author() {
        return this._author;
    };

    get year() {
        return this._year;
    };

    // Метод для виведення інформації
    printInfo() {
        console.log(`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
    };


    static getOldestBook(books) {
        return books.reduce((oldest, current) => {     //Метод reduce() обробляє кожен елемент масиву і поступово зводить їх до єдиного значення.
            return current.year < oldest.year ? current : oldest;
        });
    }
}

module.exports = Book; // Експортуємо клас