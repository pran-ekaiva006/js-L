const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=true;
const loggedInfromEmail=true;

if(userLoggedIn&&debitCard){
    console.log("Allow")
}
if(loggedInFromGoogle||loggedInfromEmail){
    console.log("new log")
}