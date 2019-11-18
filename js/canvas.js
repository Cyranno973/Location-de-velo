class Signature {
  constructor(idCanvas) {
    this.idCanvas = idCanvas;
    this.saDessine = false;
    this.dessinPresent = false;
    this.x = 0;
    this.y = 0;


    const canvasElt = document.getElementById(this.idCanvas);
    this.context = canvasElt.getContext('2d');
    this.w = canvas.width;
    this.h = canvas.height;
    // ici je determine la taille ,les bords de mon élément canvas
    var rect = canvasElt.getBoundingClientRect();
    console.log(rect);

  }
   dessiner(context, x1, y1, x2, y2) {
    // begin path pour débuter un dessin
    context.beginPath();
    // ici c'est la couleur
    context.strokeStyle = 'black';
    // la largeur du trait
    context.lineWidth = 2;
    //ou debuter le dessin x1 = abscisse y1 = oordonnée
    context.moveTo(x1, y1);

    // point d'arriver ou ce termine le dessin x1 = abscisse y1 = oordonnée
    context.lineTo(x2, y2);

    //pour rendre la ligne visible.
    context.stroke();

    context.closePath();
  }
  effacer() {

    var m = confirm("voulez vous vraiment annuler");
    if (m) {
      this.context.clearRect(0, 0, this.w, this.h);
      document.getElementById("canvas").style.display = "none";
      document.getElementById("envoieReservation").style.display = "none";
      document.getElementById("annulationReservation").style.display = "none";
      this.dessinPresent =false;


    } else {
      console.log("eer");
    }
   
  }


}









/*

let saDessine = false;
let x = 0;
let y = 0;

const canvasElt = document.getElementById('canvas');
const context = canvasElt.getContext('2d');

// ici je determine la taille ,les bords de mon élément canvas
const rect = canvasElt.getBoundingClientRect();
//console.log(rect);

canvasElt.addEventListener('mousedown', (e) => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  saDessine = true;
  console.log("mousedown ici c'est X " + x + " ici c'est Y " + y);
});


canvasElt.addEventListener('mousemove', (e) => {
  if (saDessine === true) {
    dessiner(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    console.log("mousemove ici c'est X " + x + " ici c'est Y " + y);
  }
});


// ici ke met l'évenemet sur toute la fenetres sinon le relachement de la souris en étant exterieur de l'element canvas ne sera pas pris en compte
window.addEventListener('mouseup', (e) => {
  if (saDessine === true) {
    dessiner(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    saDessine = false;
    console.log("mouseup ici c'est X " + x + " ici c'est Y " + y);
  }

});
// ma fonction permettant le dessin
function dessiner(context, x1, y1, x2, y2) {
  // begin path pour débuter un dessin
  context.beginPath();
  // ici c'est la couleur
  context.strokeStyle = 'black';
  // la largeur du trait
  context.lineWidth = 2;
  //ou debuter le dessin x1 = abscisse y1 = oordonnée
  context.moveTo(x1, y1);

  // point d'arriver ou ce termine le dessin x1 = abscisse y1 = oordonnée
  context.lineTo(x2, y2);

  //pour rendre la ligne visible.
  context.stroke();

  context.closePath();
}

*/