//Steps to setup a express project
// 1. npm init
// 2. npm install express --save

const express = require('express')
const app = express()
const users = require('./routes/user')

app.use('/api', users )

app.get('/', function(req,res){
    res.send('Hello World!')
})

app.listen(8000, function() {
    console.log('listening on http://localhost:8000')
})

// backend implementation
// 1. history about nodejs
// 2. implemented a basic server using nodejs
// 3. then we moved to expressjs
    // 3.1 created a basic server using expressjs
    // 3.2 created routes/api's