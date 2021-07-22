module.exports = app => {app.get('/dentista',(req,res)=>
    res.send('profissional criado')
);
app.post('/dentista', (req, res) => {
    console.log(req.body)
    res.send('dentista criado com sucesso')
  })

  app.delete('/dentista', (req, res) => {

})

app.put('/dentista', (req, res) => {

})



}