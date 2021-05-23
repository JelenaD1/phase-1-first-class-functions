function receivesAFunction(callback){
return callback()
}

//receivesAFunction(function(){return spy})


function returnsANamedFunction(){
    return function fn(){"Jelena"}
}

function returnsAnAnonymousFunction(){
    return function(){" "}
}