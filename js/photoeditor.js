module.exports = {
	var image = null;
	/* var imgcanvas= document.getElementById("c"); */

	var $ = function(id){return document.getElementById(id)};


	// var canvas = this.__canvas = new fabric.Canvas('c');
	//   	canvas.setHeight(330);
	// 		canvas.setWidth(500);
		
	upload: function() {
		var file = document.getElementById("finput");
		image = new SimpleImage(file);
		console.log(image);
		// image.drawTo(canvas);
	}


	// removeText: function() {
	// 	canvas.remove(text);
	// }

};