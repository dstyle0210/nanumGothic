(function(){
	if(window.webFont){return;};
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('safari') != -1 && ua.indexOf('version') != -1) {
		var link = document.getElementById("nanumGothicCSS");
		var href = (link.href).replace(".css","-webfont.css");
		document.write('<link href="'+href+'" rel="stylesheet" type="text/css" />');
	};
	window.webFont = true; 
})();