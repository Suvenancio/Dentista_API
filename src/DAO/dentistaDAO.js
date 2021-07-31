module.exports = class DentistaDAO {

    constructor(bd){
        this.bd = bd
    }

    MostrarDentista(){
        return new Promise((resolve,reject)=>{
            const query = 'SELECT * FROM DENTISTA'

            this.bd.all(query, (e,res)=>{
                if(e) reject(`Erro ao mostrar o BD ${e}`)
                else resolve(res)
            })
        })
    }
    MostrarUmDentista(id){
        return new Promise((resolve, reject)=>{
            const query ='SELECT * FROM DENTISTA WHERE CRO = (?)'
            this.bd.all(query,id,(e,res)=>{
                if(e) reject('Erro ao acessar BD')
                else resolve(res)
            })
        })
    }
    NovoDentista(newDentista){
        return new Promise((resolve, reject)=>{
            const query ='INSERT INTO DENTISTA (NOME, EMAIL, CPF, CRO, ESPECIALIDADE) VALUES (?,?,?,?,?)'

            this.bd.run(query,Object.values(newDentista), (e)=>{
                if(e) reject(`Erro ao adicionar dados BD verifique se email e cpf estão seguindo o padrão! `)
                else resolve('Dentista adicionado com sucesso')
            })
        })
    }

    DeletarDentista(newDentista) {
        return new Promise ((resolve, reject) => {
            const query = 'DELETE FROM DENTISTA WHERE CRO = (?)'

            this.bd.run(
                query, newDentista,
                (e,res) => {
                    if(e) reject(`Erro ao deletar Dentista ${e}`)
                else resolve('Dentista excluido com sucesso')
                
            })
        })
    }

    AlterarDentista(infos,CRO){
            
        return new Promise((resolve,reject)=>{

            const query ='UPDATE DENTISTA SET NOME = (?), EMAIL = (?), CRO = (?), ESPECIALIDADE = (?) WHERE CRO = (?)'
            const parametros = [infos[0],infos[1],infos[2],infos[3],CRO]
            console.log(infos)
                
            this.bd.run(query, parametros, (e,res)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Dentista alterado com sucesso')
            })
         })
    }

}