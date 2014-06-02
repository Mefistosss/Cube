
var init = function (canvas) {
	var cube;
	if (!canvas.getContext) {
		throw "Do not support the canvas!"
		return;
	}
	gcanvas = canvas;
	gcontext = canvas.getContext('2d');

	gcanvas.width = gwidth = gcanvas.parentNode.offsetWidth;
	gcanvas.height= gheight = gcanvas.parentNode.offsetHeight;


	cube = new Cube(350, 350, 100);


    // temp -----------------------------------
    	var button = document.createElement('BUTTON');
    	button.className += (button.className ? ' ' : '') + 'button';

    	gcanvas.parentNode.appendChild(button);
    	button.onclick = function () {
    		cube.rotateOX(0.05);
    		cube.centering(gwidth, gheight);
    	}
    // temp -----------------------------------


	var render = function() {
		cube.render();
	};

	(function animLoop() {
		requestAnimFrame(animLoop);
		gcontext.clearRect(0, 0, gcontext.canvas.width, gcontext.canvas.height);
		render();
	})();
};