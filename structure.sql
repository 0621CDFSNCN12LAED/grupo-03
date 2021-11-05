DROP DATABASE IF EXISTS morfi_db;
CREATE DATABASE morfi_db;
USE morfi_db;
/*user_category*/
CREATE TABLE `user_categories` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
);
/*product_category*/
CREATE TABLE `product_categories` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
);
/*users*/
CREATE TABLE `users` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) DEFAULT "/images/users/default-user.jpg",
  `user_category_id` INT(10) DEFAULT 1,
  FOREIGN KEY (`user_category_id`) REFERENCES `user_categories` (`id`)
);
/*products*/
CREATE TABLE `products` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` DECIMAL NOT NULL,
  `weight` DECIMAL NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) DEFAULT "/images/products/default-product.png",
  `product_category_id` INT(10) NOT NULL,
  FOREIGN KEY (`product_category_id`) REFERENCES `product_categories` (`id`)
);
/*purchases => carrito de compras*/
CREATE TABLE `purchases` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `total_price` DECIMAL NOT NULL,
  `total_quantity` INT(10) NOT NULL,
  `user_id` INT(10) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);
/*purchase_product*/
CREATE TABLE `purchase_product` (
  `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `purchase_price` DECIMAL NOT NULL,
  `quantity` INT(10) NOT NULL,
  `purchase_id` INT(10) NOT NULL,
  FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  `product_id` INT(10) NOT NULL,
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);