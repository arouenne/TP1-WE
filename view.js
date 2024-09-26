
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {

    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width,  this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {

    ctx.beginPath();
    ctx.moveTo(this.x_start, this.y_start);
    ctx.lineTo(this.x_final,this.y_final);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };

  Shape.prototype.paint = function (ctx) {
    this.color = ctx.getColor();
    this.thickness = ctx.getThickness();
  }
  