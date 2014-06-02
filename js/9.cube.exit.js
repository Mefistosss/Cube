	
	window.addEventListener("DOMContentLoaded", function() {
		var wrapper = document.createElement("DIV"),
			canvas = document.createElement("CANVAS");

		wrapper.className += (wrapper.className ? ' ' : '') + 'wrapper';
		canvas.className += (canvas.className ? ' ' : '') + 'cube';

        try {
            canvas.innerHTML = 'not supported!';
        } catch (e){
	        canvas.innerText = 'not supported!';
        }

        wrapper.appendChild(canvas);

		document.body.appendChild(wrapper);

		init(canvas);
	}, false);
})();