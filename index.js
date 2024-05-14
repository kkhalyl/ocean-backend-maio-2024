const express = require('express')
const app = express()

app.get('/oi', function (req, res) {
  res.send('Olá Mundo!')
})

const itens = ['Rick', 'Morty', 'Summer']


app.get('/item', function(req, res){
  res.send(itens)
})

app.get('/item/:id', function(req, res){
  const id = req.params.id
  res.send(itens[id-1])
})

app.use(express.json())

app.post('/item', function(req,res){
  const body=req.body
  const novoItem=body.nome
  itens.push(novoItem)
  res.send('Item adicionado com sucesso: '+novoItem)
})
app.listen(3000)
