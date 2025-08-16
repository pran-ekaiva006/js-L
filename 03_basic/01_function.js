function sayMyName(){
    console.log("p")
    console.log("R")
    console.log("a")
    console.log("N")
    console.log("j")
    console.log("A")
    console.log("l")
}

// sayMyName()

// function add(num1,num2){
//     console.log(num1+num2)
// }
add("null",1)

function add(num1,num2){
    // let result=num1+num2;
    // return result;

    return num1+num2;
}
const result=add(2,4)
// console.log("Result:",result);


function loginuser(username="sam"){
    if(!username){
        console.log("please enter user name")
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser("jam"))


function calculatecardprice(val1,...num1){
    return num1
}

// console.log(calculatecardprice(200,300))

const user={
    username:"pranjal",
    price:200

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)

handleobject({
    username:"sam",
    price:123
})

const arr=[200,400,600]


function returnsecondval(getarray){
return getarray[1]
}

console.log(returnsecondval(arr))

console.log(returnsecondval([12,14,60,30]))