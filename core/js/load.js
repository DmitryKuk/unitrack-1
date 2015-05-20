	if (typeof window['deg'] != 'function') {
	
		function deg(e, element){
			if (typeof(e) != 'number') e=0;
			a = (e * Math.PI) / 180.0;	cos = Math.cos(a);	sin = Math.sin(a);
			ie = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + cos + ', M12=' + (-sin) + ',M21=' + sin + ', M22=' + cos + ', sizingMethod=\'auto expand\')';
			cross = 'rotate('+e+'deg)';
			
			e1 = element.style;  
			e1.webkitTransform = cross;
			e1.MozTransform = cross;
			e1.msTransform = cross;
			e1.OTransform = cross;
			e1.transform = cross;
			e1.filter = ie;
			e1.zoom = '1';
		}
	
	}
	
	var i = 0;
	setInterval(function(){
		if(i == 360) i = 0;
		i++; deg(i, document.getElementById('preload'));
	}, 1);