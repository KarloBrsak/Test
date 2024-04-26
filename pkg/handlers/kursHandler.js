const Kurs = require('../kursevi/kursSchema');

exports.addKurs = async (req, res) => {
  try {
    const newKurs = await Kurs.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        kurs: newKurs,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getKursevi = async (req, res) => {
  try {
    const kursevi = await Kurs.find();
    res.status(200).json({
      status: 'success',
      data: {
        kursevi: kursevi,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getKurs = async (req, res) => {
  try {
    const kurs = await Kurs.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        kurs,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteKurs = async (req, res) => {
  try {
    await Kurs.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};

exports.updateKurs = async (req, res) => {
  try {
    const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        kurs,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
