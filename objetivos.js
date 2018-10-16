/* EFECTOS OBJETIVOS TEMA 2 
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);*/

var count = $('.count');
var loader = $('#loader');
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 3000,
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

var count = $('.count');
var loader = $('#loader');
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 3000,
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

