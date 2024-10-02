
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {

	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('colour').onchange = function(event) {
		this.currColour = event.target.value;
	}.bind(this);
	
	document.getElementById('butRect').onclick = function() {
		this.currEditingMode = editingMode.rect;
	}.bind(this);

	document.getElementById('butLine').onclick = function() {
		this.currEditingMode = editingMode.line;
	}.bind(this);
	
	document.getElementById('spinnerWidth').onchange = function(event) {
		this.currLineWidth = event.target.value;
	}.bind(this);


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect:{
				this.currentShape = new Rectangle(dnd.initX, dnd.initY,
					dnd.finalX - dnd.initX, dnd.finalY - dnd.finalY, this.currLineWidth, this.currColour);
				break;
			}
			case editingMode.line:{
				this.currentShape = new Line(dnd.initX, dnd.initY,
					dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
				break;
			}
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect:{
				this.currentShape = new Rectangle(dnd.initX, dnd.initY,
					dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour);
				break;
			}
			case editingMode.line:{
				this.currentShape = new Line(dnd.initX, dnd.initY, 
					dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour);
				break;
			}
		}

		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		drawing.shapes.push(this.currentShape);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
		
		updateShapeList(this.currentShape);
	}.bind(this);
};


