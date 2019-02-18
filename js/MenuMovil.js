$(document).ready(function(){
	$("#menunav").click(function(){
		$('#NavegacionBarra').toggleClass('closed')
	});
	
		$('main').click(function(){
		$('#NavegacionBarra').addClass('closed')
	});
		$('#NavegacionBarra').click(function(){
		$('#NavegacionBarra').addClass('closed')
	});
});