$(document).ready(function(){

// MENU


for (let i = 1; i<=5; i++) {
	$(".section" + i).click(function(){
	for (var j = 1; j<=5; j++) {
		if (i == j) {
			$(".section" + j).toggleClass("transform" + i );
			$("#content" + j).toggleClass("hidden");
			$("main").toggleClass("bg-couleur-" + j + "b");
			$(".contact").toggleClass("bg-couleur-" + j);
		}
		else {
			$(".section" + j).removeClass("transform" + j);
			$("#content"  + j).addClass("hidden");
			$("main").removeClass("bg-couleur-" + j + "b");
			$(".contact").removeClass("bg-couleur-" + j);

		}
	}
	});
}

// FLECHES

	$( "#fleche1" ).click(function() {
		$('html, body').animate({
			scrollTop: $("#main-anchor").offset().top
		}, 800);
	});
	$( "#fleche2" ).click(function() {
		$('html, body').animate({
			scrollTop: $("#main-anchor").offset().top
		}, 800);
	});



// BLUR BG
	$(".nom").hover(function(){
		$(".static-bg").toggleClass("blurred");
	});

	$("main").hover(function(){
		$(".static-bg").toggleClass("blurred");
	});





});
