var fs = require('fs')
var https = require('https')
var express = require('express')
var app = express()

var key = fs.readFileSync('sslcert/host.key', 'utf8')
var cert = fs.readFileSync('sslcert/host.cert', 'utf8')

var credentials = {key, cert}

app.use(express.static('public'))

var httpsServer = https.createServer(credentials, app)

httpsServer.listen(8080)
