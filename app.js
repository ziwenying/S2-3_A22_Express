const express = require('express')
const app = express()

const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//homePage
app.get('/', (req, res) => {
  res.render('index')
})

//About
app.get('/about', (req, res) => {
  res.render('about')
})

//Portfolio
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

//Contact
app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
