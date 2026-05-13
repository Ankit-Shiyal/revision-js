
// var is a functional scop variable

function message(){
    var msg="good morning"

    console.log("in function", msg)

    if(true){
        console.log("in if condition", msg)
    }
}

message()

// var declaration

var name;

// initialization

name= "Ankit"

console.log("declaration and initialization", name)

// reinitialization

var name =" Ankit Shiyal"

console.log("reinitialization" , name)