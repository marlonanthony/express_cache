const express = require('express') 
const app = express() 

const cache = {}
const midWare = (req, res, next) => {
  const key = req.url
  if(cache[key]) {
    res.send('from cache')
  } else {
    res.sendResponse = res.send
    res.send = (body) => {
      cache[key] = body
      res.sendResponse(body) 
    }
    next() 
  }
}

app.get('/', midWare, (req, res) => {
  setTimeout(() => res.send('message from route /'), 1000) 
})

app.listen(3000, () => console.log('Server: 3000'))