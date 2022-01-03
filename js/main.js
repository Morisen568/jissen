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

function fadeIn() {

  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});