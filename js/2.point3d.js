var Point3d = (function() {
	'use strict';

	var point = function (_x, _y, _z) {
		this.x = _x || 0;
		this.y = _y || 0;
		this.z = _z || 0;
	};

	return point;
})();