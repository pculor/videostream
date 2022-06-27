const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { success, errorHandler, OK } = require('request-response-handler');
const morganMiddleware = require('../config/morgan.config');
const logger = require('../config/winston.config');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morganMiddleware);

app.use(helmet());

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  logger.error(
    `${err.message || 500} - ${err.message} -
        ${req.originalUrl} -
        ${req.method} - ${req.ip}`,
  );

  res.status(err.status || 500);
  res.render('error');
  next();
});


app.get('/', (req, res) => {
  success(res, OK, 'Welcome to API root', {
    service_url: {
      root: '/api/v1/',
    },
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Invalid route!',
  });
});

app.use(errorHandler());

module.exports = app;
