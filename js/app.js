$('.categories-nav a').click(function(){
  var cat = $(this).data('cat');
  $('.category').hide();
  $('.projects').find('[data-cat="'+ cat + '"]').show().addClass('animated fadeInUp');
});

$('#all').click(function(){
  $('.category').show().addClass('animated fadeInUp');
});


$(function(){
  var header = $('.main-header');
  var x = header.offset().top;
  $(window).scroll(function(e){
    var y = $(window).scrollTop();
      e.preventDefault();
      if (y >= x ) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
  })
});

