const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;
const config = require('./config');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/recipes', require('./routes/recipes'));



// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  // Respond to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });
  console.error(err);
});


// Connect To Database
mongoose.connect(config.database.dev, { useNewUrlParser: true })
  .then(
    () => console.log(`-> Connected to Database ${config.database.dev}`),
    err => console.error(`Database error ${err}`)
  );


// Listen
app.listen(port, () => {
  console.info(`-> Server listen in port ${port}`)
});