//Date


let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let createDate = new Date("01-26-2025");
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(createDate.getTime());

console.log(Math.floor(Date.now()/1000))


let pDate=new Date()
console.log(pDate)
console.log(pDate.getMonth())
console.log(pDate.getUTCMinutes())


pDate.toLocaleString('default',{
weekday:"long",


    })