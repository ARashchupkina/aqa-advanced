
const axios = require('axios');

const isbn0 = '9781449325862';


test.skip("Get all book list", async () => {
    const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Books', { //calling the get API
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data.books[0]);
    expect(response.status).toEqual(200); //asserting if the response code is 200
    expect(response.data.books.length).toBe(8);
    expect(response.data.books[0].title).toBe(8);
})



test("Get book by isbn", async () => {
    const response = await axios.get(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn0}`, { //calling the get API
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    // expect(response.status).toEqual(200); //asserting if the response code is 200
    // expect(response.data.books.length).toBe(8);
    // expect(response.data.books[0].title).toBe(8);
})



test("Add book to a user", async () => {
    const response = await axios.post('https://bookstore.toolsqa.com/BookStore/v1/Books', {
        "userId": "string",
        "collectionOfIsbns": [
          {
            "isbn": "string"
          }
        ]
      }, { //calling the get API
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzZW1lbnl1azIxMTAraGlsbGVsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiUXdlcnR5MTIzISIsImlhdCI6MTczOTgzNTI3OX0.O8pabF9O9HYTt0KHEX8s9YzI63hJFzIRIfPGQ7nJnac'
        }
    });
    console.log(response.data);
    // expect(response.status).toEqual(200); //asserting if the response code is 200
    // expect(response.data.books.length).toBe(8);
    // expect(response.data.books[0].title).toBe(8);
})