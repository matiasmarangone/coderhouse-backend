const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, resp) => {
    resp.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Server is running on port 4000')
})