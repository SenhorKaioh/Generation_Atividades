CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_produtos(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
sabor VARCHAR(100),
categoria VARCHAR(100) NOT NULL,
quantidade INT,
preco DECIMAL(6,2) NOT NULL
);

INSERT INTO tb_produtos(nome, sabor, categoria, quantidade, preco) VALUE
("Bolo Ana Maria", "chocolate", "Alimentos", 30 ,2.99),
("Bolo Ana Maria","Baunilha", "Alimentos", 40 , 2.99),
("Bolo Ana Maria", "Chocolate C/baunilha", "Alimentos", 15 , 2.99),
("Maça", " ", "Fruta", 55, 0.99),
("Banana", " ", "Fruta", 200, 0.68),
("Tomate", " ", "Fruta", 150, 0.59),
("Maquina de Lavar", " ", "Aparelho Domestico",  100 , 1999.99),
("Televisão 100'' ", " ", "Aparelho Domestico",  100 , 3999.99),
("Caixa de som", " ", "Aparelho Domestico",  100 , 1899.99);

SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 500;

SELECT * FROM tb_produtos WHERE preco < 500;

UPDATE tb_produtos SET preco = 2100.0 WHERE Id = 7;



