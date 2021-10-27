 CREATE DATABASE IF NOT EXISTS morfi_db;
USE morfi_db;

CREATE TABLE users (
    id TINYINT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    cart_id TINYINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (cart_id) REFERENCES carts(id)

);

CREATE TABLE products (
    id TINYINT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL,
    weight DECIMAL(4,2),
    price DECIMAL(4,2),
    category_id TINYINT,
    PRIMARY KEY(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)

);
CREATE TABLE carts (
    id TINYINT AUTO_INCREMENT NOT NULL,
    user_id TINYINT NOT NULL,
    date DATE NOT NULL,
    total DECIMAL(4,2),
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE categories (
    id TINYINT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `cart_products`;
CREATE TABLE carts_products (
    id TINYINT AUTO_INCREMENT,
    product_id TINYINT,
    cart_id TINYINT,
    PRIMARY KEY(id),
    FOREIGN KEY (cart_id) REFERENCES carts(id),
    FOREIGN KEY (product_id) REFERENCES products(id)  
);
/*INSERT INTO users 

VALUES (DEFAULT,"Enrique","Sivori","Enrique_Sivori@unmail.com"),
       (DEFAULT,"Homero","Simpson","Homero_Simpson@unmail.com"),
       (DEFAULT,"Andres","Iniesta","Andres_Iniesta@unmail.com"),
       (DEFAULT,"Carlos","Gardel","Carlos_Gardel@unmail.com"),
       (DEFAULT,"Arnaldo","Andre","Arnaldo_Andre@unmail.com"),
       (DEFAULT,"Frank","Kafka","Frank_Kafka@unmail.com"),
       (DEFAULT,"Horacio","Guarani","Horacio_Guarani@unmail.com"),
       (DEFAULT,"Paul","Auste","Paul_Auster@unmail.com"),
       (DEFAULT,"Juan Pablo","Sorin","Juan_Pablo_Sorin@unmail.com"),
       (DEFAULT,"Ebenezer","Huxtable","Ebenezer_Huxtable@unmail.com");

INSERT INTO categories

VALUES (DEFAULT,"Reiki"),
       (DEFAULT,"Filosofía"),
       (DEFAULT,"Asado"),
       (DEFAULT,"Pesca"),
       (DEFAULT,"Ikebana"),
       (DEFAULT,"Estartegia bélica"),
       (DEFAULT,"Sastrería"),
       (DEFAULT,"Aeromodelísmo"),
       (DEFAULT,"Programación"),
       (DEFAULT,"Patinaje artístico");       

INSERT INTO notes

VALUES (DEFAULT,"Brotolas con marea baja",5,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Todo acerac de los chinchulines",8,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Decadencia del Obús",9,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"ALfileres 2.0",6,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Mariposa:si o no?",8,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Volver al arco y la flecha",3,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Acerca de Maravilla Martinez",2,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Temperatura del piso",10,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"El besugo",7,"1987-09-24","1999-12-16","Lorem Ipsum ..."),
       (DEFAULT,"Por qué desayunamos?",4,"1987-09-24","1999-12-16","Lorem Ipsum ...");       

INSERT INTO category_note

VALUES (DEFAULT,1,3),
       (DEFAULT,1,8),
       (DEFAULT,3,8),
       (DEFAULT,2,7),
       (DEFAULT,9,6),
       (DEFAULT,4,4),
       (DEFAULT,5,2),
       (DEFAULT,8,1),
       (DEFAULT,9,4),
       (DEFAULT,7,5);        