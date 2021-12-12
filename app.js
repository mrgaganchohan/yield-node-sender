const express = require('express')
var cors = require('cors')

const { sendToQueue } = require('./sendQueue')
const app = express()
const port = 5000

app.use(cors())
app.get('/', async(req, res) => {
  res.send("Success response")
})
app.get('/sendQueue', async(req, res) => {
  let arg = req.query.message
  let response = await sendToQueue(arg)
  res.json({success:true})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
