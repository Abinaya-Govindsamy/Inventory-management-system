CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    sku VARCHAR(50),
    category VARCHAR(50),
    quantity INT,
    price DOUBLE
);