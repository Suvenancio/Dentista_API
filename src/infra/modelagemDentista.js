
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
    "FOTO" varchar (255)
  );`;

const DENTISTA_DATA = `
INSERT INTO DENTISTA ( NOME, EMAIL, CPF, CRO, ESPECIALIDADE, FOTO) VALUES 
    ('Emelli Marini', 'emellimarini@gmail.com.br','123.456.789-10', '23016-PR', 'Implantodontia','https://cdn3.iconfinder.com/data/icons/blonde-woman-professions/512/15-512.png'),
    ('Juliana Tanaka', 'oliveira.juliana@gmail.com', '109.87.6543-21' ,'35016-PR', 'Clinico Geral','https://cdn2.iconfinder.com/data/icons/asian-woman-professions/512/15-512.png'),
    ('Jose Maria Lopes', 'lopes_jose@yahoo.com.br', '092.222.333-44', '12345-PR', 'Ortodontia', 'https://cdn1.iconfinder.com/data/icons/blonde-man-professions/512/015-512.png'),
    ('Fernado Teixeira', 'drfernandoteixeira@gmail.com', '125.852.369-11', '45750-RJ', 'Implantodontia' ,'https://cdn1.iconfinder.com/data/icons/indian-man-professions/512/15-512.png'),
    ('Andressa Tavares', 'andressatavaresontoto@gmail.com', '112.741.586-88', '25141-RJ', 'Clinico Geral','https://cdn2.iconfinder.com/data/icons/redheaded-woman-professions/512/15-512.png'),
    ('Jessica Magalhães', 'drajessicamagalhaes@gmail.com', '111.258.777-88', '32145-RJ', 'Ortodontia', 'https://cdn3.iconfinder.com/data/icons/indian-woman-professions/512/15-512.png') 
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

