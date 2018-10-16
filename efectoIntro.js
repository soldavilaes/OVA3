/*------------------------------------
* EFECTO DE ENTRADA DE LA INTRODUCCÓN
--------------------------------------*/

$(document).ready(function() {
  /* top-left logo animation */
    $('.logo-container')
      .stop(true)
      .animate({
      left:'30px'
    }, 1000);
  $('h2')
        .stop(true)
        .animate({
            opacity:"1"
        },1200);
  /* title animation */
  $('h1')
        .stop(true)
        .animate({
            opacity:"1"
        },1500);
  /* top-left logo animation */
  $('.rectangle1') 
        .stop(true)
        .animate({
            left:"99%",  
        },2200);
});