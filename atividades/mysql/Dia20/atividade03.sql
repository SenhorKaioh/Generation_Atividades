CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tb_aluno(
matricula BIGINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
media_notas DECIMAL(6,2) NOT NULL,
responsavel1 VARCHAR(255) NOT NULL,
responsavel2 VARCHAR(255),
endereco VARCHAR(255) NOT NULL,
contato BIGINT
);

INSERT INTO tb_aluno(nome, media_notas, responsavel1, responsavel2, endereco, contato) VALUE
("Caio Pereira", 8.00, "Fernando luiz", "Eliana Pereira", "Rua das peras 123", 2197812112),
("Caue", 6.0, "luiz", "Fernada", "Rua das flores 1415", 2197812212),
("Cristina", 9.0, "luiz", "Jaqueline", "Rua das paineiras 12", 21978101010),
("Jonas", 5.0, "luiza", "Felipe", "Rua dos mamonas 1", 2197888888),
("Guilherme", 10.0, "Karine", "Carlos", "Avenida floriano 55", 2198954471);
INSERT INTO tb_aluno(nome, media_notas, responsavel1, endereco, contato) VALUE
("Jean", 5.0, "Patricia", "Avenida floriano 25", 2198224991),
("Julia", 9.5, "Carla", "Avenida campos 21", 2198954991),
("Juliano", 4.5, "Flavio", "Avenida gotam 71", 2198984991);

SELECT * FROM tb_aluno;

SELECT * FROM tb_aluno WHERE media_notas > 7.0;

SELECT * FROM tb_aluno WHERE media_notas < 7.0;

UPDATE tb_aluno SET media_notas = 7.50 WHERE matricula = 8;

SELECT * FROM tb_aluno;