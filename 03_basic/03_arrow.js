const user={
    userName:"Pranjal",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName},Welcome to Website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     userName:"pranjal"
//     console.log(this.userName)
// }
// chai()


const chai =()=>{
    let userName="pranjal"
    console.log(this);
}
// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// const addTwo=(num1,num2)=> num1+num2;
// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=>({userName:"pranajl"})


console.log(addTwo(3,4))