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



/////////////////////////////////
/////////////////////////////////
//////// SNACK Funzioni /////////
/////////////////////////////////
/////////////////////////////////




/**
 * 
 * @param {*} x mathematical operator 
 * @param  {...any} y values
 * @returns the result of the operation performed
 */
function eseguiOperazione(x, ...y) {
  var z = 0;
  switch (x) {
  case "somma":
  for (i in y) {
  z = z + y[i];  
  }
  break;
  case "moltiplica":
  for (i in y) {
  z = z * y[i];
  }
  break;
  case "dividi":
  z = y[0]/y[1];
  break;
  default:
  z = NaN;
  break;
  }
  return z;
  }


/////////////////////////////////
/////////////////////////////////
//// SNACK valueOf toString /////
/////////////////////////////////
/////////////////////////////////

/**
 * methods to view objects
 */
function viewObject(){
  var persona = new Object({nome: "Mario", cognome: "Rossi"});
  console.log(persona.valueOf());
  console.log(persona.toString());
}



/////////////////////////////////
/////////////////////////////////
////////// SNACK RegExp /////////
/////////////////////////////////
/////////////////////////////////


//Un’espressione regolare in JavaScript quindi è un oggetto, con delle proprietà e metodi che consentono di gestire testi, individuare ed eventualmente sostituire stringhe all’interno di altre stringhe.
//Si possono dichiarare o inizializzando una variabile come oggetto RegExp passando come valori il pattern da inizializzare e seguito da una virgola da eventuali modificatori.
//I modificatori sono regole per la ricerca della stringa passata

// var x = new RegExp("abc", "i");
// var y = /abc/i;
// var x = new RegExp("abc", "ig");
// var y = /abc/ig;


//Aggiungendo dei valori nelle [] si specifica ogni parola che inizia per i valori nelle [] e termina in questo caso con 'bc' 

//var y = /[aeiou]bc/i;


//METODO TEST
//Ritorna valore booleano. In questo caso la RegExp "/\d/" verifica se sono presenti valori numerici nella stringa passata al metodo test

// var y = /\d/;
// y.test("str1nga");	//true
// y.test("stringa");	//false

//METODO EXEC
//Ritorna una sottostringa contenente tutti i valori trovati dalla RegExp. Se non trova nessun valore ritorna null.

// var y = /\d/;
// y.exec("str1nga");	//["1"]
// y.exec("stringa");	//null

//METODO SEARCH
//Ritorna l'indice del primo valore riscontrato. In questo caso 3.

// var x = "str1nga".search(/\d/);

//METODO SPLIT
//Divide la stringa iniziale eliminando il valore trovato dalla RegExp.

// var x = "str1nga".split(/\d/);	//["str", "nga"]

//METODO REPLACE
//Sostituisce il valore trovato dalla RegExp con la stringa passata come secondo valore.

// var x = "str1ng4".replace(/\d/g, "numero");	//"strnumerongnumero"

//METODO MATCH
//Ti crea una sottostringa con il valore trovato dalla RegExp.

// var x = "str1ng4".match(/\d/g);	//["1", "4"]



/////////////////////////////////
/////////////////////////////////
////////// SNACK Date ///////////
/////////////////////////////////
/////////////////////////////////

/**
 * calculates the date of the day
 */
function todayDate(){
  var mia_data = new Date();
  // var gg = mia_data.getDate();
  // var mm = mia_data.getMonth()+1;
  // var yyyy = mia_data.getFullYear();
  console.log(`Oggi é il ${gg=mia_data.getDate()}/${mm=mia_data.getMonth()+1}/${yyyy=mia_data.getFullYear()}`);
}

/////////////////////////////////
/////////////////////////////////
///// SNACK .key() .value() /////
/////////////////////////////////
/////////////////////////////////

/**
 * Test Object.key() with array, ordered object and unordered
 */
 function keyObj(){
  // simple array
const arr = ['a', 'b', 'c'];
console.log('Array restituisce indice= '+Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log('Restituisce le keys oggetto= '+Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log('Restituisce le chiavi in ordine crescente e non in posizione= '+Object.keys(anObj)); // console: ['2', '7', '100']

}

/**
 * Test Object.values() with array, ordered object and unordered
 */
function valuesObj(){
  const obj = { foo: 'bar', baz: 42 };
  console.log(Object.values(obj)); // ['bar', 42]

  // Array-like object
  const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
  console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

  // Array-like object with random key ordering
  // When using numeric keys, the values are returned in the keys' numerical order
  const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
  console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']
}


/////////////////////////////////
/////////////////////////////////
// SNACK funzioni di funzioni ///
/////////////////////////////////
/////////////////////////////////


/**
 * function that returns another function
 */

function funInFun(){
  var incrementatore = function(incremento) {
    return function(valore) {
      return incremento + valore;
    };
  };
  
  var incrementaDiCinque = incrementatore(5); 

  console.log(incrementaDiCinque(4));  // 9
  console.log(incrementaDiCinque(16)); // 21
}


/**
 * object consisting of two properties and a function that returns a concatenation of property strings
 */
function helloPersona(){
  var persona = {
    nome: "Mario",
    cognome: "Rossi",
    nomeCognome: function() {
        return(this.nome + " " + this.cognome);
  
    }
  };
  /**
   * Greeting concatenated to the return of the function of the object with bind
   * @param {*} nomePersona function of the object
   */
  function saluta(nomePersona) {
    console.log("Buongiorno " + nomePersona());
  }
  saluta(persona.nomeCognome.bind(persona));
}


/////////////////////////////////
/////////////////////////////////
///// SNACK Arrow function //////
/////////////////////////////////
/////////////////////////////////


/**
 * Example arrow function
 */
function sum(){
  var somma = (x, y) => x + y; //(params), no{}, if there is only one return it can be omitted
  console.log(somma(4, 6));
}

/**
 * If the function has only one parameter, we can omit the round brackets
 */
function doubling(){
  var totale = x => x*2;
  console.log(totale(3)); 
}

/**
 * print in console all the value od the array with arrow function form
 */
function arrowForEach(){
  var numeri = [18, 13, 24];
  numeri.forEach(valore => console.log(valore));
}


function calculator(){
  var numeri = {
    x: 12,
    y: 3,
    calcola: function(operazione) { //La funziona nell'oggetto non puó essere scritta come arrow function 
      var fn;
      switch (operazione) {
        case '+':
          fn = () => this.x + this.y;
        break;
        case '-':
          fn = () => this.x - this.y
        break;
        default:
          fn = () => {};
      }
      return fn();
    }
  }
  console.log(numeri.calcola('+'));
}




/////////////////////////////////
/////////////////////////////////
// SNACK constructor object /////
/////////////////////////////////
/////////////////////////////////

function costruttorePersona(){
  /**
   * Costruttore di oggetti Persona mediante funzione
   * @param {*} nome 
   * @param {*} cognome 
   */
  function persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.mostraNomeCompleto = function(){return this.nome+' '+this.cognome};
  }
  
  var fabrizioRozzi = new persona('Fabrizio', 'Rozzi');
  console.log(fabrizioRozzi.mostraNomeCompleto());
}


/**
 * New obj with standard property and data descriptor
 */

function newOcj(){

  function persona(nome, cognome) {
    this.nome = (nome || "");
    this.cognome = (cognome ||"");
  }
  Persona.prototype.indirizzo = "";
  Persona.prototype.email = "";
  Persona.prototype.mostraNomeCompleto = function() {return this.nome + " " + this.cognome};
  
  var fabrizioRozzi = Object.create(Persona.prototype,
  {
    nome : {value : 'Fabrizio'},
    cognome : {value : 'Rozzi'}
  })
  
  var marioRossi = Object.create(
    Persona.prototype, {
      nome: {
        value        : "Mario",
        writable     : false,
        configurable : false },
      cognome: {
        value        : "Rossi",
        writable     : false,
        configurable : false },
      indirizzo: {
        value        : "",
        writable     : true,
        configurable : true },
      email: {
        _email: { value: "", writable: true, configurable: true },
        get: function() {
            return this._email;
        },
        set: function (value) {
          var emailRegExp = /\w+@\w+\.\w{2,4}/i;
          if (emailRegExp.test(value)) {
            this._email = value;
          } else {
            console.log("Email non valida!");
          }
        }
      },
      nomeCompleto: {
        configurable: true,
         get: function() {return this.nome + " " + this.cognome;}
      }
    }
  );
  console.log(marioRossi, fabrizioRozzi);
  


  function Programmatore(nome, cognome)
  {
    Persona.call(this, nome, cognome); //Eseguiamo il metodo costruttore persona con i dati passati da programmatore()
    this.linguaggiConosciuti = []; //Aggiungiamo una proprietá all'oggetto programmatore
  }

  Programmatore.prototype = Object.create(Persona.prototype); //Impostiamo il prototipo di programmatore facendolo puntare a quello di persona

  var alfonso = new programmatore('Alfonso', 'Graziano');
  alfonso.linguaggiConosciuti.push('php');
  console.log(alfonso);
}


/////////////////////////////////
/////////////////////////////////
///// SNACK classi, extends /////
/////////////////////////////////
/////////////////////////////////
function ecma6Class(){
  class Persona {
    constructor(nome, cognome) {
      this.nome = nome;
      this.cognome = cognome;
      this._email = "";
      this.indirizzo = "";
    }
    mostraNomeCompleto() {
      return this.nome + " " + this.cognome;
    }
  }
  class Programmatore extends Persona {
    constructor(nome, cognome) {
      super(nome, cognome);
      this.linguaggiConosciuti = [];
    }
  }
  
  var alfonsoGraziano = new Programmatore('Alfonso', 'Graziano');
  console.log(alfonsoGraziano);
}