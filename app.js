const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send({ message: 'Requisição GET realizada com sucesso' })
})

app.post('/', (req, res) => {
  return res.send({ message: 'Requisição POST realizada com sucesso' })
})

app.listen(3000)

module.exports = app
