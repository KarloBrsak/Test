const mongoose = require('mongoose');

const akademijaSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, 'Ve molime vnesete go imeto na akademijata..'],
  },
  adresa: {
    type: String,
    required: [true, 'Ve molime vnesete ja adresata na akademijata.'],
  },
});

const Akademija = mongoose.model('Akademija', akademijaSchema);

module.exports = Akademija;
