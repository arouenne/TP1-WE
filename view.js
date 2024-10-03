
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

  Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width,  this.height);
    ctx.stroke();
  };

  Rectangle.prototype.printShape = function() {
    return `Rectangle - ${this.color} ${this.thickness} (${this.x}, ${this.y}, ${this.width}, ${this.height})`;
  }
  
  Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.x_start, this.y_start);
    ctx.lineTo(this.x_final,this.y_final);
    ctx.stroke();
  };

  Line.prototype.printShape = function() {
    return `Line - ${this.color} ${this.thickness} (${this.x_start}, ${this.y_start}, ${this.x_final}, ${this.y_final})`;
  }
  
  Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };

  function updateShapeList(shape, controller) {
    var shapeList = document.getElementById('shapeList');
    var entry = document.createElement('li');

    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = 'btn btn-default';

    var icon = document.createElement('span');
    icon.className = 'glyphicon glyphicon-remove-sign';
    button.appendChild(icon);

    button.onclick = function() {
        controller.deleteShape(shape);
        shapeList.removeChild(entry);
    };

    entry.appendChild(button);

    var shapeText = document.createTextNode(" "+shape.printShape());
    entry.appendChild(shapeText);
    shapeList.appendChild(entry);
}

  