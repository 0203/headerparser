// server.js
// where your node app starts

// init project
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const useragent = require("express-useragent");

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(useragent.express())
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var api = '/api/whoami';

app.get(api, function(request,response,next){
  var language = request.acceptsLanguages();
  var software = "OS: "+ request.useragent.os +" ,";
  var ipaddress = request.ip;
  response.json({'ipaddress':ipaddress, 'language':language[0], 'software':software});
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
