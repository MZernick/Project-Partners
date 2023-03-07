const mongoose = require('mongoose');

// add db name and mongoDB path in place of static ip

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://joshuagoeke:root1234@cluster0.5ifzajr.mongodb.net/project-partners', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
