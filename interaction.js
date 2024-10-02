
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.initX = undefined;
  this.initY = undefined;
  this.finalX = undefined;
  this.finalY = undefined;
  this.isPressed = false;
  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements

  this.mouseDown = function(evt) {
    var position = getMousePosition(canvas, evt)
    this.initX = position.x
    this.initY = position.y
    this.isPressed = true
    this.interactor.onInteractionStart(this);
  }.bind(this)

  this.mouseMove = function(evt) {
    var position = getMousePosition(canvas, evt)
    this.finalX = position.x
    this.finalY = position.y
    this.interactor.onInteractionUpdate(this);
  }.bind(this)

  this.mouseUp = function(evt) {
    if (this.isPressed) {
      var position = getMousePosition(canvas, evt)
      this.finalX = position.x
      this.finalY = position.y
      this.isPressed = false
      this.initX = undefined;
      this.initY = undefined;
    }
    this.interactor.onInteractionEnd(this);
  }.bind(this)

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



