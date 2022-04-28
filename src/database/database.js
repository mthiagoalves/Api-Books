const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo DataBase Connected!'))
    .catch((err) =>
      console.log(`Connection with MongoDb failed, error: ${err}`),
    );
};

module.exports = connectToDb;
