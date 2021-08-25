
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');


const DENTISTA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DENTISTA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(65) not null,
    "EMAIL" varchar(65),
    "CPF" VARCHAR (20) not null,
    "CRO" varchar(65)  not null,
    "ESPECIALIDADE" varchar(65) not null,
    "FOTO" varchar (255),
    "CIDADE" varchar(65) 
  );`;

const DENTISTA_DATA = `
INSERT INTO DENTISTA ( NOME, EMAIL, CPF, CRO, ESPECIALIDADE, FOTO, CIDADE) VALUES 
    ('Emelli Marini', 'emellimarini@gmail.com.br','123.456.789-10', '23016-PR', 'Implantodontia','https://cdn3.iconfinder.com/data/icons/blonde-woman-professions/512/15-512.png', 'Curitiba'),
    ('Juliana Tanaka', 'oliveira.juliana@gmail.com', '109.87.6543-21' ,'35016-PR', 'Clinico Geral','https://cdn2.iconfinder.com/data/icons/asian-woman-professions/512/15-512.png', 'Curitiba'),
    ('Jose Maria Lopes', 'lopes_jose@yahoo.com.br', '092.222.333-44', '12345-PR', 'Ortodontia', 'https://cdn1.iconfinder.com/data/icons/blonde-man-professions/512/015-512.png', 'Curitiba'),
    ('Fernado Teixeira', 'drfernandoteixeira@gmail.com', '125.852.369-11', '45750-RJ', 'Implantodontia' ,'https://cdn1.iconfinder.com/data/icons/indian-man-professions/512/15-512.png', 'Rio de Janeiro'),
    ('Andressa Tavares', 'andressatavaresontoto@gmail.com', '112.741.586-88', '25141-RJ', 'Clinico Geral','https://cdn2.iconfinder.com/data/icons/redheaded-woman-professions/512/15-512.png', 'Rio de Janeiro'),
    ('Jessica Magalhães', 'drajessicamagalhaes@gmail.com', '111.258.777-88', '32145-RJ', 'Ortodontia', 'https://cdn3.iconfinder.com/data/icons/indian-woman-professions/512/15-512.png', 'Rio de Janeiro'), 
    ('João Felipe Cortez', 'drajoaofelipe@gmail.com', '021.222.333-55', '12355-SP', 'Clinico Geral', 'https://cdn1.iconfinder.com/data/icons/white-man-with-black-hair-professions/512/015-512.png', 'São Paulo'), 
    ('Janaina Jaques', 'drajanainajaques@gmail.com', '011.333.852-11', '3145-SP', 'Ortodontia', 'https://cdn2.iconfinder.com/data/icons/white-woman-with-black-hair-professions/512/15-512.png', 'São Paulo'),
    ('Fernando Fernandes', 'drfernandofernandes@gmail.com', '088.228.952-88', '7145-SP', 'Implantodontia', 'https://cdn1.iconfinder.com/data/icons/red-head-man-professions/512/15-512.png', 'São Paulo') 

    `
    
function tabelaDentista() {
    db.run(DENTISTA_SCHEMA, (e)=> {

       if(e) console.log("erro ao criar tabela dentista");
    });
}

function incluirDentista() {
    db.run(DENTISTA_DATA, (e)=> {
       if (e) console.log("erro ao incluir dentista na tabela.");
    });
}

db.serialize( ()=> {
    tabelaDentista();
    incluirDentista();
});

