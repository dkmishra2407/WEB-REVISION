class devansh{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    callname(){
        return this.name;
    }
}

let deva = new devansh("deva king",20);
console.log(deva.callname());

// deleting the property 

delete deva.age;
console.log(deva.age)

let jsondata = JSON.stringify(deva);
console.log(jsondata)