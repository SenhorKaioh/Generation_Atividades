CREATE DATABASE db_pizzaria_legal;

USE db_pizzaria_legal;

CREATE TABLE tb_categorias(
Id BIGINT AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR(255) NOT NULL,
farinha VARCHAR(255) NOT NULL
);

INSERT INTO tb_categorias(tipo, farinha)
VALUE ("Salgada", "trigo"),("Vegetariana", "trigo"),("Vegana", "arroz"),("Borda Recheada", "trigo"),("Doce", "trigo");   

SELECT * FROM tb_categorias;


CREATE TABLE tb_pizzas(
Id BIGINT AUTO_INCREMENT PRIMARY KEY,
tamanho VARCHAR(100) NOT NULL,
sabor VARCHAR(255) NOT NULL,
preco decimal(6,2) NOT NULL,
categoriaid BIGINT
);

ALTER TABLE tb_pizzas ADD CONSTRAINT fk_produtos_categorias 
FOREIGN KEY (categoriaid) REFERENCES tb_categorias (id);


INSERT INTO tb_pizzas(tamanho, sabor, preco, categoriaid) 
VALUE ("Pequena", "Frango", 30.00, 1),
      ("Média", "Frango com catupiry", 45.00, 1),
      ("Grande", "Marguerita", 50.00, 2),
      ("Grande", "Calabresa C/borda de cheedar", 60.00, 4),
      ("Média", "Chocolate & MM", 38.00, 5),
      ("Média", "Romeu e Julieta", 38.00, 5),
      ("Pequena", "Mussarela Vegan", 30.00, 3),
      ("Pequena", "Tofu", 32.00, 3),
      ("Familiaa", "Calabresa C/borda de cheedar", 100.00, 4),
      ("Gigante", "Frango C/borda de catupiry", 150.00, 4);

SELECT * FROM tb_pizzas;

SELECT * FROM tb_pizzas WHERE preco > 45.00 ;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00;

SELECT * FROM tb_pizzas WHERE sabor LIKE "%m%";

SELECT tb_pizzas.tamanho, tb_pizzas.sabor, tb_pizzas.preco, tb_categorias.tipo, tb_categorias.farinha
FROM tb_pizzas
INNER JOIN tb_categorias ON tb_pizzas.categoriaid = tb_categorias.Id;

SELECT tb_pizzas.tamanho, tb_pizzas.sabor, tb_pizzas.preco, tb_categorias.tipo,tb_categorias.farinha
FROM tb_pizzas INNER JOIN tb_categorias 
ON tb_pizzas.categoriaid = tb_categorias.Id WHERE tb_categorias.tipo = "Doce";


