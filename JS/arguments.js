function add(){
    let sum = 0;
    for(let a of arguments)
    {
        sum += a;
    }
    console.log(sum)
    console.log(arguments instanceof Array)
}

add(1,2,3,4,5,6,7)