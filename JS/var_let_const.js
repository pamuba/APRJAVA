//SCOPING
//var , let , const
// function fn(){
//     var a = "LOL"
//     let b = "Hi"

//     console.log(a, " ", b)


//     {
//        c = "horse"
//        let d = "apple"
//        console.log(c, " ", d)
//     }

//     console.log(c)
//     // console.log(d) not defined
// }
// fn();

// console.log('Outside:'+c)

var funcs = []
for (var i=0; i<3;i++) {
    funcs[i] = function(){
        console.log("My Value: "+i)
    };
}

for(var j=0;j<3;j++){
    funcs[j]()
}