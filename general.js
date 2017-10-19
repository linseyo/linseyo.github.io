$( document ).ready(function() {


  $(function () {
    var $element = $('#notice');
    setInterval(function () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element.fadeIn(1500)
            });
        });
    }, 1000);
  });

  $('.plan').find('p').hide();
  $('.iterate').find('p').hide();
  $('.deliver').find('p').hide();
  $('.design-code-content').hide();
  $('.photo-video-content').hide();
  $('.tech-skill-content').hide();
  $('.ot-skill-content').hide();
  $('.exp-skill-content').hide();

  $('.plan').on("click", "img", function(e){
    e.preventDefault();
    $('.plan').find('p').slideToggle();

  })

  $('.iterate').on("click", "img", function(e){
    e.preventDefault();
    $('.iterate').find('p').slideToggle();

  })

  $('.deliver').on("click", "img", function(e){
    e.preventDefault();
    $('.deliver').find('p').slideToggle();

  })

  $('.design-code').on("click", "h1", function(e){
    e.preventDefault();
    $('.design-code-content').slideToggle();
  })

  $('.photo-video').on("click", "h1", function(e){
    e.preventDefault();
    $('.photo-video-content').slideToggle();
  })

  $('.technical-skill').on("click", "h3", function(e){
    e.preventDefault();
    $('.tech-skill-content').slideToggle();
  })

  $('.other-skill').on("click", "h3", function(e){
    e.preventDefault();
    $('.ot-skill-content').slideToggle();
  })

  $('.explore-skill').on("click", "h3", function(e){
    e.preventDefault();
    $('.exp-skill-content').slideToggle();
  })


});

$(document).ready(function() {
	$('#fullpage').fullpage();

  $('#fullpage').fullpage({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
});
});
