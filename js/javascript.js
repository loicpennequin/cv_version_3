$(document).ready(function(){

// MENU


for (let i = 1; i<=4; i++) {
	$(".section" + i).click(function(){
	for (var j = 1; j<=4; j++) {
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



/* ANCIENNE VERSION

	$( ".section1" ).click(function() {
		for (var i = 1; i<=4; i++ ){
				if (i != 1) {
					$(".section" + i).removeClass("transform" + i);
					$("#content"  + i).addClass("hidden");
					$("main").removeClass("bg-couleur-" + i);
					$(".contact").removeClass("bg-couleur-" + i);
				}
				else {
					$( ".section" + i).toggleClass("transform" + i );
					$("#content" + i).toggleClass("hidden");
					$("main").toggleClass("bg-couleur-" + i + "b");
					$(".contact").toggleClass("bg-couleur-" + i);
				}
		}

	});

	$( ".section2" ).click(function() {
		for (var i = 1; i<=4; i++){
				if (i != 2) {
					$(".section" + i).removeClass("transform" + i);
					$("#content"  + i).addClass("hidden");
					$("main").removeClass("bg-couleur-" + i);
					$(".contact").removeClass("bg-couleur-" + i);
				}
				else {
					$( ".section" + i).toggleClass("transform" + i, 1000, "easeInOutQuad" );
					$("#content" + i).toggleClass("hidden");
					$("main").toggleClass("bg-couleur-" + i + "b");
					$(".contact").toggleClass("bg-couleur-" + i);
				}
		}
		$("#photo").removeClass("photo-slide");
	});

	$( ".section3" ).click(function() {
		for (var i = 1; i<=4; i++){
				if (i != 3) {
					$(".section" + i).removeClass("transform" + i);
					$("#content"  + i).addClass("hidden");
					$("main").removeClass("bg-couleur-" + i);
					$(".contact").removeClass("bg-couleur-" + i);
				}
				else {
					$( ".section" + i).toggleClass("transform" + i, 1000, "easeInOutQuad" );
					$("#content" + i).toggleClass("hidden");
					$("main").toggleClass("bg-couleur-" + i + "b");
					$(".contact").toggleClass("bg-couleur-" + i);
				}
		}
		$("#photo").removeClass("photo-slide");
	});

	$( ".section4" ).click(function() {
		for (var i = 1; i<=4; i++){
				if (i != 4) {
					$(".section" + i).removeClass("transform" + i);
					$("#content"  + i).addClass("hidden");
					$("main").removeClass("bg-couleur-" + i + "b");
					$(".contact").removeClass("bg-couleur-" + i);
				}
				else {
					$( ".section" + i).toggleClass("transform" + i, 1000, "easeInOutQuad" );
					$("#content" + i).toggleClass("hidden");
					$("main").toggleClass("bg-couleur-" + i);
					$(".contact").toggleClass("bg-couleur-" + i);
				}
		}
		$("#photo").removeClass("photo-slide");
	});


*/

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
