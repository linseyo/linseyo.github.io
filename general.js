$( document ).ready(function() {
  $('.plan').find('p').hide();
  $('.iterate').find('p').hide();
  $('.deliver').find('p').hide();
  $('.design-code-content').hide();
  $('.photo-video-content').hide();
  $('.tech-skill-content').hide();
  $('.ot-skill-content').hide();

  $('.plan').on("click", "img", function(e){
    e.preventDefault();
    $('.plan').find('p').hide();
    $('.iterate').find('p').hide();
    $('.deliver').find('p').hide();
    $('.plan').find('p').slideDown();

  })

  $('.iterate').on("click", "img", function(e){
    e.preventDefault();
    $('.plan').find('p').hide();
    $('.iterate').find('p').hide();
    $('.deliver').find('p').hide();
    $('.iterate').find('p').slideDown();

  })

  $('.deliver').on("click", "img", function(e){
    e.preventDefault();
    $('.plan').find('p').hide();
    $('.iterate').find('p').hide();
    $('.deliver').find('p').hide();
    $('.deliver').find('p').slideDown();

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


});
