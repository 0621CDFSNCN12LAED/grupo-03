USE morfi_db;
--user_category
LOCK TABLES `user_categories` WRITE;
INSERT INTO
  `user_categories`
VALUES
  (
    DEFAULT,
    'client',
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'admin',
    DEFAULT,
    DEFAULT,
    DEFAULT
  );
UNLOCK TABLES;
--product_category
  LOCK TABLES `product_categories` WRITE;
INSERT INTO
  product_categories
VALUES
  (DEFAULT, 'Carnes', DEFAULT, DEFAULT, DEFAULT),
  (DEFAULT, 'Pescados', DEFAULT, DEFAULT, DEFAULT),
  (DEFAULT, 'Pollos', DEFAULT, DEFAULT, DEFAULT),
  (DEFAULT, 'Veganos', DEFAULT, DEFAULT, DEFAULT);
UNLOCK TABLES;
--users
  LOCK TABLES `users` WRITE;
INSERT INTO
  `users`
VALUES
  (
    DEFAULT,
    'Wadsworth',
    'Garard',
    'wgarard0@tuttocitta.it',
    '$2a$12$OG/XMNJe5feFqhtKPbnGou8lFlJ46Vb625q86NVeN0N.6HQK.xD6K',
    DEFAULT,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Jarad',
    'Lumsdale',
    'jlumsdale1@ox.ac.uk',
    '$2a$12$IaYCnOqMTA87V.e3SQGjxepCA12xBLG5VQeyxgx2jYgUhKQn5bsvS',
    DEFAULT,
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Far',
    'Loncaster',
    'floncaster2@bbb.org',
    '$2a$12$beZ5T2KU3TNMk2/frjYmq.JiLZCvC/O.lLI2uJSTShqbVAGpBdXMy',
    DEFAULT,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Bendick',
    'Click',
    'bclick3@theglobeandmail.com',
    '$2a$12$xT5J3RpBRyPbfB4XYKgbZ.UygpyF.MyEOLiHLTZ8mKKsa.Q7Nr5I.',
    DEFAULT,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  );
UNLOCK TABLES;
--products
  LOCK TABLES `products` WRITE;
INSERT INTO
  `products`
VALUES
  (
    DEFAULT,
    'Alascr',
    500.00,
    0.500,
    'justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut',
    '/images/products/alascr.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Albcarcoci',
    500.00,
    0.500,
    'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum',
    '/images/products/albcarcoci.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Albondondiga',
    500.00,
    0.500,
    'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros',
    '/images/products/albond.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Albondiga de queso',
    500.00,
    0.500,
    'bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non',
    '/images/products/albqueso.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Alcarcr',
    500.00,
    0.500,
    'auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
    '/images/products/alcarcr.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Alitas de pollo',
    500.00,
    0.500,
    'dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
    '/images/products/alitas.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Anillas',
    500.00,
    0.500,
    'semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo',
    '/images/products/anillas.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Calabaza',
    500.00,
    0.500,
    'tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo',
    '/images/products/calabaza.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Camarones',
    500.00,
    0.500,
    'sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet',
    '/images/products/camarones.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Caprese',
    500.00,
    0.500,
    'id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante',
    '/images/products/caprese.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Cazuelas',
    500.00,
    0.500,
    'eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin',
    '/images/products/cazuelas.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pollo con chedar',
    500.00,
    0.500,
    'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum',
    '/images/products/chedarpollo.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Croc',
    500.00,
    0.500,
    'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
    '/images/products/croc.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Crocaven',
    500.00,
    0.500,
    'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst',
    '/images/products/crocaven.jpg ',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Croqu',
    500.00,
    0.500,
    'justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien',
    '/images/products/croqu.jpg ',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Espinaca',
    500.00,
    0.500,
    'sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras',
    '/images/products/espinaca.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete de atun',
    500.00,
    0.500,
    'eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan',
    '/images/products/filatun.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete boga',
    500.00,
    0.500,
    'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus',
    '/images/products/filboga.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete dorado',
    500.00,
    0.500,
    'sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
    '/images/products/fildorado.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete de merluza',
    500.00,
    0.500,
    'morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat',
    '/images/products/filmerl.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete peje',
    500.00,
    0.500,
    'rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
    '/images/products/filpeje.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete sabalo',
    500.00,
    0.500,
    'nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
    '/images/products/filsabalo.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Hierbas finas',
    500.00,
    0.500,
    'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
    '/images/products/finashierbas.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Garbanzos',
    500.00,
    0.500,
    'odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper',
    '/images/products/garbanzos.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Haaven',
    500.00,
    0.500,
    'ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec',
    '/images/products/haaven.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Jamon bpo',
    500.00,
    0.500,
    'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
    '/images/products/hambpo.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Jamon de pollo',
    500.00,
    0.500,
    'donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
    '/images/products/hambpoll.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Hamburguesa de carne cruda',
    500.00,
    0.500,
    'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas',
    '/images/products/hamcarncrud.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Hamburguesa de carne',
    500.00,
    0.500,
    'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas',
    '/images/products/hamcarne.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Kani Kama',
    500.00,
    0.500,
    'duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum',
    '/images/products/kanikama.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Kippol',
    500.00,
    0.500,
    'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
    '/images/products/kippol.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Langostinos',
    500.00,
    0.500,
    'suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa',
    '/images/products/langostinos.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Lentejas',
    500.00,
    0.500,
    'justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales',
    '/images/products/lentejas.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Lentejas rect',
    500.00,
    0.500,
    'consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
    '/images/products/lentejasrect.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Medallon de espinaca',
    500.00,
    0.500,
    'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce',
    '/images/products/medespi.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Medallon de jamon y queso',
    500.00,
    0.500,
    'nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus',
    '/images/products/medjyq.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Medallon de merluza',
    500.00,
    0.500,
    'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla',
    '/images/products/medmerl.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Medallon de pollo',
    500.00,
    0.500,
    'proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem',
    '/images/products/medpollo.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Merluza de calabaza',
    500.00,
    0.500,
    'bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a',
    '/images/products/merlcalab.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Merluza con espinaca',
    500.00,
    0.500,
    'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio',
    '/images/products/merlespi.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Merluza roma',
    500.00,
    0.500,
    'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus',
    '/images/products/merlroma.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Merluza con roquefort',
    500.00,
    0.500,
    'semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis',
    '/images/products/merlroque.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Merluza con tomate',
    500.00,
    0.500,
    'commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at',
    '/images/products/merltomate.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa de Merluza',
    500.00,
    0.500,
    'arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio',
    '/images/products/milamerl.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa de pata de pollo',
    500.00,
    0.500,
    'orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt',
    '/images/products/milapata.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa con queso',
    500.00,
    0.500,
    'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla',
    '/images/products/milaqueso.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa rectangular',
    500.00,
    0.500,
    'ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    '/images/products/milarectang.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa de soja',
    500.00,
    0.500,
    'duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget',
    '/images/products/milasoja.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Nuggets',
    500.00,
    0.500,
    'integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
    '/images/products/nugget.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pacucocin',
    500.00,
    0.500,
    'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus',
    '/images/products/pacucocin.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Filete pacu',
    500.00,
    0.500,
    'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut',
    '/images/products/pacufil.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pacumit',
    500.00,
    0.500,
    'ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit',
    '/images/products/pacumit.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Papa',
    500.00,
    0.500,
    'nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus',
    '/images/products/papa.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pata de muslo',
    500.00,
    0.500,
    'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur',
    '/images/products/patamus.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Patas de lomo',
    500.00,
    0.500,
    'dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula',
    '/images/products/patas.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Patitas de pollo',
    500.00,
    0.500,
    'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit',
    '/images/products/patitas.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Patitas de jamon y queso',
    500.00,
    0.500,
    'erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque',
    '/images/products/patjyq.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pch',
    500.00,
    0.500,
    'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
    '/images/products/pch.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pechuga de pollo cruda',
    500.00,
    0.500,
    'risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula',
    '/images/products/pechu.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pechuga de pollo',
    500.00,
    0.500,
    'orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis',
    '/images/products/pechuga.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pollo cocido',
    500.00,
    0.500,
    'ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient',
    '/images/products/pococid.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pollo',
    500.00,
    0.500,
    'diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo',
    '/images/products/pollo.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Pollo entero',
    500.00,
    0.500,
    'nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis',
    '/images/products/polloent.jpg',
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Porotos',
    500.00,
    0.500,
    'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu',
    '/images/products/porotos.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Quesillo',
    500.00,
    0.500,
    'tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat',
    '/images/products/quesillo.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Quinoa',
    500.00,
    0.500,
    'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis',
    '/images/products/quinoa.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rabas',
    500.00,
    0.500,
    'metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
    '/images/products/rabas.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Aceitunas rellenas',
    500.00,
    0.500,
    'nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae',
    '/images/products/relleaceituna.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Jamon y queso relleno',
    500.00,
    0.500,
    'vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum',
    '/images/products/rellejyq.jpg ',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Roquefort relleno',
    500.00,
    0.500,
    'orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet',
    '/images/products/relleroq.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rol de jamon y queso',
    500.00,
    0.500,
    'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum',
    '/images/products/roljyq.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Roll de jamon y queso',
    500.00,
    0.500,
    'metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit',
    '/images/products/rolljyq.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rolls verd',
    500.00,
    0.500,
    'lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum',
    '/images/products/rollsverd.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Roll de verdura',
    500.00,
    0.500,
    'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus',
    '/images/products/rollverdur.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rolrok',
    500.00,
    0.500,
    ' nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam',
    '/images/products/rolrok.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rolverde',
    500.00,
    0.500,
    'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis',
    '/images/products/rolverde.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Rosam',
    500.00,
    0.500,
    'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui',
    '/images/products/rosam.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Salmon rosado',
    500.00,
    0.500,
    'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna',
    '/images/products/salmonrosad.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Soja',
    500.00,
    0.500,
    'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque',
    '/images/products/soja.jpg',
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Milanesa suprema',
    500.00,
    0.500,
    'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse',
    '/images/products/supmila.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Truchas',
    500.00,
    0.500,
    'posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet',
    '/images/products/truchas.jpg',
    2,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    'Asado con papas fritas',
    500.00,
    0.500,
    'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse',
    '/images/products/1631766782678.jpg',
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  );
UNLOCK TABLES;
--purchases
  LOCK TABLES `purchases` WRITE;
INSERT INTO
  `purchases`
VALUES
  (
    DEFAULT,
    '2021/11/04',
    2592.4,
    4.3,
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    '2021/11/07',
    8263.29,
    4.47,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    '2021/11/02',
    3866.43,
    3.43,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    '2021/11/01',
    2778.61,
    5.78,
    3,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    '2021/11/06',
    4323.52,
    8.88,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  );
UNLOCK TABLES;
--purchase_product
  LOCK TABLES `purchase_product` WRITE;
INSERT INTO
  `purchase_product`
VALUES
  (
    DEFAULT,
    1000,
    1,
    1,
    40,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    2,
    2.37,
    2,
    40,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    3000,
    3,
    3,
    81,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    4000,
    4,
    4,
    81,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    5000,
    5,
    5,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    6000,
    6,
    1,
    1,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    7000,
    7,
    2,
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    8000,
    8,
    3,
    4,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    9000,
    9,
    4,
    10,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    10000,
    10,
    5,
    10,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    11000,
    11,
    4,
    50,
    DEFAULT,
    DEFAULT,
    DEFAULT
  ),
  (
    DEFAULT,
    12000,
    12,
    5,
    60,
    DEFAULT,
    DEFAULT,
    DEFAULT
  );
UNLOCK TABLES;