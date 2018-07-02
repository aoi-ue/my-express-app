const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser());

const books = [
  {
    title: "harry potter",
    summary: "someone dies"
  },
  {
    title: "Game of Thrones",
    summary: "everyone dies"
  }
];


app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:id", (req, res) => {
  console.log(req.params);
  res.send({
    message: `book with id: ${req.params.id}`
  });
});

app.post("/books/:id",(req, res) => {
    console.log(req.body);
    books = [...books, req.body]
    res.send(books);
});


app.listen(PORT, () => {
  console.log(`started on ${PORT}!`);
});
