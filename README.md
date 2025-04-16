# Backend API for MyStore

This is a Node.js backend application that provides a REST API for managing products and categories.

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm (Node Package Manager)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - Create a MySQL database named `mystore`
   - Update the `.env` file with your database credentials:
     ```
     DB_HOST=localhost
     DB_USER=your_username // mine : root
     DB_PASSWORD=your_password // mine : shanu2604(in case you wanna check)
     DB_NAME=mystore
     DB_PORT=3306
     PORT=3000
     ```

4. Run migrations and seed data:
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

## Running the Application

1. Start the server:
   ```bash
   node src/app.js
   ```

2. The API will be available at `http://localhost:3000/api`

## API Endpoints

### Products

- `GET /api/products` - Get all products with their category details
- `GET /api/products/:id` - Get a specific product by ID
- `POST /api/products` - Create a new product
  ```json
  {
    "ProductName": "New Product",
    "Description": "Product description",
    "Price": 99.99,
    "StockQuantity": 10,
    "CategoryId": 1
  }
  ```
- `PUT /api/products/:id` - Update a product
  ```json
  {
    "ProductName": "Updated Product",
    "Price": 149.99,
    "StockQuantity": 20
  }
  ```
- `DELETE /api/products/:id` - Delete a product

## Database Schema

### Products Table
- ProductName (string)
- Description (string)
- Price (decimal)
- StockQuantity (integer)
- CategoryId (foreign key)
- CreatedAt (timestamp)
- UpdatedAt (timestamp)


#NOTE:
I have also created api for Categories in case you wanna explore that, haven't tested it much though
### Categories Table
- CategoryName (string)
- Description (string)
- IsActive (boolean)
- CreatedAt (timestamp)
- UpdatedAt (timestamp) 
