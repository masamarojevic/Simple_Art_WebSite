//const a= 10
//const b = 5

/*function Log(text){
    console.log(text)
}
Log('Godmorgon')
Log('Hejda')*/

/*const c= a+b / 3
function AddThenDivide(){

}

console.log(c)*/
function AddThenDivide(a,b){
    const c = (a +b)/3
    console.log(c) //det kan nu raderas
    return c // och har avslutas funktion, det kan inte forsatta med nagot annat kod efter den 
}
const svar = AddThenDivide(5,10) // ar lika med c