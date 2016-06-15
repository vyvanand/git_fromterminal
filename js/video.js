window.onload = function() { 
	var video = document.getElementById('video');
	var source = document.createElement('source');
	source.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.ogg');
	video.appendChild(source);
	video.play();

	setTimeout(function() {  
	    video.pause();
	    source.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.ogg'); 
	    video.load();
	    video.play();
	}, 10000);
	};
