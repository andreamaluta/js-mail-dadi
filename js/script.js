// ESERCIZIO DEI DADI

// creo le variabili che contengono i valori numerici
// variabile per il computer
let computerNum = Math.floor((Math.random()*6)+1);
console.log(`Il valore del dado del computer è ${computerNum}`);
// variabile per l'utente
let userNum = Math.floor((Math.random()*6)+1);
console.log(`Il valore del dado dell'utente è ${userNum}`);

// scrivo le istruzioni condizionali per controllare e stampare chi ha il valore maggiore
// controllo se il computer ha il dado con il valore maggiore
if(computerNum>userNum){
    console.log("Il computer vince!");
}
// controllo se l'utente ha il dado con il valore maggiore
else if(userNum>computerNum){
    console.log("L'utente vince!");
}
// controllo se i valori dei due dadi sono uguali e quindi è un pareggio
else{
    console.log("I due dadi hanno valore uguale. L'utente e il computer hanno pareggiato");
}


// ESERCIZIO DELLE MAIL

// creo l'array che contiene le mail degli invitati
const guests = ["andreamaluta@mail.com", "mariorossi@mail.com", "giuliocesare@mail.com", "alessandromanzoni@mail.com", "marco.aurelio@mail.com", "giulioferrari@mail.com"];

// chiedo all'utente la sua mail
let userMail = prompt("Inserisci la tua mail");

// inizializzo una variabile di controllo
let flag = false;

// costruisco il ciclo per controllare se la mail è presente nella lista
for(let i=0; i<guests.length; i++){
    if(guests[i]==userMail){
        flag = true;
    }
}

// stampo se è presente nella lista in base al risultato della variabile di controllo
//  se flag è true stampo che si è presente sulla lista
if(flag){
    console.log("Sei presente sulla lista e puoi entrare");
}
// se flag è false stampo che non si è presente sulla lista 
else{
    console.log("Non sei presente sulla lista e non puoi entrare");
}