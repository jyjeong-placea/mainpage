$( document ).ready(function() {
  $('.mobile_ham').click(function(){
    $('header').toggleClass('on');
    $('html').toggleClass('on');
  });
});