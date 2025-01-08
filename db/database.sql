CREATE DATABASE IF NOT EXISTS  rentasColmar;

USE rentasColmar;

CREATE TABLE IF NOT EXISTS rentasPasto(

    id INT NOT NULL AUTO_INCREMENT,
    fecha DATE,
    metros INT,
    precio INT,
    total INT,
    PRIMARY KEY(id)
);

insert into rentasPasto VALUES (1,'2025-01-08',10,17,2500);
insert into rentasPasto VALUES (2,'2025-02-03',35,10,2500);