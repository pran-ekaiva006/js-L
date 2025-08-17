let a=10;
const b=20;
if(true){
    let a=200;
    let b=300;
//    
function one(){
    const username="pranjal";
    function two(){
        const website="youtube";
        console.log(username)
    }

  console.log("inner: ",a);
}

console.log(a)
e.log(website)
    two()
}
one()

if(true){
    const username="pranjal"
    if(username=="pranjal"){
        const website="youtube";
      
        console.log(username+website)
    }
    console.log(website)
}
console.log(username)


//++++++++++++++++++++++++++ interesting++++++

addone(5) //we can use
function addone(num){
    return num+1;
}
// addtwo(5) *******we cannot use here*****

const addtwo=function(num){
    return num+2;
}
addtwo(5)