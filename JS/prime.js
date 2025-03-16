
function isprime(n){

    for(let i=2;i<sqrt(n);i++){
        if(n%i === 0){
            return 0
        }
    }

    return
}

if(isprime(5) === 1){
    console.log("Prime")
}
else{
    console.log("Not Prime")
}