
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

function Line(x1, x2, y1, y2){
    Shape.call(this);
    this.x_start = x1;
    this.y_start = y1;
    this.x_final = x2;
    this.y_final = y2;
}

Line.prototype = new Shape();
  
  
  