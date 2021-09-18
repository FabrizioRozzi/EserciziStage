/////////////////////////////////
/////////////////////////////////
////// SNACK Switch Case ////////
/////////////////////////////////
/////////////////////////////////



/**
 * Richiedo all'utente il voto tramite prompt e lo trasformo in un intero con il metodo parseInt per fare i confronti con lo switch case 
 */
function compareVote(){
  var voto=parseInt(prompt('Inserisci il voto: '));
  switch (voto) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      giudizio = "insufficiente";
      console.log(giudizio);
      break;
    case 6:
      giudizio = "sufficiente";
      console.log(giudizio);
      break;
    case 7:
      giudizio = "discreto";
      console.log(giudizio);
      break;
    case 8:
      giudizio = "buono";
      console.log(giudizio);
      break;
    case 9:
      giudizio = "ottimo";
      console.log(giudizio);
      break;
    case 10:
      giudizio = "eccellente";
      console.log(giudizio);
      break;
    default:
      messaggio = "non classificato";
      console.log(messaggio);
      break;
  }
}


/////////////////////////////////
/////////////////////////////////
///// SNACK For-in For-off //////
/////////////////////////////////
/////////////////////////////////




/**
 * Ciclo il mio array per calcolarne la somma tramite ciclo for-in dove ad ogni ciclo viene preso ogni valore dell'array tramite indice che ad ogni ciclo scala sul successivo
 */

function sumCalculatorIn(){
  var quantita = [12, 34, 45, 7, 19];
  var totale = 0;
  var indice;
  for (indice in quantita) {
    totale = totale +  quantita[indice];
  }
  return totale;
}




/**
 * Stesso esercizio svolto con il for-of dove ad ogni ciclo non viene preso l'indice dell'array ma l'elemento in esso e ad ogni ciclo passa al successivo elemento
 */
function sumCalculatorOf(){
  var quantita = [12, 34, 45, 7, 19];
  var totale = 0;
  var valore;
  for (valore of quantita) {
    totale = totale +  valore;
  }
  return totale;
}



/////////////////////////////////
/////////////////////////////////
/////SNACK Break Continue ///////
/////////////////////////////////
/////////////////////////////////



/**
 * Interrompo il loop tramite un'altra condizione con annesso break dove continua a ciclare finche é valido la condizione con il break 
 */
function loopBreak(){
  var x=0;
  while (true) {
    console.log(x);
    // condizione di uscita
    if (x > 5) break;
      x++;
      console.log('Sono if e la x vale: ' + x);
  }
  console.log('Sono fuori il while');

}


//Con il continue interrompo solo le istruzioni nell'if e non il ciclo

function loopContinue(){
  var x = 0;
  while (x < 10) {
    console.log('Sono nel while');
    x++;
    if (x > 3) continue;
    // se x è maggiore di 3, questa istruzione non viene più eseguita
    console.log(x);
  }
  console.log('Sono fuori il while');
}







