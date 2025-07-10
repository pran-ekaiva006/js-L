// primitive

// 7 type: string,Number,Boolean,null,undefined,symbol,BigInt


const Score=100
const Myscore=100.2
 const isloggedIn=false
const OutsideTemp=null
let UserEmail;
 

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=1388373688999999999999999n

console.log(typeof bigNumber)

//reference(Non primitive)

//array, objects,function

const name=["Ravi","Pankaj","Ayush","Dipak","Yashwant"]

let myobj={
    name:"Pranjal",
    age:22
}

const myfunction=function(){
    console.log("hello World")
}
console.log(typeof myobj)