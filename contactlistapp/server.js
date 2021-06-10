var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//     res.send("Hello World from Server.js")
// })

app.listen(9000, function(){
    console.log("Servre running @9000")
})