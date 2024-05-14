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

app.listen(3000)
