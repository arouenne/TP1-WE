
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];

    this.getForms = function() {
        return this.shapes;
    }
}

function Shape(thickness, color){
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, height, thickness, color){
    Shape.call(this, thickness, color);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}

Rectangle.prototype = new Shape();

function Line(initX, initY, finalX, finalY, thickness, color){
    Shape.call(this, thickness, color);
    this.x_start = initX;
    this.y_start = initY;
    this.x_final = finalX;
    this.y_final = finalY;
}

Line.prototype = new Shape();
  
  
  