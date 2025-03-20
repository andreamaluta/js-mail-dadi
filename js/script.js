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