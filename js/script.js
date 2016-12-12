function setSize() {
	var wd = $(window).width();
	var hg = $(window).height();

	$("#dvImg").width(wd*80/100);
	$("#dvImg").height(hg*80/100);
	$("header").height(hg);
	$("section").height(hg);	
	if(wd + hg > 1300) {
		$("section").height(hg);	
	}
	else{
		$("section").css("height","auto");	
	}
}

$(document).ready(function() {
	$("section").hide();
	$("#dvImg").hide();
	setSize();
});

$(window).resize(function() {
	$("header,section").height(0);
	setSize();	
});

function fadeOutPages() {
	$("header").fadeOut(200);
	$("#sobre").fadeOut(200);
	$("#fotos").fadeOut(200);
	$("#contato").fadeOut(200);
}

function switchPage(page) {
	fadeOutPages();
	setTimeout(function() {$("#" + page).fadeIn(200);},200);
}

function openModal(img) {
	img = "url('img/" + img;
	img += ".jpg')"

	$("#dvImg").css("background-image",img);
	$("#dvImg").modal({
  		fadeDuration: 300,
	});
}

