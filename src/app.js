const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/database.js');
const { router: productRoutes } = require('./routes/productRoutes.js');
const { router: categoryRoutes } = require('./routes/categoryRoutes.js');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler.js');
const { requestLogger } = require('./middleware/requestLogger.js');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Database connection and server start
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  }); 