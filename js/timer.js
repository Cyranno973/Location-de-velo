class Timer {
  constructor(tempsRestant) {
    this.tempsRestant = tempsRestant;
    this.minuteurLancer = false;
    this.minuteurExpiration = false;
  }
  actualisationTempsRestant(tempsRestant) {
    this.tempsRestant = tempsRestant;
  }

  minuteur() {
    if (this.tempsRestant > 0) {
      var uneSeconde = 1000;
      this.tempsRestant -= uneSeconde;
      // donne une date avec les 20min rajouter
      var date = new Date(this.tempsRestant);
      // on prend la valeur des minutes
      var min = date.getMinutes();
      // on prend la valeur des secondes
      var sec = date.getSeconds();
      // en affiche les minutes et les secondes
      sessionStorage.setItem("min", min);
      sessionStorage.setItem("sec", sec);
      document.getElementById('minuteurStart').textContent = "La réservation expire dans  " + min + "min " + sec + "sec";
      this.minuteurLancer = true;
      this.minuteurExpiration = true;
    } else {
      clearInterval(this.interval);
      document.getElementById('minuteurhtml').textContent = "Aucune réservation en cours. ";
      document.getElementById('minuteurStart').textContent = "La réservation a expiré ";
      sessionStorage.removeItem("date");
      sessionStorage.removeItem("min");
      sessionStorage.removeItem("sec");
      sessionStorage.removeItem("stationClick");
      this.minuteurLancer = false;
    
      
    }
  }
}