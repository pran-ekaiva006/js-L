// Immeditately Invoked Function Expression (IIFE)

(function chai(){
    //named iife
    console.log("DB Conected")
})();
//unknow iife
((name)=>{
    console.log(`Db connected two ${name}`)
})(`pranjal`)
