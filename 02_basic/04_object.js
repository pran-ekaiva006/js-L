// const tinder=new Object(). //singleton object

// const tinderuser={}. //non singleton object
const tinderUser={}
tinderUser.id="1234"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regular={
    email:"emaple@gmail.com",
    fullname:{
        userfullname:{
        firstname:"pranjal",
        lastname:"verma"
        }
    }
}
// console.log(regular)
// console.log(regular.fullname)
// console.log(regular.fullname?.userfullname.firstname)

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e"
}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// const obj3={...obj1,...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:"example@gmail.com"
    },
    {
        id:2,
        email:"pran@gmail.com"
    }
]

const j=users[1].id
console.log(j)
