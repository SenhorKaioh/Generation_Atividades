CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
categoria VARCHAR(50) NOT NULL,
descricao VARCHAR(255)
);

CREATE TABLE tb_produto(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
data_validade DATE,
quantidade INT,
preco DECIMAL NOT NULL,
categoria_id BIGINT,
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias(categoria, descricao)
VALUE ("Remedio","Xarope para tosse"),
	  ("Cosmetico","Uso facial"),


