/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    if (l1 == 0 || l2 == 0){
        return "i lati devono essere maggiori di 0";
    } else {
        return l1 * l2;
    }
}
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Int1 = parseInt(prompt("numero uno"))
let Int2 = parseInt(prompt("numero due"))

function crazySum(Int1, Int2){
    if (Int1 === Int2){
        const risultato = (Int1 + Int2) * 3;
        console.log(risultato);
    } else {
        const risultato =  Int1 + Int2;
        console.log(risultato);
    }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = parseInt(prompt("parametro uno"))

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19);
  

    if (numero > 19) {
      const risultato = differenza *= 3;
      console.log(risultato)
    }
  else {
    return differenza;
    console.log(differenza);
  }
   
  }
  
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numInt = parseInt(prompt("numero intero"))

function boundary(numInt){
    if ( 20 < numInt && numInt <= 100 || n === 400) {
        return true;
        console.log(true);
    } else {
        return false;
        console.log(false);
    }
}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa = prompt("Inserisci parola")
function epify(stringa) {
    // Verifica se la stringa inizia già con "EPICODE"
    if (stringa.startsWith("EPICODE")) {
      return stringa; // Restituisci la stringa originale senza alterazioni
    } else {
      return "EPICODE " + stringa; // Aggiungi "EPICODE" all'inizio della stringa
    }
  }

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
    if (numero <= 0) {
      return false; // Restituisce false se il numero non è positivo
    }
  
    if (numero % 3 === 0 || numero % 7 === 0) {
      return true; // Il numero è un multiplo di 3 o di 7
    } else {
      return false; // Il numero non è un multiplo di 3 o di 7
    }
  }
  
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const input_string = "EPICODE";
const reversed = reverseString(input_string);
console.log(reversed); 

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
