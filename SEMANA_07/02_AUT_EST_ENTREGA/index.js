const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DBPATH = './data/Curriculoo.db';

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database(DBPATH);

app.get('/tb_candidato', (req, res) => {
  db.all('SELECT * FROM tb_candidato', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_experiencia', (req, res) => {
  db.all('SELECT * FROM tb_experiencia', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_formacao', (req, res) => {
  db.all('SELECT * FROM tb_formacao', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_habilidades', (req, res) => {
  db.all('SELECT * FROM tb_habilidades', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_personalidade', (req, res) => {
  db.all('SELECT * FROM tb_personalidade', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_realizacoes', (req, res) => {
  db.all('SELECT * FROM tb_realizacoes', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/tb_sobremim', (req, res) => {
  db.all('SELECT * FROM tb_sobremim', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/dados-pessoais', (req, res) => {
  const dadosPessoais = [
    { label: "Nome", value: "Vitoria Novaes Xavier" },
    { label: "Data de Nascimento", value: "06/10/2003" },
    { label: "Idade", value: "19 anos" },
    { label: "Endereço", value: "Rua MMDC, 80" },
    { label: "Email", value: "vitorianovaesxavier@gmail.com" },
    { label: "Telefone", value: "(12) 99107-0268" }
  ];

  res.json(dadosPessoais);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
