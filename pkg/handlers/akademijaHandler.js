const Akademija = require('../akademii/akademijaSchema');

exports.addAkademija = async (req, res) => {
  try {
    const newAkademija = await Akademija.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        akademija: newAkademija,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAkademii = async (req, res) => {
  try {
    const akademii = await Akademija.find();
    res.status(200).json({
      status: 'success',
      data: {
        akademii: akademii,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
