CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
classe VARCHAR(30) NOT NULL,
range_ataque VARCHAR(30) NOT NULL
);

INSERT INTO tb_classes (classe,range_ataque)
VALUE ("Arqueiro", "Distancia"),
      ("Mago", "Distancia"),
      ("Feticeiro", "Distancia"),
      ("Lanceiro", "Distancia"),
      ("Cavaleiro", "corpo a corpo"),
      ("Guerreiro", "corpo a corpo"),
      ("Barbaro", "corpo a corpo"),
      ("Monge", "corpo a corpo");
      
 SELECT * FROM tb_classes;     
      
CREATE TABLE tb_personagens(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(30) NOT NULL,
raca VARCHAR(30) NOT NULL,
vida INT NOT NULL,
forca INT NOT NULL,
magia INT NOT NULL,
defesa INT NOT NULL,
classeid BIGINT
);      

ALTER TABLE tb_personagens ADD CONSTRAINT fk_personagens_classes 
FOREIGN KEY (classeid) REFERENCES tb_classes (id);      
      
INSERT INTO tb_personagens(nome, raca, vida, forca, magia, defesa, classeid)
VALUE ("Arthur", "Humano", 200, 2050, 100, 2000,5),
	  ("Merlin", "Humano", 75, 30, 8000, 100, 2),
      ("Konnan", "Humano", 2700, 600, 0, 4500, 7),
      ("Link", "Elfo", 100, 1550, 0, 500, 1),
      ("Jaha", "Anão", 450, 3000, 0, 4500, 6),
      ("Chester", "Centauro", 500, 2500, 0, 3700, 4),
      ("Sarah", "Elfo", 375, 1750, 2000, 1800, 8),
      ("Kazin", "Humano", 170, 120, 4000, 120, 3);
      
 INSERT INTO tb_personagens(nome, raca, vida, forca, magia, defesa, classeid)
VALUE ("Peter", "Humano", 2000, 1050, 0, 2000,5);     
      
SELECT * FROM tb_personagens;

SELECT tb_personagens.nome, tb_personagens.raca, tb_personagens.vida, tb_personagens.forca,
tb_personagens.magia, tb_personagens.defesa,tb_classes.classe, tb_classes.range_ataque
FROM tb_personagens
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id WHERE forca > 2000;               

SELECT tb_personagens.nome, tb_personagens.raca, tb_personagens.vida, tb_personagens.forca,
tb_personagens.magia, tb_personagens.defesa,tb_classes.classe, tb_classes.range_ataque
FROM tb_personagens
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id WHERE defesa BETWEEN 1000 AND 2000;

SELECT tb_personagens.nome, tb_personagens.raca, tb_personagens.vida, tb_personagens.forca,
tb_personagens.magia, tb_personagens.defesa,tb_classes.classe, tb_classes.range_ataque
FROM tb_personagens
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id WHERE nome LIKE "%c%";  

SELECT tb_personagens.nome, tb_personagens.raca, tb_personagens.vida, tb_personagens.forca,
tb_personagens.magia, tb_personagens.defesa,tb_classes.classe, tb_classes.range_ataque
FROM tb_personagens
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id;

SELECT tb_personagens.nome, tb_personagens.raca, tb_personagens.vida, tb_personagens.forca,
tb_personagens.magia, tb_personagens.defesa,tb_classes.classe, tb_classes.range_ataque
FROM tb_personagens
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id WHERE classe LIKE "%Cavaleiro%";  
      
      


