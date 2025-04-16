const morgan = require('morgan');
const { logger } = require('./errorHandler.js');


const stream = {
  write: (message) => logger.info(message.trim()),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const requestLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);


module.exports = {
  requestLogger
}

