const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('./public/'))
app.use("/studentdata", (req, resp) => {
  const list = [{ "id": 1, name: "abc" }, { "id": 2, name: "abcd" }]
  resp.send(list)
})


const facilitiesRoute = require('./routes/facilities')
app.use('/facilities', facilitiesRoute)
app.use("/", (req, resp) => {
  // throw new Error("Somthing fucked up")
  resp.render(`index`, { name: "Ninja" })
})

app.use(function errorHandler(err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
})
app.listen(4000)