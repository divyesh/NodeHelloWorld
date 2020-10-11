const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    var ndate = new Date().toISOString();
    
    res.send('Hello World! ' + ndate)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})