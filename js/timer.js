class Timer {
  constructor(tempsRestant) {

    this.tempsRestant = tempsRestant;
this.minuteurLancer = false;
  }


  actualisationTempsRestant(tempsRestant){
    this.tempsRestant= tempsRestant;
  }



  minuteur() {
    if (this.tempsRestant > 0) {

      var uneSeconde = 1000;
      this.tempsRestant -= uneSeconde; // la meme chose que tempsRestant= tempsRestant - uneSeconde;

      //  console.log(this.tempsRestant);

      // donne une date avec les 20min rajouter
      var date = new Date(this.tempsRestant);
      //    sessionStorage.setItem('date', date);
      //  console.log(this.tempsRestant);
      // on prend la valeur des minutes
      var min = date.getMinutes();

      // on prend la valeur des secondes
      var sec = date.getSeconds();

      // en affiche les minutes et les secondes
      //  console.log(min + "min " + sec + "s");

      sessionStorage.setItem("min", min);
      sessionStorage.setItem("sec", sec);

      document.getElementById('minuteurStart').textContent = "La réservation expire dans  " + min + "min " + sec + "sec";
      this.minuteurLancer = true;
    } else {


      clearInterval(this.interval);
      document.getElementById('minuteurStart').textContent = "La réservation a expiré ";
      sessionStorage.removeItem("date");
      sessionStorage.removeItem("min");
      sessionStorage.removeItem("sec");
      sessionStorage.removeItem("stationClick");
      localStorage.removeItem("nomUser");
      localStorage.removeItem("prenomUser");
      this.minuteurLancer = false;

    }

  }

}



/*


var tempsRestant = 1200000;

function minuteur() {
  if (tempsRestant > 0) {


    var uneSeconde = 1000;
    tempsRestant -= uneSeconde; // la meme chose que tempsRestant= tempsRestant - uneSeconde;

    //  console.log(tempsRestant);

    // donne une date avec les 20min rajouter
    var date = new Date(tempsRestant);

    // on prend la valeur des minutes
    var min = date.getMinutes();

    // on prend la valeur des secondes
    var sec = date.getSeconds();

    // en affiche les minutes et les secondes
    //  console.log(min + "min " + sec + "s");

    // relance la fonction toute les 1 sec
    var x = setTimeout("minuteur()", 1000);



    minuteurStart.textContent = "1 Vélo réservé à la pour " + min + " min " + sec + " s";
    minuteurStart.style.display = "block";
    reserveStation.appendChild(minuteurStart);

    sessionStorage.setItem("min", min);
    sessionStorage.setItem("sec", sec);

  } else {
    clearInterval(x);
  }

};

//initialisation de ma fonction
minuteur();
*/