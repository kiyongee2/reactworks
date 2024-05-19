const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// db 연동
const db = require('./config/db_local.js')
db.connect();

const PORT = 4000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 
app.use(cors())

app.get('/', function (req, res) {
  res.send('홈페이지 방문을 환영합니다.')
})

// 게시글 목록
app.get('/board', (req, res) => {
  sql = `select * from board order by id desc`;
    db.query(sql, (err, results) => {
      if(err) throw err;
      //console.log(results);
      res.send(results);  //브라우저(콘솔)
    })
})

// 게시글 쓰기
app.post('/board', (req, res) => {
  const {title, content, writer} = req.body;

  let sql = `insert into board (title, content, writer) 
    values ("${title}", "${content}", "${writer}")`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log("글쓰기 성공");
    return res.send("글쓰기 성공");
  });
})

// 게시글 상세보기
app.get("/board/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let sql = "select * from board where id = ?"
  db.query(sql, [id], (err, result) => {
    if(err) throw err;
    if(result.length === 0){
      res.status(400).send("요청하신 데이터를 찾을 수 없습니다.");
    }else{
      //const board = result[0];
      //res.render('detail', {board: board});
      console.log(result);
      res.send(result);
    }
  });
})

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행중... 포트: ${PORT}`);
})