const express = require('express')
const app = express()

app.get('/oi', function (req, res) {
  res.send('Olá Mundo!')
})

const itens = ['Rick', 'Morty', 'Summer']


app.get('/item', function(req, res){
  res.send(itens)
})

app.listen(3000)