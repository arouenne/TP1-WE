
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.drawing = new Array();
};

function Shape() {
    this.color = null;
    this.thickness = null;
}

function Rectangle(){
    Shape.call(this)
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
};

function Line(){
    Shape.call(this)
    this.x_start = 0;
    this.y_start = 0;
    this.x_final = 0;
    this.y_final = 0;
}
  
  
  