/////////////////////////////Responsive//////////////////////////////
/////////////////////////////Responsive//////////////////////////////
/////////////////////////////Responsive//////////////////////////////


//menu taille telephone tablette
var menuElt = document.querySelector(".menu-toggle");
var navElt = document.querySelector("nav");
console.log(menuElt);
menuElt.addEventListener('click', (e) => {
  console.log("jai cliquer sur le menu");
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
tabImgs.push("images/img1.jpg");
tabImgs.push("images/img2.jpg");
tabImgs.push("images/img3.jpg");

// tableau texte
var tabTexts = [];
tabTexts.push("Faites glisser le plan sur votre zone de recherche");
tabTexts.push("Selectionnez le marqueur correspondant\n à la station de votre choix");
tabTexts.push("Vérifiez le nombre de vélos disponibles puis cliquez sur \"Réserver \"");

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
  //  console.log("kikou");

  myDiapo.temps = setInterval(function () {
    myDiapo.next();
  }, 5000);

  btnPlay.style.display = "none";
  btnStop.style.display = "block";

});

///////////////////// stop the autoplay

var btnStop = document.getElementById("btnstop");
btnStop.addEventListener("click", function () {
  console.log("arret");
  clearInterval(myDiapo.temps);
  btnStop.style.display = "none";
  btnPlay.style.display = "block";

});


// ajout d'un evenement clavier sur toute la page
document.addEventListener("keyup", infosClavier);

// Affiche des informations sur un événement clavier
function infosClavier(e) {
  // console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
  if (e.keyCode === 39) {
    // console.log("teste");
    myDiapo.next();

  } else if (e.keyCode === 37) {
    // console.log("marche");
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
var tpsRestant = 60000;
var timerElt = new Timer(tpsRestant);

var reserveStation = document.getElementById("minuteurhtml");
//var departMinuteur = document.getElementById('minuteurStart');




///////////////////////////// Canvas //////////////////////////////
///////////////////////////// Canvas //////////////////////////////
///////////////////////////// Canvas //////////////////////////////

var canvasElt = document.getElementById("canvas");
signatureElt = new Signature("canvas");
var containerCanvasElt = document.querySelector(".container-canvas-btn ");


///////////////////////////// evenement souris //////////////////////////////
///////////////////////////// evenement souris //////////////////////////////

canvasElt.addEventListener('mousedown', (e) => {
  signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
  signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
  signatureElt.saDessine = true;

  // console.log("mousedown ici c'est X " + signatureElt.x + " ici c'est Y " + signatureElt.y + " ici c'est rect.left " + rect.left + " ici c'est rect.top " + rect.top);
});


canvasElt.addEventListener('mousemove', (e) => {
  if (signatureElt.saDessine === true) {

    signatureElt.dessiner(signatureElt.context, signatureElt.x, signatureElt.y, e.clientX - canvasElt.getBoundingClientRect().left, e.clientY - canvasElt.getBoundingClientRect().top);
    signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
    signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
    signatureElt.dessinPresent = true;
    //  console.log("mousemove ici c'est X " + this.x + " ici c'est Y " + this.y);
  }
});


// ici ke met l'évenemet sur toute la fenetres sinon le relachement de la souris en étant exterieur de l'element canvas ne sera pas pris en compte
window.addEventListener('mouseup', (e) => {
  signatureElt.saDessine = false;
  //  console.log("mousemove ici c'est X " + this.x + " ici c'est Y " + this.y);

});

///////////////////////////// evenement tactile //////////////////////////////
///////////////////////////// evenement tactile //////////////////////////////



canvasElt.addEventListener('touchstart', (e) => {
  signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
  signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
  signatureElt.saDessine = true;

  console.log("yess du tactile");
  
});


canvasElt.addEventListener('touchmove', (e) => {
  if (signatureElt.saDessine === true) {

    signatureElt.dessiner(signatureElt.context, signatureElt.x, signatureElt.y, e.clientX - canvasElt.getBoundingClientRect().left, e.clientY - canvasElt.getBoundingClientRect().top);
    signatureElt.x = e.clientX - canvasElt.getBoundingClientRect().left;
    signatureElt.y = e.clientY - canvasElt.getBoundingClientRect().top;
    signatureElt.dessinPresent = true;
   console.log("sa bouge");
   
  }
});

window.addEventListener('touchend', (e) => {
  signatureElt.saDessine = false;
 console.log("finish");
 

});







// si il y a un nom et un prenom en localStorage alors les metttres dans le formulaire en var leur par default.


/////////////////////////////  Formulaire //////////////////////////////
/////////////////////////////  Formulaire //////////////////////////////
/////////////////////////////  Formulaire //////////////////////////////

var btnreservation = document.getElementById('btn-reserver');

btnreservation.addEventListener('click', (e) => {

   // pour empecher le bouton de type submite de rafraichir la page
  e.preventDefault();

  var nomElt = document.getElementById('nom').value;
  var preNomElt = document.getElementById('prenom').value;
  //  console.log(nomElt);
  //  console.log(preNomElt);
  //  console.log(sessionStorage);

  if ((nomElt.length > 3) && (preNomElt.length > 3)) {
    //  console.log("Veuillez saisir un nom et prenom valide.");
    containerCanvasElt.style.display = "block";

     //console.log("le nom est " + nomElt);
    //console.log("le prenom est " + preNomElt);

    // sauvegarde du nom et prenon dals le localStorage
    localStorage.setItem("nomUser", nomElt);
    localStorage.setItem("prenomUser", preNomElt);

  } else {

    

    var aidePseudoElt = document.getElementById("aidePseudo");
    aidePseudoElt.textContent = "Veuillez saisir un nom et prenom valide.";
    aidePseudoElt.style.display = "inline-block";
  }

 


});

///////////////////////////// Envoyer //////////////////////////////
///////////////////////////// Envoyer //////////////////////////////
///////////////////////////// Envoyer //////////////////////////////

var confirmationReservation = document.getElementById('envoieReservation');


confirmationReservation.addEventListener('click', (e) => {

  if(timerElt.minuteurLancer === false){
    console.log("le minuteur n'est pas encore actif");


    if (signatureElt.dessinPresent === true) {

      var stationReserver = sessionStorage.getItem('stationClick');
  
      reserveStation.textContent = "Une reservation est en cours à la station : " + stationReserver;
  
      timerElt.interval = setInterval(function () {
  
        timerElt.minuteur();
  
      }, 1000);
      console.log('ma reservation est confirmer');
    } else {
      console.log("nonon");
    }



  }
  else{
    console.log("le minuteur est déja lancer   ");
    
  }
  






});

///////////////////////////// Annuler //////////////////////////////
///////////////////////////// Annuler //////////////////////////////
///////////////////////////// Annuler //////////////////////////////
var annulation = document.getElementById('annulationReservation');


annulation.addEventListener('click', (e) => {


  console.log('ma reservation est annuler');

  signatureElt.effacer(0, 0, 300, 300);
});


///////////////////////////// Actulisation de la page //////////////////////////////
///////////////////////////// Actulisation de la page //////////////////////////////
///////////////////////////// Actulisation de la page //////////////////////////////
window.addEventListener('load', (event) => {
  console.log('La page est pleinement charger');

  var nomStocker = localStorage.getItem("nomUser");
  var preNomStocker = localStorage.getItem("prenomUser");

  var minElt = sessionStorage.getItem('min');
  var secElt = sessionStorage.getItem('sec');

  if ((minElt != null) && (secElt != null)) {

    timerElt.actualisationTempsRestant(((minElt * 60) + secElt) * 1000);
    timerElt.minuteur();
  } 
  else {
    console.log("pas de reservation en cours");

  }


  //console.log(nomStocker);


  if ((nomStocker != null) && (preNomStocker != null)) {
    console.log("Il y a un prenom et un nom stocker");
    document.getElementById('nom').value = nomStocker;
    document.getElementById('prenom').value = preNomStocker;
  } else {
    console.log("Il y a aucun nom ou prenom stocker.");
  }



});