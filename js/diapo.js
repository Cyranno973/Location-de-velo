// diaporama
class Diaporama {
  constructor(tableauImage, tableauText, idImage, idText) {
    this.tableauImage = tableauImage;
    this.tableauText = tableauText;
    this.idImage = idImage;
    this.idText = idText;
    this.currentPosition = 0;
    this.temps = 0;
    this.lastImg = this.tableauImage.length - 1;
    // affiche l'image qui sa source dans le tableau et dans l'indice est
    document.getElementById(this.idImage).src = this.tableauImage[this.currentPosition];
    // affiche le text
    document.getElementById(this.idText).textContent = this.tableauText[this.currentPosition];
  }
  // propriété next
  next() {
    // console.log("next");
    this.currentPosition++;
    if (this.currentPosition > this.lastImg) {
      this.currentPosition = 0;
    }
    document.getElementById("img-carousel").src = this.tableauImage[this.currentPosition];
    document.getElementById("text-carousel").textContent = this.tableauText[this.currentPosition];
  }
  // propriété previous
  previous() {
    this.currentPosition--;
    //  console.log("previous");
    if (this.currentPosition < 0) {
      this.currentPosition = this.lastImg;
    }
    document.getElementById("img-carousel").src = this.tableauImage[this.currentPosition];
    document.getElementById("text-carousel").textContent = this.tableauText[this.currentPosition];
  }
}