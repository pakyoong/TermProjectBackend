import express from "express"
import mysql from "mysql"
import dbconf from "./conf/auth.js"

const app = express()
const port = 3010

const db = mysql.createConnection(dbconf)

db.connect()

// 기본 경로
app.get('/', (req, res) => {
  res.json({result: '도서 관리 백엔드'})
})

// 도서 정보 조회 경로
app.get('/book', (req, res) => {
    const sql = 'SELECT * FROM book'
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.json({result: "error"})
            return console.log(err)
        }
        res.json(rows)
    })
})

// 서버 실행
app.listen(port, () => {
  console.log(`서버 실행됨 (port ${port})`)
})