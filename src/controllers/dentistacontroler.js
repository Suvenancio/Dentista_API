const DentistaDAO = require('../DAO/dentistaDAO')
const Dentista = require('../model/dentistamodel')

module.exports = (app,bd) =>{
    const DaoDentista = new DentistaDAO(bd)

    app.get('/dentista', async (req, res)=>{
        try{
            const verDentista = await DaoDentista.MostrarDentista()
                res.status(200).json(verDentista)
        }catch(e){
            res.status(500).json(e)
        }
    })

    app.get('/dentista/:CRO', async (req,res)=>{
        const id = req.params.CRO;
        console.log(id)
        try{
 
            const verUmDentista = await DaoDentista.MostrarUmDentista(id)
            res.status(200).json(verUmDentista)
            }catch(e){
                res.status(500).json(e)
            }
    })

    app.post('/dentista', async (req,res)=>{
        const {NOME, EMAIL, CPF, CRO, ESPECIALIDADE} = req.body
        const newDentista = new Dentista(NOME, EMAIL, CPF, CRO, ESPECIALIDADE);

        try{
            const inserirDentista = await DaoDentista.NovoDentista(newDentista)
            res.status(200).json(inserirDentista)
        }catch(e){
            res.status(400).json(e)
        }
    })

    app.delete('/dentista/:CRO', async (req,res)=>{
        const conselho = req.params.CRO
        
        try{
           const deletarDentista = await DaoDentista.DeletarDentista(conselho)
           res.status(200).json(deletarDentista)
        }catch(e){
            res.status(500).json(e)
        }
    })

    app.put('/dentista/:CRO', async (req,res)=>{
        const conselho = req.params.CRO
        const body = req.body
        const infos = [body.NOME, body.EMAIL, body.CRO, body.ESPECIALIDADE]
    

        try{
            const alterarDentista = await DaoDentista.AlterarDentista(infos,conselho)
            res.status(200).json(alterarDentista)
        }catch(e){
            res.status(500).json(e)
        }

    })
}