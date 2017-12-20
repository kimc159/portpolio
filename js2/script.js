$(function() {
  AOS.init();
  $('.header-content').height($(window).height());
  $('.black').height($('.header-content').height());
	// 초기 아이콘 버튼 사라짐
	$("#icon1, #icon2, #icon3, #icon4, #icon5, #icon6").css("display","none");
	//스크롤 내렸을때 아이콘 생기기
  var $root = $('html, body');
  var modal = $('#myModal');
  var modal2 = $('#myModal2');

  // Get the <span> element that closes the modal
  var span = $(".close")[0];
	$("#nav-brand, #move-resume, #move-portfolio, #move-background, #first-a, #second-a, #third-a, #fourth-a, #last-a").click(function() {
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
          $(this).css("color","#ffdaa5");},function(){
           $(this).css("color","#777");
        });
        $("#mainNav .navbar-brand").css({"color":"#0846aa","fontSize":"20px"});
     } else if(st < 300){// mouse scroll up
        console.log("scroll up");
        console.log(st);
        $("#mainNav").addClass("mainNavimg");
        $("#mainNav .navbar-nav li a").hover(function(){
          $(this).css("color","#ffdaa5");},function(){
           $(this).css("color","#777");
        });
        $("#mainNav .navbar-brand").css({"color":"#ccc","fontSize":"25px"});
      }else if(st > 2200){
        console.log(st);
        $("#icon6").delay(1000).fadeIn(500);
      }
    lastScrollTop = st;
  });
 $(".explain").click(function(){
  $(".more_explain").width($(window).width());
  $(".more_explain").height($(window).height());
  $('.more_explain').fadeIn(500);
  $('.more_img').fadeIn(500);

  var src = $(this).data('img');
  var img = "<img src ='"+src+"' />";
  var href = $(this).data('href');
  console.log(href);
  var a = "<a class='show_pf' href='"+href+"'>사이트로이동</a>"
  console.log(a);
  $('.more_img').html(img);
  $('.more_img').append(a);
 });
 $('.more_img').click(function(){
      $('.more_explain').fadeOut(500);
      $('.more_img').fadeOut(500);
      $('.show_pf').remove();
    });
});
