const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())


app.listen(8000, () => {
  console.log('the port is running on ' + PORT)
})

app.get('/', (req, res) => {
  res.json('hi')
  console.log(req.query.hello)
  console.log(process.env.REACT_STOCK_API)
})

app.get('/newsFeed', (req, res) => {
  //please dont look at this mess
  // promises.......
  (() => {
    fetch(`https://stocknewsapi.com/api/v1?tickers-only=${req.query.companyName}&items=3&page=1&token=${process.env.REACT_APP_NEWS_API}`).then((x) => {
      x.json().then((y) => {
        res.json(y)
      })
    })

  })()
})

app.get('/stockInfo', (req, res) => {
  (() => {
    fetch(`https://api.iex.cloud/v1/data/CORE/IEX_TOPS/${req.query.companyName}?token=${process.env.REACT_APP_STOCK_API}`).then((info) => {
      info.json().then((temp) => {
        res.json(temp)
      })
    })

  })()
})

app.get('/stockAutocomplete', (req, res) => {
  (() => {
    fetch(`https://cloud.iexapis.com/stable/search/${req.query.companyName}?token=${process.env.REACT_APP_STOCK_API}`).then((info) => {
      info.json().then((temp) => {
        //returns only stocks located in the us
        let clean = []
        temp.forEach(element => {

          if (element.region == 'US') {
            clean.push(element)
          }
        });
        res.json(clean)
      })
    })

  })()
})
