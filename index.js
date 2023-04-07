const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())


app.listen(8000, () => {
  console.log('the port is running on' + PORT)
})

app.get('/', (req, res) => {
  res.json('hi')
  console.log(req.query.hello)
  console.log(process.env.REACT_STOCK_API)
})

app.get('/stockInfo', (req, res) => {
  (() => {
    fetch(`https://api.iex.cloud/v1/data/CORE/IEX_TOPS/${req.query.companyName}?token=${process.env.REACT_APP_STOCK_API}`).then((info) => {
      console.log(info)
      let infoClean = info.json()
      res.json(infoClean)
    })

  })()
})
