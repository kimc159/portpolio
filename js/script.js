$(function() {
	showSlides(slideIndex);
	showSlides2(slideIndex);
	// 초기 아이콘 버튼 사라짐
	$("#icon1, #icon2, #icon3").css("display","none");
    var $root = $('html, body');
	$("#nav-brand, #move-resume, #move-portpolio, #first-a, #second-a, #third-a, #fourth-a").click(function() {
		console.log("re1 in");
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
	//버튼 클릭했을 때 아이콘 보이기
	$("#first-a, #second-a, #move-resume").click(function(){
		console.log("clickedosnk");
		$("#icon1").delay(500).fadeIn(500);
		$("#icon2").delay(500).fadeIn(1000);
		$("#icon3").delay(500).fadeIn(1500);
	});
	// 마우스 스크롤 내릴때 아이콘 보이기
 	$('#resume').bind('mousewheel', function(e){ 
 		if(e.originalEvent.wheelDelta /120 > 0) { 
 			console.log('scrolling up !'); 
 		} else{ console.log('scrolling down !'); 
		$("#icon1").delay(500).fadeIn(500);
		$("#icon2").delay(500).fadeIn(1000);
		$("#icon3").delay(500).fadeIn(1500);
		}
 	});
});
var slideIndex = 1;
function showText(thisobj){
	console.log("showText in");
	$(thisobj).css("cursor","pointer");
	$(thisobj).find(".portpolio-box-caption-content").css("display","block");
	$(thisobj).closest("div").css({"background-color":"#0846aa"});

	}
function hideText(thisobj){
	console.log("hideText in");
	$(thisobj).find(".portpolio-box-caption-content").css("display","none");
}
function showproject(thisobj){
    $("#myModal").css("display","block");
}
function showproject2(thisobj){
    $("#myModal2").css("display","block");
}
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
function spclick(){
    $("#myModal").css("display","none");
    $("#myModal2").css("display","none");
}

$(window).click(function(e) {
	var target = $(event.target);
	if (event.target.id == "myModal") {
    	$("#myModal").css("display","none");
    }
    if (event.target.id == "myModal2") {
    	$("#myModal2").css("display","none");
    }
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}