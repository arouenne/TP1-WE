
var editingMode = { rect: 0, line: 1, ellipse: 2 };

function Pencil(ctx, drawing, canvas) {

	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.currLineStyle = 'solid';

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('colour').onchange = function (event) {
		this.currColour = event.target.value;
	}.bind(this);

	document.getElementById('butRect').onclick = function () {
		this.currEditingMode = editingMode.rect;
	}.bind(this);

	document.getElementById('butLine').onclick = function () {
		this.currEditingMode = editingMode.line;
	}.bind(this);

	document.getElementById('butEllipse').onclick = function () {
		this.currEditingMode = editingMode.ellipse;
	}.bind(this);

	document.getElementById('spinnerWidth').onchange = function (event) {
		this.currLineWidth = event.target.value;
	}.bind(this);

	document.getElementById('lineStyle').onchange = function (event) {
		this.currLineStyle = event.target.value;
	}.bind(this);

	document.getElementById('undo').onclick = function () {
		drawing.undo();
		drawing.paint(ctx);
	}.bind(this);
	
	document.getElementById('redo').onclick = function () {
		drawing.redo();
		drawing.paint(ctx);
	}.bind(this);	


	new DnD(canvas, this);

	this.createShape = function (dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect: {
				return new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY,
					this.currLineWidth, this.currColour, this.currLineStyle);
			}
			case editingMode.line: {
				return new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY,
					this.currLineWidth, this.currColour, this.currLineStyle);
			}
			case editingMode.ellipse: {
				var radiusX = Math.abs(dnd.finalX - dnd.initX) / 2;
				var radiusY = Math.abs(dnd.finalY - dnd.initY) / 2;
				var centerX = Math.min(dnd.initX, dnd.finalX) + radiusX;
				var centerY = Math.min(dnd.initY, dnd.finalY) + radiusY;
				
				return new Ellipse(centerX, centerY, radiusX, radiusY, this.currLineWidth, this.currColour, this.currLineStyle);
			}
			default:
				return null;
		}
	}.bind(this);

	this.onInteractionStart = function (dnd) {
		this.currentShape = this.createShape(dnd);
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		this.currentShape = this.createShape(dnd);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.addForms(this.currentShape);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);

		updateShapeList(this.currentShape, this);
	}.bind(this);

	this.deleteShape = function (shape) {
		var shapeIndex = drawing.shapes.indexOf(shape);
		if (shapeIndex > -1) {
			drawing.shapes.splice(shapeIndex, 1);
			drawing.paint(ctx);
		}
	};
};


