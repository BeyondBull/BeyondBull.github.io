$("#nav").addClass("js").before('<div id="menu">&bull; &bull; &bull;</div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 480) {
		$("#nav").removeAttr("style");
	}
});
