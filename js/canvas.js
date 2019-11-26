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
    // console.log(rect);

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
  annuler() {
    var m = confirm("Voulez vous vraiment annuler votre réservation?");
    if (m) {
      this.context.clearRect(0, 0, this.w, this.h);
      document.getElementById("canvas").style.display = "none";
      document.getElementById("envoieReservation").style.display = "none";
      document.getElementById("annulationReservation").style.display = "none";
      this.dessinPresent = false;
    } else {
      console.log("pas d'annulation");
    }
  }
  effacer() {
    this.context.clearRect(0, 0, this.w, this.h);
    this.dessinPresent = true;
    console.log("effacement de la signature ");
  }

}