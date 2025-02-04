// Завдання 1

// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook



const Book = require('./Book');     // Імпорт класу з файлу Book.js
const Ebook = require('./Ebook');   // Імпорт класу з файлу Ebook.js


// Створення екземплярів для Book

const book1 = new Book("Harry Potter and the philosopher's stone", "J.K. Rowling", 1997);
book1.printInfo();


const book2 = new Book("The art of making Memories", "Meik Wiking", 2019);
book2.printInfo();


const book3 = new Book("The old man and the sea", "Ernest Hemingway", 1952);
book3.printInfo();
console.log();

// Приклад використання сеттерів


book3.printInfo(); // Виведення початкових даних до зміни

book3.name = "The Little Book of Hygge";  // Зміна властивості name через сеттери
book3.year = 1924;                        // Зміна властивості year через сеттери
book3.printInfo();                        // Виведення змінених даних
console.log();

// Використання сеттерів з неправильними значеннями
book1.name = "";          // Помилка: "Invalid name. It must be a non-empty string."
book1.author = 123;       // Помилка: "Invalid author. It must be a non-empty string."
book1.year = -1984;       // Помилка: "Invalid year. It must be a positive number."
console.log();


// Створення екземплярів для Ebook

const ebook1 = new Ebook("The Joy of Small Things", "Hannah Jane Parkinson", 2022, "epub");
ebook1.printInfo();
console.log();


const ebook2 = new Ebook("Be Ready When the Luck Happens", "Ina Garten", -500, "mobi");
ebook2.printInfo();
console.log();


const books = [book1, book2, book3, ebook1, ebook2];  // Створюємо масив книг
const oldestBook = Book.getOldestBook(books);         // Викликаємо статичний метод для знаходження найстарішої книги
console.log("Oldest Book:", oldestBook);
console.log();


// Створення Ebook з book1, правильний формат (pdf)
{
    const ebook1 = Ebook.createEbookFromBook(book1, "pdf");
    if (ebook1) {
        ebook1.printInfo();     // Якщо ebook1 створено, вивести його інформацію
    } else {
        console.log("Failed to create Ebook due to invalid file format.");
    }
};

{
    const ebook2 = Ebook.createEbookFromBook(book1, "txt");
    if (ebook2) {
        ebook2.printInfo();     // Якщо ebook2 створений, вивести інформацію
    } else {
        console.log("Failed to create Ebook due to invalid file format.");
    }
};

// Створення Ebook з book3, формат mobi (неправильний)
{
    const ebook3 = Ebook.createEbookFromBook(book3, "mobi");
    if (ebook3) {
        ebook3.printInfo();     // Якщо ebook3 створено, вивести його інформацію
    } else {
        console.log("Failed to create Ebook due to invalid file format.");
    }
}