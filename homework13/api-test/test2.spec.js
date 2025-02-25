// Завдання
// Створити тестовий сценарій за допомогою пекеджу axios.
// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ


const axios = require('axios');

const id = 5;
const isbn = '9781491904244';

describe('jsonplaceholder API', () => {

    test("Get all list of posts", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { //calling the get API
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data[0]);
        expect(response.status).toEqual(200); //asserting if the response code is 200
        expect(response.data.length).toBe(100);
        expect(response.data[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    })
    

    
    test("Get post info by id", async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`, { //calling the get API
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200); //asserting if the response code is 200
        expect(response.data[0].id).toBe(5);
    })
    
    
    
    test("Get todos from list", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/4');
        console.log(response.data);
        expect(response.status).toEqual(200); //asserting if the response code is 200
        expect(response.data.title).toEqual("et porro tempora");
        expect(response.data.completed).toBeTruthy();
    })
    
    
    
    test("Add a new album", async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/albums', {
            "userId": 11,
            "id": 101,
            "title": "album sicut additae"
             
          }, { //calling the get API
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(201); 
        expect(response.data.id).toBe(101);
        expect(response.data.title).toBe("album sicut additae");
    })



    test("Delete user by id ", async () => {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1');
        console.log(response.data);
        expect(response.status).toEqual(200); 
        
    })
})


// Додаткове завдання
// API тести до сервісу:

// https://demoqa.com/books
// https://bookstore.toolsqa.com/swagger/


describe('demoqa API', () => {


    test("Get a book by index", async () => {
        const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Books', { //calling the get API
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data.books[3]);
        expect(Array.isArray(response.data.books)).toBeTruthy();   //перевіркa чи books існує і є масивом
        expect(response.status).toEqual(200);                      //asserting if the response code is 200
        expect(response.data.books.length).toBe(8);
        expect(response.data.books[3].title).toBe("Speaking JavaScript");
    })



    test("Check if user exist", async () => {
        const response = await axios.post('https://bookstore.toolsqa.com/Account/v1/Authorized', {
            "userName": "asemenyuk2110+hillel@gmail.com",
            "password": "Qwerty123!"
          }, { //calling the get API
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzZW1lbnl1azIxMTAraGlsbGVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiUXdlcnR5MTIzISIsImlhdCI6MTczOTgyNzI5Mn0.gSkcmmc2XjAvA-VgbBzyBKXqeK4sjkFyTP3_TjsaEA4'
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200);                    
        expect(response.data).toBeTruthy();
    })


    test("Add a book to user's account", async () => {
        const response = await axios.post('https://bookstore.toolsqa.com/BookStore/v1/Books', {
            "userId": "23da7e96-4767-477c-b298-cf71cf21ef54",
            "collectionOfIsbns": [
              {
                "isbn": isbn
              }
            ]
          }, { //calling the get API
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzZW1lbnl1azIxMTAraGlsbGVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiUXdlcnR5MTIzISIsImlhdCI6MTczOTgzNTI3OX0.O8pabF9O9HYTt0KHEX8s9YzI63hJFzIRIfPGQ7nJnac'
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(201);                    
        // expect(response.data).toBeTruthy();
    })

})




