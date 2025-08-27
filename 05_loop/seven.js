const myNum=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNum.map( (num)=>num+10)
// console.log(newNum)

const newNum=myNum
.map( (it)=>it*10)
.map( (it)=>it+1)
.filter( (it)=> it>40)

console.log(newNum)