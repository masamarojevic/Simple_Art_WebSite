// const enArray=['hej','hejda']

// const Movie ={
//     movieName:"The Batman",
//     minimunAge: 18,
// }
// const Person = {
//     name:"Ana",
//     age:26,
//     hobbies: ['Kodning','Resor'],
//     leksaker:{
//         favorit:'Nallebjorn',
//         secondfavorit:'Lego'
//     }
// }
// const favoritLeksak = Person.leksaker.favorit
// console.log(favoritLeksak)
 const talLista = [10,15,20,30,35,40,45,50,70,80,90,100]

    for (let talIndex in talLista) {
        
        const tal = talLista[talIndex]
        if (tal >= 50){
            console.log(tal)
        }
    }
    
