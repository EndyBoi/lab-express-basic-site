const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response, next) => {
	response.sendFile(__dirname + '/views/home.htm')
})

app.get('/about', (request, response, next) => {
	response.sendFile(__dirname + '/views/about.htm')
})

app.get('/works', (request, response, next) => {
	response.sendFile(__dirname + '/views/works.htm')
})

const PORT = 3000
app.listen(PORT, () => {
	console.log(`My first app listening on port ${PORT}! `)
})
