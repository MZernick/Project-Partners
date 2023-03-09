const mongoose = require('mongoose');
require('dotenv').config();


// add db name and mongoDB path in place of static ip

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://drn:1601@cluster0.224mut0.mongodb.net/project-partners', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
