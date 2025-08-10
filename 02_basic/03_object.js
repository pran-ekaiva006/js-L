// singleton

// obect literals

const mySym=Symbol("Key1")

const jsuser={
name:"Pranjal",
age:"22",
location:"Bhopal",
email:"example@gmail.com",
isLoggedIn:false,
lastLogin:["Monday","saturday"],
[mySym]:"Mykey1"



}
console.log(jsuser["email"])

console.log(jsuser.mySym)//undefined for symbol
console.log(jsuser[mySym]) //correct

jsuser.email="pran@gmail.com";

console.log(jsuser)
Object.freeze(jsuser)
jsuser.email="vermaclea@gmail.com";
console.log(jsuser)


jsuser.greeting=function(){
    console.log("hello pranjal")
}
jsuser.greeting2=function(){
    console.log(`hello pranjal,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())