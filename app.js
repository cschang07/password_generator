// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const generatePassword = require('./generate_password')
const port = 3000

//setting body-parser
//不管從哪個路由發送過來的請求，都先經過 bodyParser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options }) //{ password: password, options: options }
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})