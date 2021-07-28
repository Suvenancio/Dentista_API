
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');


const DENTISTA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DENTISTA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(65) not null,
    "EMAIL" varchar(65),
    "CRO" varchar(65)  not null,
    "ESPECIALIDADE" varchar(65)  not null
  );`;

const DENTISTA_DATA = `
INSERT INTO DENTISTA ( NOME, EMAIL, CRO, ESPECIALIDADE) VALUES 
    ('Emelli Marini', 'emellimarini@odontovidacuritiba.com.br', 23016, 'Estética Dental'),
    ('Juliana Oliveira', 'oliveira.juliana@gmail.com', 35016, 'Cirurgiã Dentista'),
    ('Jose Maria Lopes', 'marialopes_jose@yahoo.com.br', 12345, 'Ortodontista') 
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

