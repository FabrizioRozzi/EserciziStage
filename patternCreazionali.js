/////////////////////////////////
/////////////////////////////////
//////// SNACK singleton ////////
/////////////////////////////////
/////////////////////////////////

function singletonNew(){
  var singleton = (function(){
    var instance;
    return {
      getInstance: function() {
        if (!instance) {
          instance = { proprieta: "abc"
        }
        return instance;
        } 
      }
    }
  })
  
  var mySingleton = singleton.getInstance();
  console.log(mySingleton.proprieta);	 //"abc"
}


/////////////////////////////////
/////////////////////////////////
//////// SNACK factory //////////
/////////////////////////////////
/////////////////////////////////

/**
 * a seconda del tipo crea oggetto
 */
function factoryPt(){
  var veicoloFactory = {
    creaVeicolo: function(opzioni) {
      var veicolo;
      if (opzioni && opzioni.length) {
        switch (opzioni.tipo) {
          case "auto":
            veicolo = new Automobile(opzioni);
            break;
          case "moto":
            veicolo = new Moto(opzioni);
            break;
          case "camion":
            veicolo = new Camion(opzioni);
            break;
        }
      }
    }
  };
  
  var myAutomobile = veicoloFactory.creaVeicolo({tipo: "auto", colore: "rosso", modello: "berlina"});
  var myAutobus = veicoloFactory.creaVeicolo({tipo: "bus", colore: "giallo"});
  console.log(myAutomobile);
  console.log(myAutobus);
}