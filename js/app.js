var project = $('.project-item');
var projects = $('.projects');

function showProjects(projectsToShow){
  project.hide();
  delay = 0;
  projectsToShow.find(".project-item").each(function(i, element) {
    delay = (i) * 100;
    setTimeout(function (element) {
      $(element).show().addClass('animated fadeInUp');
    }, delay, $(this));
  });
}

$('.categories-nav a').click(function(e){
  e.preventDefault();
  var cat = $(this).data('cat');
  $('.category').hide();
  var projectsToShow = $('.category[data-cat="'+ cat + '"]');
  projectsToShow.show();
  showProjects(projectsToShow);
  $('html, body').animate({
    scrollTop: projects.offset().top
  }, 100);
  return false;
});

$('#all').click(function(){
  $('.category').show();
  project.show();
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