# 🛒 Simple E-Commerce Store

A responsive **Simple E-Commerce Store Website** built using **HTML, CSS, and JavaScript**.
This project provides a basic online shopping experience with features like product listing, category filtering, product details, add to cart, wishlist, checkout, and order management using **Local Storage**.

---

## 📌 Project Overview

This project is a frontend e-commerce web application designed to simulate an online shopping platform.
Users can browse products, filter them by category, search for items, view product details, add products to the cart or wishlist, and place orders through a checkout page.

The project is built completely using **HTML, CSS, and JavaScript** without any backend integration.

---

## ✨ Features

* 🏠 **Home Page** with product listings
* 🔍 **Search functionality** to find products quickly
* 📂 **Category-wise product filtering**
* 📄 **Product Details Page**
* 🛒 **Add to Cart functionality**
* ❤️ **Wishlist feature**
* ⚡ **Buy Now option**
* 💳 **Checkout page**
* 📦 **Order placement and order history**
* 💾 **Local Storage integration** for cart, wishlist, and orders
* 📱 **Responsive and user-friendly UI**

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **LocalStorage**

---

## 📂 Project Structure

```bash
SimpleEcommerceStore/
│── index.html
│── product.html
│── cart.html
│── checkout.html
│── orders.html
│── style.css
│── script.js
│── product.js
│── cart.js
│── checkout.js
│── orders.js
│── README.md
```

---

## 📄 Pages Included

### 1. **Home Page**

* Displays all products
* Category filtering
* Search bar for product search
* Wishlist option
* View details button for each product

### 2. **Product Details Page**

* Shows selected product image, name, rating, price, and description
* Size selection for fashion products
* Add to Cart and Buy Now options

### 3. **Cart Page**

* Displays all added cart products
* Shows product image, name, category, price, and size
* Remove item from cart
* Displays total cart amount

### 4. **Checkout Page**

* Delivery details form
* Payment method selection
* Displays selected product/order summary
* Place order functionality

### 5. **Orders Page**

* Shows all placed orders
* Displays product details and customer order information

---

## ⚙️ How It Works

* Product data is stored in JavaScript arrays
* When a user adds a product to the cart, it is stored in **Local Storage**
* Wishlist items are also saved in **Local Storage**
* On checkout, order details are saved in **Local Storage**
* Orders page retrieves and displays placed orders from **Local Storage**

---

## 💾 Local Storage Used

This project uses **Local Storage** to store:

* `cart` → cart products
* `wishlist` → wishlist products
* `buyNowProduct` → product selected for direct checkout
* `orders` → placed order history

---

## 🚀 Future Improvements

* Add user login/signup system
* Add product quantity update in cart
* Integrate payment gateway
* Add backend/database support
* Add admin panel for product management
* Improve UI with animations and better responsiveness

---

## 👩‍💻 Author

**Archana Kandela**

---

## 📢 Note

This project is created for **learning and internship/project submission purposes** to demonstrate frontend web development concepts and e-commerce functionality using JavaScript.
