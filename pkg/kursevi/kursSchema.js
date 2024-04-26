const mongoose = require('mongoose');

const kursSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, 'Ve molime vnesete go imeto na kursot.'],
  },
  adresa: {
    type: String,
  },
  oblast: {
    type: String,
    required: [true, 'Ve molime vnesete ja oblasta shto ja opfakja kursot.'],
  },
});

const Kurs = mongoose.model('Kurs', kursSchema);

module.exports = Kurs;
