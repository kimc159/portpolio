$(function() {
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
function showproject(){

}