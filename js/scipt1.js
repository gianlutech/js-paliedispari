/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
console.log('JS OK');

const parola = prompt('inserire una parola');


if (isPalindroma(parola)) {
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
}


function isPalindroma(testo) {
    let risultato = "";
    for (let k = testo.length - 1; k >= 0; k--) {
        let current = testo.charAt(k);
        risultato += current;
    }

    return (risultato == testo);
}
