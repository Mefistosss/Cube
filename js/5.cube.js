var Cube = (function() {
	'use strict';

	var x, y, width, points = [],
		p1, p2, p3, p4, p5, p6, p7, p8, 
		arr = [],

	cube = function (_x, _y, _width) {
		x = _x || 0;
		y = _y || 0;
		width = _width || 50;

		p1 = new Point3d(x, y, x);
		p2 = new Point3d(x, y + width, x);
		p3 = new Point3d(x + width, y, x);
		p4 = new Point3d(x + width, y + width, x);
		p5 = new Point3d(x + width, y, x + width);
		p6 = new Point3d(x, y, x + width);
		p7 = new Point3d(x, y + width, x + width);
		p8 = new Point3d(x + width, y + width, x + width);

		arr.push(p1);
		arr.push(p2);
		arr.push(p3);
		arr.push(p4);
		arr.push(p5);
		arr.push(p6);
		arr.push(p7);
		arr.push(p8);

        points.push([p1,p2,p3,p6]);
        points.push([p2,p4,p7]);
        points.push([p3,p4,p5]);
        points.push([p4,p8]);
        points.push([p5,p6,p8]);
        points.push([p6,p7]);
        points.push([p7,p8]);
        points.push([p8]);
	};

	cube.prototype = {

		setPosition: function(_x, _y) {
			_x && (x = _x);
			_y && (y = _y);
		},

		rotateOX: function(phi) {
			var i, _y, _z,
				cos = Math.cos(phi),
	    		sin = Math.sin(phi);

	        for (i = 0; i < points.length; i++) {
	            _y = points[i][0].y;
	            _z = points[i][0].z;
	            points[i][0].z = _y * sin + _z * cos;
	            points[i][0].y = _y * cos + _z * sin * (-1);
	        }
		},

		rotateOY: function(phi) {
			var i, _x, _z,
				cos = Math.cos(phi),
				sin = Math.sin(phi);

	        for (i = 0; i < points.length; i++) {
	            _x = points[i][0].x;
	            _z = points[i][0].z;
	            points[i][0].z = _x * sin + _z * cos;
	            points[i][0].x = _x * cos + _z * sin * (-1);
	        }
		},

		rotateOZ: function(phi) {
			var i, _x, _y,
				cos = Math.cos(phi * (-1)),
				sin = Math.sin(phi);

	        for (i = 0; i < points.length; i++) {
	            _x = points[i][0].x;
	            _y = points[i][0].y;
	            points[i][0].y = _y * cos - _x * sin;
	            points[i][0].x = _x * cos + _y * sin;
	        }
		},

		diff: function(os) {
			var i, min = Number.MAX_VALUE, max = 0;
			for (i = 0; i < arr.length; i++) {
				if (arr[i][os] > max) {
					max = arr[i][os];
				}
				if (arr[i][os] < min) {
					min = arr[i][os];
				}
			}
			return (max + min);
		},

		centering: function(_width, _height) {
			var i, dx = (_width - this.diff('x')) / 2,
				dy = (_height - this.diff('y')) / 2;

	        for (i = 0; i < arr.length; i++) {
	            arr[i].x += dx;
	            arr[i].y += dy;
	        }
		},

		render: function() {
			var i, j;

		    gcontext.beginPath();


		    gcontext.lineWidth = 2;
		    gcontext.strokeStyle = 'red';

		    for (i = 0; i < points.length; i++) {
		    	if (points[i].length > 1) {
		    		for (j = 1; j < points[i].length; j++) {
						gcontext.moveTo(points[i][0].x, points[i][0].y);
						gcontext.lineTo(points[i][j].x, points[i][j].y);	    		
			    	}	
		    	}
		    }
		    gcontext.stroke();
		}
	};

	return cube;
})();