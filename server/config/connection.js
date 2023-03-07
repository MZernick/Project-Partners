const mongoose = require('mongoose');

// add db name and mongoDB path in place of static ip
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:newpassword@utacoding.l3ykbwu.mongodb.net/project-partners', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
