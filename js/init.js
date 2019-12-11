var scrollPoint = 0;

$(window).scroll(function(event){
  var scroll = $(this).scrollTop();
  if(scroll > scrollPoint){
    $(".navbar").removeClass("fadeInDown");
    $(".navbar").addClass("fadeOutUp");
    $(".navbar").fadeToggle();
  }else {
    $(".navbar").removeClass("fadeOutUp");
    $(".navbar").addClass("fadeInDown");
    $(".navbar").show();
  }
  scrollPoint = scroll;
});
