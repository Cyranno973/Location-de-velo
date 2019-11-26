class Main {
  constructor() {


    /////////////////////////////Responsive//////////////////////////////
    /////////////////////////////Responsive//////////////////////////////
    /////////////////////////////Responsive//////////////////////////////


    //menu taille telephone tablette
    var menuElt = document.querySelector(".menu-toggle");
    var navElt = document.querySelector("nav");
    menuElt.addEventListener('click', (e) => {
      if (navElt.classList.contains("active") == true) {
        navElt.classList.remove("active");
      } else {
        navElt.classList.add("active");
      }
    });
    //////////////////////////////Carousel//////////////////////////////
    //////////////////////////////Carousel//////////////////////////////
    //////////////////////////////Carousel//////////////////////////////
    // tableau images
    var tabImgs = [];
    tabImgs.push("images/1.png");
    tabImgs.push("images/2.png");
    tabImgs.push("images/3.png");
    // tableau texte
    var tabTexts = [];
    tabTexts.push("Faites glisser le plan sur votre zone de recherche\n puis sélectionnez le marqueur correspondant\n à la station de votre choix ");
    tabTexts.push("Insérez votre nom et prénom dans le formulaire et cliquez sur Réservez");
    tabTexts.push("Signer et cliquer sur  envoyer votre vélo est réserver pour 20 min");
    // utilisation de la class ou instanciation de la class Diaporama
    var myDiapo = new Diaporama(tabImgs, tabTexts, "img-carousel", "text-carousel");
    // lancement en auto du diapo automatic
    myDiapo.temps = setInterval(function () {
      myDiapo.next();
    }, 5000);




    // selection du bouton next  dans le dom
    var btnNext = document.getElementById("btnnext");

    //ajoute d'un evenement sur le bouton next
    btnNext.addEventListener("click", function () {

      //  lancement de la methode next
      myDiapo.next();
    });

    // selection du bouton pev dans le dom
    var btnPrev = document.getElementById("btnprev");

    //ajout d'un evenement sur le bouton prev
    btnPrev.addEventListener("click", function () {

      //  lancement de la methode previous
      myDiapo.previous();
    });
    // selection du bouton play  dans le dom
    var btnPlay = document.getElementById("btnplay");

    //ajout d'un evenement sur le bouton play
    btnPlay.addEventListener("click", function () {

      myDiapo.temps = setInterval(function () {
        myDiapo.next();
      }, 5000);

      btnPlay.style.display = "none";
      btnStop.style.display = "block";

    });

    ///////////////////// stop the autoplay

    var btnStop = document.getElementById("btnstop");
    btnStop.addEventListener("click", function () {
   
      clearInterval(myDiapo.temps);
      btnStop.style.display = "none";
      btnPlay.style.display = "block";

    });


    // ajout d'un evenement clavier sur toute la page
    document.addEventListener("keyup", infosClavier);

    // Affiche des informations sur un événement clavier
    function infosClavier(e) {
      if (e.keyCode === 39) {
        myDiapo.next();
      } else if (e.keyCode === 37) {
        myDiapo.previous();
      }

    };
    //////////////////////////// fin carousel //////////////////////////

    ////////////////////////////// Map //////////////////////////////
    ////////////////////////////// Map //////////////////////////////
    ////////////////////////////// Map //////////////////////////////

    var mapElt = new Map("maps", [43.30000, 5.385000], 14, "myMap");
    mapElt.recuperMarker("https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=0e4c54d917fae8413e3fb4345d92d596c0894cfc");

    ////////////////////////////// Minuteur //////////////////////////////
    ////////////////////////////// Minuteur //////////////////////////////
    ////////////////////////////// Minuteur //////////////////////////////
    var tpsRestant = 120000;
    var timerElt = new Timer(tpsRestant);
    var reserveStation = document.getElementById("minuteurhtml");

    ///////////////////////////// Canvas //////////////////////////////
    ///////////////////////////// Canvas //////////////////////////////
    ///////////////////////////// Canvas //////////////////////////////

    var canvasElt = document.getElementById("canvas");
    var signatureElt = new Signature("canvas");
    var containerCanvasElt = document.querySelector(".container-canvas-btn ");



    ///////////////////////////// evenement souris canvas //////////////////////////////
    ///////////////////////////// evenement souris canvas //////////////////////////////

    canvasElt.addEventListener('mousedown', (e) => {
      signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
      signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
      signatureElt.saDessine = true;
    });


    canvasElt.addEventListener('mousemove', (e) => {
      if (signatureElt.saDessine === true) {
        signatureElt.dessiner(signatureElt.context, signatureElt.x, signatureElt.y, e.clientX - canvasElt.getBoundingClientRect().left, e.clientY - canvasElt.getBoundingClientRect().top);
        signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
        signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
        signatureElt.dessinPresent = true;
      }
    });


    // ici ke met l'évenemet sur toute la fenetres sinon le relachement de la souris en étant exterieur de l'element canvas ne sera pas pris en compte
    window.addEventListener('mouseup', (e) => {
      signatureElt.saDessine = false;
    });

    ///////////////////////////// evenement tactile //////////////////////////////
    ///////////////////////////// evenement tactile //////////////////////////////



    canvasElt.addEventListener('touchstart', (e) => {

      signatureElt.x = e.touches[0].clientX - canvasElt.getBoundingClientRect().left;
      signatureElt.y = e.touches[0].clientY - canvasElt.getBoundingClientRect().top;
      signatureElt.saDessine = true;
    });


    canvasElt.addEventListener('touchmove', (e) => {
      if (signatureElt.saDessine === true) {
        signatureElt.dessiner(signatureElt.context, signatureElt.x, signatureElt.y, e.touches[0].clientX - canvasElt.getBoundingClientRect().left, e.touches[0].clientY - canvasElt.getBoundingClientRect().top);
        signatureElt.x = e.touches[0].clientX - canvasElt.getBoundingClientRect().left;
        signatureElt.y = e.touches[0].clientY - canvasElt.getBoundingClientRect().top;
        signatureElt.dessinPresent = true;
      }
    });

    window.addEventListener('touchend', (e) => {
      signatureElt.saDessine = false;
    });

    /////////////////////////////  Formulaire //////////////////////////////
    /////////////////////////////  Formulaire //////////////////////////////
    /////////////////////////////  Formulaire //////////////////////////////

    var btnreservation = document.getElementById('btn-reserver');
    btnreservation.addEventListener('click', (e) => {
      // pour empecher le bouton de type submite de rafraichir la page
      e.preventDefault();
      var nomElt = document.getElementById('nom').value;
      var preNomElt = document.getElementById('prenom').value;
 
      if ((nomElt.length > 3) && (preNomElt.length > 3)) {
      
        containerCanvasElt.style.display = "block";
        document.getElementById("canvas").style.display = "block";
        document.getElementById("envoieReservation").style.display = "block";
        document.getElementById("annulationReservation").style.display = "block";
        document.querySelector(".container-formulaire-canvas").style.display = "block";
        document.querySelector(".login-form").style.display = "none";;
        // sauvegarde du nom et prenon dals le localStorage
        localStorage.setItem("nomUser", nomElt);
        localStorage.setItem("prenomUser", preNomElt);

      } else {



        // var aidePseudoElt = document.getElementById("aidePseudo");
        // aidePseudoElt.textContent = "Veuillez saisir un nom et prenom valide.";
        // aidePseudoElt.style.display = "inline-block";
      }




    });

    ///////////////////////////// Envoyer //////////////////////////////
    ///////////////////////////// Envoyer //////////////////////////////
    ///////////////////////////// Envoyer //////////////////////////////

    var confirmationReservation = document.getElementById('envoieReservation');


    confirmationReservation.addEventListener('click', (e) => {

      if (signatureElt.dessinPresent === true) {
        console.log("le minuteur n'est pas actif");

        containerCanvasElt.style.display = "none";
        // document.getElementById("canvas").style.display = "block";
        document.getElementById("envoieReservation").style.display = "none";
        document.getElementById("annulationReservation").style.display = "none";
        signatureElt.effacer(0, 0, this.w, this.h);
        var stationReserver = sessionStorage.getItem('stationClick');

        reserveStation.textContent = "Une reservation au nom de : " + localStorage.getItem("nomUser") + " " + localStorage.getItem("prenomUser") + " est en cours à la station : " + stationReserver;

        timerElt.actualisationTempsRestant(tpsRestant);
        clearInterval(timerElt.interval);
        timerElt.interval = setInterval(function () {

          timerElt.minuteur();

        }, 1000);
        console.log('ma reservation est confirmer');



      } else {
        alert("Veuillez signer !");
      }

    });

    ///////////////////////////// Annuler //////////////////////////////
    ///////////////////////////// Annuler //////////////////////////////
    ///////////////////////////// Annuler //////////////////////////////
    var annulation = document.getElementById('annulationReservation');


    annulation.addEventListener('click', (e) => {


      console.log('ma reservation est annuler');

      signatureElt.annuler(0, 0, this.w, this.h);
    });


    ///////////////////////////// Actulisation de la page //////////////////////////////
    ///////////////////////////// Actulisation de la page //////////////////////////////
    ///////////////////////////// Actulisation de la page //////////////////////////////
    window.addEventListener('load', (event) => {
      // console.log('La page est pleinement charger');
      var nomStocker = localStorage.getItem("nomUser");
      var preNomStocker = localStorage.getItem("prenomUser");
      var minElt = Number(sessionStorage.getItem('min'));
      var secElt = Number(sessionStorage.getItem('sec'));
      console.log("min :" + minElt + " sec: " + secElt);

      if ((minElt != null) && (secElt != null)) {
        var stationReserver = sessionStorage.getItem('stationClick');
        reserveStation.textContent = "Une reservation au nom de : " + localStorage.getItem("nomUser") + " " + localStorage.getItem("prenomUser") + " est en cours à la station : " + stationReserver;
        timerElt.actualisationTempsRestant(((minElt * 60) + secElt) * 1000);
        timerElt.interval = setInterval(function () {
          timerElt.minuteur();
        }, 1000);
      } else {
        //  console.log("pas de reservation en cours");
      }
      //console.log(nomStocker);
      if ((nomStocker != null) && (preNomStocker != null)) {
        //    console.log("Il y a un prenom et un nom stocker");
        document.getElementById('nom').value = nomStocker;
        document.getElementById('prenom').value = preNomStocker;
      } else {
        // console.log("Il y a aucun nom ou prenom stocker.");
      }
    });
  }
}
let mainJsElt = new Main();