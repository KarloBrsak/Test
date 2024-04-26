//* Да се креира нова дата база со име exams
//* Да се креира колекција за академија и курс
//* Линкот до дата базата и лозинката да се впишани во config.env(ili vo .json)
//* За секоја академија се чуваат неговото име и адреса
//* За секој курс се чуваат неговото име, адреса и за која област е наменет
//* CRUD систем за додавање на Курсеви во база
//* CRUD систем за додавање на Академија во база
// Да се отворат сите рути за менаџирање на ресурсот Курс

const express = require('express');

const db = require('./pkg/db/index');

const kursHandler = require('./pkg/handlers/kursHandler');
const akademijaHandler = require('./pkg/handlers/akademijaHandler');

const app = express();

db.init();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Рути

app.post('/kursevi', kursHandler.addKurs);
app.get('/kursevi', kursHandler.getKursevi);
app.get('/kursevi/:id', kursHandler.getKurs);
app.delete('/kursevi/:id', kursHandler.deleteKurs);
app.patch('/kursevi/:id', kursHandler.updateKurs);

app.post('/akademii', akademijaHandler.addAkademija);
app.get('/akademii', akademijaHandler.getAkademii);

app.listen(process.env.PORT, err => {
  if (err) {
    return console.log('Service could not start.');
  }
  console.log(`Service started succesffully on port ${process.env.PORT}`);
});
