/////////////////////////////////
/////////////////////////////////
//////// SNACK module //////////
/////////////////////////////////
/////////////////////////////////


// var modulo = (function() {
// 	function metodoPrivato() {
// 		console.log('Ciao mondo!');
// 	}
// 	return {
// 		metodoPubblico: function() {
// 			metodoPrivato();
// 		}
// 	}
// })();

// modulo.metodoPubblico();

/**
 * importazione modulo senza import/export
 */
function importMod(){
  var altroModulo = (function() {
    console.log('Modulo importato');
  })();
  var modulo = (function (moduloEsterno) {
    function metodoPrivato() {
      console.log('Modulo principale');
      moduloEsterno();
      
    }
    return {
      metodoPubblico: function() {
        metodoPrivato();
      }
    }
  })(altroModulo);
  modulo.metodoPubblico(altroModulo);
}


/////////////////////////////////
/////////////////////////////////
//////// SNACK adapter //////////
/////////////////////////////////
/////////////////////////////////

/**
 * Adapter pattern permette di salvare le funzioni di un nuovo oggetto senza andare a sostituire tutte le chiamate nel codice
 */
function adapterObj(){
  var vecchioObj = function() {
    this.metodo = function (x) { console.log('vecchio oggetto' + x) };
  };
  var obj = new vecchioObj(); obj.metodo(123);
  console.log('//////////////////');
  
  var nuovoObj = function() {
    this.nuovoMetodo = function(x) { console.log('nuovo oggetto' + x) };
  };
  var newObj = new nuovoObj(); newObj.nuovoMetodo(123);
  console.log('//////////////////');
  
  var vecchioObj = function() {
    var myObj = new nuovoObj();
    this.metodo = myObj.nuovoMetodo;
  };
  console.log('Vecchio oggetto adattato=');
  var adapterObj = new vecchioObj(); adapterObj.metodo(123);
}


/////////////////////////////////
/////////////////////////////////
///////// SNACK facade //////////
/////////////////////////////////
/////////////////////////////////


/**
 * divido il problema piu grande in piu piccoli con l'ausilio di altri oggetti
 */
function facadeFunc(){
  var Cerchio = function(){
    this.calcolaArea = function(raggio){
      return (raggio*raggio)*3.14;
    }
    this.calcolaCirconferenza = function(raggio){
      return (raggio*2)*3.14;
    }
  }
  
  var Rettangolo = function(){
    this.calcolaarea = function(circonferenzaBase, altezza){
      return circonferenzaBase * altezza;
    }
  }
  
  var Cilindro = function() {
    this.calcolaArea = function(raggio, altezza) {
      var areaBase = cerchio.calcolaArea(raggio);
      var circonferenzaBase = cerchio.calcolaCirconferenza(raggio);
      var areaLaterale = rettangolo.calcolaarea( circonferenzaBase, altezza);
      return (areaBase * 2) + areaLaterale;
    };
  }
  
  var rettangolo = new Rettangolo()
  var cerchio = new Cerchio()
  var cilindro = new Cilindro()
  console.log(cilindro.calcolaArea(10, 10));
}


/////////////////////////////////
/////////////////////////////////
///////// SNACK mvc //////////
/////////////////////////////////
/////////////////////////////////

// var model = { nome: "Mario", cognome: "Rossi" };
// var view = {
// 		txtNome: document.getElementById("txtNome"),
// 		txtCognome: document.getElementById("txtCognome"),
// 		btnSalva: document.getElementById("btnSalva"),
// };
// var controller = {
// 	init: function() {
// 		view.txtNome.value = model.nome;
// 		view.txtCognome.value = model.cognome;
// 		view.btnSalva.onclick = controller.salva;
// 	},
// 	salva: function() {
// 		model.nome = view.txtNome.value;
// 		model.cognome = view.txtCognome.value;
// 		//invia il model al server
//     console.log(model.nome + model.cognome);
		
// 	}

// };


/////////////////////////////////
/////////////////////////////////
//// SNACK pattern promise //////
/////////////////////////////////
/////////////////////////////////

/**
 * Gestione risultato di un invio email gestite da una promise con .done e .fail
 */
function patProm(){
  getMessaggio(function(msg) { console.log(msg.contenuto); })
  
  var promise = getMessaggio();
  promise.done(sendMessaggio).done(function() {
    console.log("Messaggio inoltrato");
  });
  promise.fail(function(err) {
    console.log("Si è verificato un errore: " + err.message);
  });
}