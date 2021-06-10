var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){
    console.log("received req from controller")
    person1 = {
        name: "John",
        email: "john@gamil.com",
        number:"(111) 111-1111"
    };
    person2 = {
        name: "Jim",
        email: "jim@gamil.com",
        number:"(222) 222-2222"
    };
    person3 = {
        name: "Jill",
        email: "jill@gamil.com",
        number:"(333) 333-3333"
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
})

app.listen(9000, function(){
    console.log("Servre running @9000")
})