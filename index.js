const express = require('express')
const app = express()

app.get('/oi', function (req, res) {
  res.send('Olá Mundo!')
})

//criar uma rota [GET] /oi que retorna ola mundo

app.listen(3000)