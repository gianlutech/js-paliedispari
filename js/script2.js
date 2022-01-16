/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
console.log('JS OK');


const input = prompt('scegliere pari o dispari');
const uomo = parseInt(prompt('numero da 1 a 5'));

const computer = numeroCasuale(1, 5);

let somma = uomo + computer;
console.log(somma);

let pariOdispari = pod(somma);

if (input == pariOdispari) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

// restituice un nmero casuale
// tra [min..max]
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// restituisce pari o dispari
function pod(numero) {
    if (numero % 2 == 0)
        return "pari";
    else
        return "dispari";
}
