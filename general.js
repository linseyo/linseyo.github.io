$( document ).ready(function() {
  $('.plan').find('p').hide();
  $('.iterate').find('p').hide();
  $('.deliver').find('p').hide();

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



});
