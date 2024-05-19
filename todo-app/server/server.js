const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 
app.use(cors())

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false
  }
]

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/api/todo", (req, res) => {
  res.json(todoList);
})

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body: ", req.body);
  todoList.push({
    id: id++,
    text,
    done
  });
  return res.send("success");
})

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행중... 포트: ${PORT}`);
})