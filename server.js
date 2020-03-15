const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION 👺 Shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log('UNCAUGHT EXCEPTION 👺 Shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successful');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('SIGTERM', () => {
  console.log('☝️ SIGTERM RECEIVED, Shut down gracefully');
  app.close(() => {
    console.log('💥Process terminated!');
  });
});
