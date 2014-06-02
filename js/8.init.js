
var init = function (canvas) {
	var cube, lastX, lastY,
		move = false;

	if (!canvas.getContext) {
		throw "Do not support the canvas!"
		return;
	}

	gcanvas = canvas;
	gcontext = canvas.getContext('2d');

	gcanvas.width = gwidth = gcanvas.parentNode.offsetWidth;
	gcanvas.height= gheight = gcanvas.parentNode.offsetHeight;


	cube = new Cube(gwidth / 2 - 50, gheight / 2 - 50, 100);


    gcanvas.onmousedown = function(e) {
    	move = true;
    	lastX = e.x;
    	lastY = e.y;
    };

    gcanvas.onmouseup = function() {
    	move = false;
    };

    gcanvas.onmousemove = function(e) {
    	if (move) {
    		cube.rotateOX((lastX - e.x) * 0.002);
    		cube.rotateOY((lastY - e.y) * 0.002);
    		cube.centering(gwidth, gheight);
    	}
    };

    gcanvas.onmousewheel = function(e) {
		cube.rotateOZ(e.wheelDelta * 0.002);
		cube.centering(gwidth, gheight);
    };

    window.onresize = function() {
    	console.log('onresize');
    };


	function render() {
		cube.render();
	};

	(function animLoop() {
		requestAnimFrame(animLoop);
		gcontext.clearRect(0, 0, gcontext.canvas.width, gcontext.canvas.height);
		render();
	})();
};