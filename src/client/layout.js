$('nav a').click(function () {
  $('nav a').parent().removeClass('active');
  $(this).parent().addClass('active');
});