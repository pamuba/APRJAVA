var express = require('express')
var app = express()
var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist']);


app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){
    console.log("received req from controller")
    
    db.contactlist.find(function(err, docs){
        console.log(docs)
        res.json(docs)
    })
})

app.post('/contactlist', function(req, res){
    console.log(req.body)
})

app.listen(9000, function(){
    console.log("Servre running @9000")
})