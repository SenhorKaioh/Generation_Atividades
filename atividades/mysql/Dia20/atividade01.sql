create database bd_rh;

use bd_rh;

CREATE TABLE recursos_humanos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    datanascimento DATE,
    salario DECIMAL(6,2) NOT NULL,
    cargo VARCHAR(255)
);

insert INTO recursos_humanos (cpf, nome, datanascimento, salario, cargo)
values ('11111111111','Luisinho', '1940-10-15', 800.00,'Atendente'),
('11111111222','Zezinho', '1940-10-15', 800.00,'Gari'),
('11111111333','Huguinho', '1940-10-15', 3000.00,'Bancario'),
('11111111444',"Fernadinho", '2000-09-5', 5000.00,'Gerente'),
("11111111555","Batman", "1999-08-15", 1000.00,"Supervisor");

select * from recursos_humanos;

select * from recursos_humanos where salario  > 2000;

select * from recursos_humanos where salario < 2000;

UPDATE recursos_humanos SET salario = 9000.0 WHERE Id = 5;
 
select * from recursos_humanos;
