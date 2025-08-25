const userEmail="e"

// if(userEmail){
//     console.log("Got user Email")
// }else{
//     console.log("don't have user Email")
// }


// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value

//"0",'false'," ",[],{},function(){}


if (userEmail.length===0) {
    console.log("array is empty")
    
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("it work")
}

//Nullish Coalescing operator (??):null undefined

let val1;
// val1=5??10
val1=null??10

console.log(val1)


//Terniary operator 

//condition?true:false

const coldcoffeprice=100;

coldcoffeprice<=200?console.log(`yes`):console.log(`false`)