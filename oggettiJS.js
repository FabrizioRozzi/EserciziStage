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
      super(nome, cognome); //super() richiama il costruttore della 'classe' Persona
      this.linguaggiConosciuti = [];
    }
  }
  
  var alfonsoGraziano = new Programmatore('Alfonso', 'Graziano');
  console.log(alfonsoGraziano);
}


/////////////////////////////////
/////////////////////////////////
//////// SNACK Reflect //////////
/////////////////////////////////
/////////////////////////////////


/**
 * Vari metodi di Reflect applicati
 */
function playReflect(){
  var myObject = Object.create(null);
  var myObject = {id: 123, name: "objName"};
  console.log(Reflect.ownKeys(myObject)); //Restituisce un'array con le chiavi dell'oggetto ["id", "name"]
  console.log(Reflect.has(myObject, "name")); //Restituisce true se esiste una proprietá "name" in myObject
  console.log(Reflect.get(myObject, "name")); //Restituisce il valore della proprietá "name"
  Reflect.set(myObject, "name", "anotherName");//Cambio il nome tramite set()
  console.log(Reflect.get(myObject, "name")); //anotherName
  console.log(Reflect.deleteProperty(myObject, "name"));//Elimina la proprietá e restuitisce un booleano per conferma
}


/**
 * Gestione del costruttore con Reflect
 */
function creaAuto(){
  class Automobile {
    constructor(modello, colore) {
       this.modello = modello;
       this.colore = colore;
    }
  }
  
  var bmw = produciAuto("X5", "Bianco perla");
  console.log(bmw);
  
  function produciAuto(modello, colore) {
    return Reflect.construct(Automobile, [modello, colore], Automobile);
  }
}