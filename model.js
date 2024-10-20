
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];
    this.undoStack = [];
    this.redoStack = [];

    this.getForms = function () {
        return this.shapes;
    }.bind(this);

    this.addForms = function (shape) {
        this.shapes.push(shape);
        this.undoStack.push(shape);
        this.redoStack = [];
    }.bind(this);

    this.undo = function () {
        if (this.undoStack.length > 0) {
            var shape = this.undoStack.pop();
            this.redoStack.push(shape);
            this.shapes.pop();
        }
    }.bind(this);

    this.redo = function () {
        if (this.redoStack.length > 0) {
            var shape = this.redoStack.pop();
            this.shapes.push(shape);
            this.undoStack.push(shape);
        }
    }.bind(this);
}


function Shape(thickness, color, lineStyle) {
    this.color = color;
    this.thickness = thickness;
    this.lineStyle = lineStyle;
}

function Rectangle(x, y, width, height, thickness, color, lineStyle) {
    Shape.call(this, thickness, color, lineStyle);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}
Rectangle.prototype = new Shape();

function Line(initX, initY, finalX, finalY, thickness, color, lineStyle) {
    Shape.call(this, thickness, color, lineStyle);
    this.x_start = initX;
    this.y_start = initY;
    this.x_final = finalX;
    this.y_final = finalY;
}
Line.prototype = new Shape();

function Ellipse(x, y, radiusX, radiusY, thickness, color) {
    Shape.call(this, thickness, color, lineStyle);
    this.x = x;
    this.y = y;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
}
Ellipse.prototype = new Shape();



