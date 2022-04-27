const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect('mongodb://localhost:27017/guitars-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo DataBase Connected!'))
    .catch((err) =>
      console.log(`Connection with MongoDb failed, error: ${err}`),
    );
};

module.exports = connectToDb;
