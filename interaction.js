
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.position_x1 = 0;
  this.position_x2 = 0;
  this.position_y1 = 0;
  this.position_y2 = 0;
  this.isPressed = false;

	// Developper les 3 fonctions gérant les événements

  this.mouseDown = function(evt) {
    var position = getMousePosition(canvas, evt)
    this.x = position.x
    this.y = position.y
    this.isPressed = true
    console.log("Pressed on : X "+ this.x +", Y "+ this.y)
  }.bind(DnD)

  this.mouseMove = function(evt) {
    var position = getMousePosition(canvas, evt)
    this.x = position.x
    this.y = position.y
    console.log("Moving on : X "+ this.x +", Y "+ this.y)
  }.bind(DnD)

  this.mouseUp = function(evt) {
    if(this.pressed) {
      var position = getMousePosition(canvas, evt)
      this.x = position.x
      this.y = position.y
      this.isPressed = false
    }
    console.log("Released X "+ this.x +", Y "+ this.y)
  }.bind(DnD)

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



