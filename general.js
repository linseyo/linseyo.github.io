$( document ).ready(function() {
  $('.plan').find('p').hide();
  $('.iterate').find('p').hide();
  $('.deliver').find('p').hide();

  $('.plan').on("click", "button", function(e){
    e.preventDefault();
    console.log("made it again!")
    $('.plan').find('p').slideDown();

  })




});
