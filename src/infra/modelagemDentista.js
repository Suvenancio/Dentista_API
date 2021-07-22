const sqLite3 = require('sqlite3').verbose();
const path = require('path');
const caminho = (__dirname,'../','../','bd.db')
const bd = new sqLite3.Database(caminho);

//Dentista
const DENTISTA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DENTISTA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "REGISTRO" varchar(10),
    "ESPECIALIDADE" varchar(20),
  );`;

  const ADD_DENTISTA_DATA = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, REGISTRO, ESPECIALIDADE)
VALUES 
    (1, 'Emelli Marini', 'emellimarini@odontovidacuritiba.com.br', 23016, 'Estética Dental'),
    (2, 'Juliana Oliveira', 'oliveira.juliana@gmail.com', 35016, 'Cirurgiã Dentista'),
    (3, 'Jose Maria Lopes', 'marialopes_jose@yahoo.com.br', 12345, 'Ortodontista')
`
function criaTabDentista(){
    db.run(DENTISTA_SCHEMA, (erro)=> {
       if (erro)
        console.log("Erro ao criar tabela dentista");
    });
}


function incluiTabDentista(){
    db.run(ADD_DENTISTA_DATA, (erro)=> {
       if (erro)
        console.log("Erro ao incluir dados na tabela de dentista");
    });
}
db.serialize( ()=> {
    criaTabDentista();
    incluiTabDentista();
});