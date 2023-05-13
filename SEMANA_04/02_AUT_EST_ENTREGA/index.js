const express = require('express'); 
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/Curriculoo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(bodyParser.json())
app.use(express.json());

const db= new sqlite3.Database(DBPATH)

app.get("/tb_candidato", (req, res) => {
    db.all('SELECT * FROM tb_candidato', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_experiencia", (req, res) => {
    db.all('SELECT * FROM tb_experiencia', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_formacao", (req, res) => {
    db.all('SELECT * FROM tb_formacao', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_habilidades", (req, res) => {
    db.all('SELECT * FROM tb_habilidades', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_personalidade", (req, res) => {
    db.all('SELECT * FROM tb_personalidade', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_realizacoes", (req, res) => {
    db.all('SELECT * FROM tb_realizacoes', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.get("/tb_sobremim", (req, res) => {
    db.all('SELECT * FROM tb_sobremim', (err, rows) => {
        if (err){
            throw err
        } else {
            res.json(rows)
        }
    })
})

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });