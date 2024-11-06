# LoopBack-Tutorial

Tools Used<br>
LoopBack: Node.js framework for building APIs.
Node.js: JavaScript runtime.
curl: Command-line tool for testing APIs.

Steps to Generate the API
1)Install LoopBack CLI:
npm install -g @loopback/cli

2)Create a LoopBack Application:
lb4 app

3)Generate Model:
lb4 model

4)Generate Repository:
lb4 repository

5)Generate Controller:
lb4 controller

6)Run the Application:
npm start

7)Test the API using Postman with endpoints like:<br>
a)curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d "{\"title\": \"The Great Gatsby\", \"author\": \"F. Scott Fitzgerald\", \"yearPublished\": 1925}"
{"id":3,"yearPublished":1925,"title":"The Great Gatsby","author":"F. Scott Fitzgerald"}

b)curl -X PATCH http://localhost:3000/books/1 -H "Content-Type: application/json" -d "{\"title\": \"The Great Gatsby - Updated\"}"

c)curl -X DELETE http://localhost:3000/books/1









