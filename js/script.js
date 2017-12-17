$(function() {
	showSlides(slideIndex);
	showSlides2(slideIndex);
  showSlides3(slideIndex);
  showSlides4(slideIndex);
	// 초기 아이콘 버튼 사라짐
	$("#icon1, #icon2, #icon3, #icon4, #icon5, #icon6").css("display","none");
	//스크롤 내렸을때 아이콘 생기기
  var $root = $('html, body');
  var modal = $('#myModal');
  var modal2 = $('#myModal2');

  // Get the <span> element that closes the modal
  var span = $(".close")[0];
	$("#nav-brand, #move-resume, #move-portpolio, #move-background, #first-a, #second-a, #third-a, #fourth-a, #last-a").click(function() {
		console.log("re1 in");
	    $root.delay(200).animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 450);
	    return false;
	});

	//버튼 클릭했을 때 아이콘 보이기
	$("#first-a, #second-a, #move-resume").click(function(){
		console.log("clickedosnk");
		$("#icon1").delay(500).fadeIn(500);
		$("#icon2").delay(700).fadeIn(500);
		$("#icon3").delay(1000).fadeIn(500);
	});
	// 마우스 스크롤 내릴때 아이콘 보이기
  var lastScrollTop = 300;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop && st<1000){ // mouse scroll down
      console.log("scroll down");
      console.log(st);
      $("#icon1").delay(500).fadeIn(500);
      $("#icon2").delay(700).fadeIn(500);
      $("#icon3").delay(1000).fadeIn(500);
      $("#mainNav").removeClass("mainNavimg");
      $("#mainNav .navbar-nav li a").hover(function(){
        $(this).css("color","#000");},function(){
         $(this).css("color","#777");
      });
      $("#mainNav .navbar-brand").css({"color":"#0846aa","fontSize":"20px"});
     } else if(st < 300){// mouse scroll up
      console.log("scroll up")
      $("#mainNav").addClass("mainNavimg");
      $("#mainNav .navbar-nav li a").hover(function(){
        $(this).css("color","#fff");},function(){
         $(this).css("color","#777");
      });
      $("#mainNav .navbar-brand").css({"color":"#fff","fontSize":"25px"});
      }else if(st > 2200){
        console.log(st);
        $("#icon4").delay(500).fadeIn(500);
        $("#icon5").delay(700).fadeIn(500);
        $("#icon6").delay(1000).fadeIn(500);
      }
    lastScrollTop = st;
  });
 $(window).click(function(e) {
  var target = $(event.target);
  if (event.target.id == "myModal" || event.target.id == "myModal2" || event.target.id == "myModal3" || event.target.id == "myModal4") {
      $("#myModal").css("display","none");
      $("#myModal2").css("display","none");
      $("#myModal3").css("display","none");
      $("#myModal4").css("display","none");
    }
});
});
var slideIndex = 1;
function showText(thisobj){
	console.log("showText in");
	$(thisobj).css("cursor","pointer");
	$(thisobj).find(".portpolio-box-caption-content").css({"display":"block","background-color":"#0846aa","opacity":"0.3"});
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
function showproject3(thisobj){
    $("#myModal3").css("display","block");
}
function showproject4(thisobj){
    $("#myModal4").css("display","block");
}
// Get the modal

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
function spclick(){
    $("#myModal").css("display","none");
    $("#myModal2").css("display","none");
    $("#myModal3").css("display","none");
    $("#myModal4").css("display","none");
}


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
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
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
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
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