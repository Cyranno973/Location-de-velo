// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
/*
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function() {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);

}

*/






class AjaxGet {
  constructor(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        // Appelle la fonction callback en lui passant la réponse de la requête
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function() {
      console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
  }
}









/*





var tempsRestant = 10000;

function minuteur(temps) {

  tempsRestant = temps - 1000;

  console.log(tempsRestant);
  var date = new Date(tempsRestant);

  // on prend la valeur des minutes
  var min = date.getMinutes();

  // on prend la valeur des secondes
  var sec = date.getSeconds();

  // en affiche les minutes et les secondes
  console.log(min + "min " + sec + "s");


  var x = setTimeout("minuteur(tempsRestant)", 1000);

  if (tempsRestant <= 0) {
    clearInterval(x);
  }
};

//initialisation de ma fonction
minuteur(tempsRestant);





*/