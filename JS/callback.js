
// callback function

function call(name){
    console.log("call called",name);
}

function call2(name,callback){
    
    console.log("call2 called",name);
    callback(name);
}

call2("John",call);

