const express = require('express')
const webtry = express()

const port = 3000
const exphbs = require('express-handlebars')

webtry.engine('handlebars', exphbs({ defaultLayout: 'main' }))
webtry.set('view engine', 'handlebars')

webtry.use(express.static('public'))

//homePage
webtry.get('/', (req, res) => {
  res.render('index')
})

//About
webtry.get('/about', (req, res) => {
  res.render('about')
})

//Portfolio
webtry.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

//Contact
webtry.get('/contact', (req, res) => {
  res.render('contact')
})

webtry.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
