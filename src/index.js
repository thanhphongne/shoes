const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourses/views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})