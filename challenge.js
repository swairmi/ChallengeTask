  /********SCROLL BAR/ NAV BAR********/
  $(function() {
    var navbar = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 300) {
            navbar.removeClass('navbar').addClass("navbar_alt");
        } else {
            navbar.removeClass("navbar_alt").addClass('navbar');
        }
    });
});
/********SCROLL BAR/ NAV BAR********/


$(document).ready(function(){ 
	$(".extra_content_button").click(function(){
	  $(".landing_fadein").css("display", 'initial');
	});
});




/*******FIRST SECTION DOWNWARDS ARROW*********/
  var tl_landing = new TimelineMax({paused:false, repeat:-1})
      var downchevron = $('.extra_content_button');
          tl_landing.to(downchevron, 3, { ease: Elastic.easeOut.config(1, 0.3), y: -20 })
/*******FIRST SECTION DOWNWARDS ARROW*********/






/*******SECOND SECTION AUTO PAGE TURNER*******/
  var tl_pagechange = new TimelineMax({paused:false, delay:5, repeat:-1});

    var page_content_one = $('.page_one');
    var page_button_one = $('.page_changer_one');

    var page_content_two = $('.page_two');
    var page_button_two = $('.page_changer_two');

    var page_content_three = $('.page_three');
    var page_button_three = $('.page_changer_three');

    var page_content_four = $('.page_four');
    var page_button_four = $('.page_changer_four');

    var progress = $('.progress_bar_two');
 
        tl_pagechange.to(progress, 3, {width:'24.2%', backgroundColor:'#00b386'})
      tl_pagechange.to(page_button_one, 0.5, {autoAlpha:1, delay:0.5})
      tl_pagechange.to(page_content_one, 1, {autoAlpha:1})
      tl_pagechange.to(page_button_one, 3, {autoAlpha:0})
      tl_pagechange.to(page_content_one, 2, {autoAlpha:0})
        

        tl_pagechange.to(progress, 3, {width:'48.4%', backgroundColor:'#00b386'})
      tl_pagechange.to(page_button_two, 0.5, {delay:0.5, autoAlpha:1})
      tl_pagechange.to(page_content_two, 1, {autoAlpha:1})
      tl_pagechange.to(page_content_two, 3, {autoAlpha:1})
      tl_pagechange.to(page_button_two, 0.5, {autoAlpha:0})
      tl_pagechange.to(page_content_two, 2, {autoAlpha:0})
        
        tl_pagechange.to(progress, 3, {width:'72.6%', backgroundColor:'#00b386'})
      tl_pagechange.to(page_button_three, 0.5, {delay:0.5, autoAlpha:1})
      tl_pagechange.to(page_content_three,1 , {autoAlpha:1})
      tl_pagechange.to(page_content_three,3 , {autoAlpha:1})
      tl_pagechange.to(page_button_three, 0.5, {autoAlpha:0})
      tl_pagechange.to(page_content_three,2 , {autoAlpha:0})
        

        tl_pagechange.to(progress, 3, {width:'96.8%', backgroundColor:'#00b386'})
        tl_pagechange.to(progress, 2, {width:'96.8%', backgroundColor:'#00b386'})
      tl_pagechange.to(page_button_four, 2, {delay:0.5, autoAlpha:1})
      tl_pagechange.to(page_content_four, 1,{autoAlpha:1})
      tl_pagechange.to(page_content_four, 3,{autoAlpha:1})
      tl_pagechange.to(page_button_four, 1, {autoAlpha:0})
      tl_pagechange.to(page_content_four, 1,{autoAlpha:0})
/*******SECOND SECTION AUTO PAGE TURNER*******/






/*******THIRD SECTION CONTENT CLICKER*******/
/*HEADING 1*/
$(document).ready(function(){ 
$(".footer_button_rightone").click(function() { 
    $("#section_three_container_one").fadeOut("slow"); 
  });
$(".footer_button_rightone").click(function() { 
    $("#section_three_container_two").fadeIn("slow");
  });


$(".footer_button_leftone").click(function() { 
    $("#section_three_container_one").fadeOut("slow"); 
  });
$(".footer_button_leftone").click(function() { 
    $("#section_three_container_three").fadeIn("slow");
  });
});
/*HEADING 1*/

/*HEADING 2*/
$(document).ready(function(){ 
$(".footer_button_righttwo").click(function() { 
    $("#section_three_container_two").fadeOut("slow"); 
  });
$(".footer_button_righttwo").click(function() { 
    $("#section_three_container_three").fadeIn("slow");
  });


$(".footer_button_lefttwo").click(function() { 
    $("#section_three_container_two").fadeOut("slow"); 
  });
$(".footer_button_lefttwo").click(function() { 
    $("#section_three_container_one").fadeIn("slow");
  });
});
/*HEADING 2*/

/*HEADING 3*/
$(document).ready(function(){ 

$(".footer_button_rightthree").click(function() { 
    $("#section_three_container_three").fadeOut("slow"); 
  });
$(".footer_button_rightthree").click(function() { 
    $("#section_three_container_one").fadeIn("slow");
  });

$(".footer_button_leftthree").click(function() { 
    $("#section_three_container_three").fadeOut("slow"); 
  });
$(".footer_button_leftthree").click(function() { 
    $("#section_three_container_two").fadeIn("slow");
  });
});
/*HEADING 3*/



/*******THIRD SECTION CONTENT CLICKER*******/


















