const express = require('express')
const app = express()

app.post('/api/users', function (req, res) {
    console.log('Here')
  res.send('Hello World')
})

app.listen(3001, () => {
    console.log('Server running...')
})