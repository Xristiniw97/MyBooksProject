/*Scroll to top*/
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function(){
   $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
}); 

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".header").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".header").removeClass("active");
  }
});

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.sectionOne').offset().top }, 'slow');
    return false;
  });
});