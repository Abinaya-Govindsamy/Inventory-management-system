# Inventory Management System

## 📌 Project Overview

The **Inventory Management System (IMS)** is a web-based application designed to help businesses manage and monitor their inventory efficiently. It provides an easy way to store, update, search, and organize product information while reducing manual work and improving inventory accuracy.

This project is developed as a **second-year academic mini project** using web technologies and a MySQL database.

---

## ✨ Features

* Add new products to the inventory
* View all available products
* Update product details
* Delete products from the inventory
* Search products by name or SKU
* Track product quantity and stock availability
* User-friendly and responsive interface
* Database connectivity using MySQL
* REST API integration for CRUD operations

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Java (REST API)
* JDBC

### Database

* MySQL

### Development Tools

* Visual Studio Code
* MySQL Workbench
* Apache Tomcat
* Git & GitHub

---

## 📂 Project Structure

```
Inventory-Management-System/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── ProductDAO.java
│   ├── Product.java
│   ├── ProductController.java
│   └── DBConnection.java
│
├── database/
│   └── inventory.sql
│
├── images/
│
├── README.md
└── LICENSE
```

---

## 🗄️ Database

The project uses **MySQL** as the database management system.

### Sample Product Table

| Field    | Type              |
| -------- | ----------------- |
| id       | INT (Primary Key) |
| sku      | VARCHAR(20)       |
| name     | VARCHAR(100)      |
| category | VARCHAR(50)       |
| quantity | INT               |
| price    | DECIMAL(10,2)     |

---


## 💻 How It Works

1. The user enters product details through the web interface.
2. JavaScript sends requests to the Java REST API.
3. The REST API processes the request.
4. The backend communicates with the MySQL database using JDBC.
5. The database returns the requested data.
6. The frontend displays the updated inventory information.

---

## 🎯 Objectives

* Automate inventory management.
* Reduce manual record-keeping.
* Improve stock accuracy.
* Provide quick product search.
* Simplify product management.

---

## 🔮 Future Enhancements

* User authentication and role-based access
* Barcode and QR code scanning
* Sales and purchase management
* Supplier management
* Inventory reports and analytics
* Dashboard with charts and graphs
* Email notifications for low stock
* Export reports to PDF and Excel
* Cloud database integration

---
## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
