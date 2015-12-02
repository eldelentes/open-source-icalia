$(function(){
  var header = $('.main-header');
  var x = header.offset().top;
  $(window).scroll(function(e){
    var y = $(window).scrollTop();
      console.log(y);
      e.preventDefault();
      if (y >= x ) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
  })
});
