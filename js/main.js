const loadAnime = $('#load-animation');
$(window).on('load', function () {
  loadAnime.delay(3500).fadeOut(1000);
});

function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

$('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});