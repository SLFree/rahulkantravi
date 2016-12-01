(function () {
  mentoringBubbleClick();
  setInterval(function () {
    articleTada()
  }, 4000);
  designBGStuff();
  submit();
  smoothScroll(300);
  mobileNav();
})();

function submit() {
  $('#mc-embedded-subscribe-form').submit(function(e) {
    e.preventDefault();
    if($('#mce-MSG').val().trim()!=''&& $('#mce-NAME').val().trim()!='' && $('#mce-EMAIL').val().trim()!=''){
       // don't submit multiple times
      this.submit(); // use the native submit method of the form element
       setTimeout(function(){ window.top.close(); }, 500);
    }else{
      $('#mce-error-response').text(' Please Fill All The Fields ');
      $('#mce-error-response').show(500);
      setTimeout(function(){ $('#mce-error-response').hide(500); }, 4000);
    }      
  });
}
function mobileNav() {

  $('.mobile-nav-toggle').on('click', function () {
    var status = $(this).hasClass('is-open');
    if (status) {
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else {
      $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
      
    }
  });
}


function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));
    var newTop = target.offset().top
    if ($(".mobile-nav-toggle").css('display') != 'none') {
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
      newTop = newTop - 90;

    }
    //console.error(newTop);
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: newTop
      }, duration);
    }
  });
}

function designBGStuff() {
  $('.design-img-link').hover(function () {
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function () {
    // off > revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });


}

function articleTada() {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1
  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

function mentoringBubbleClick() {
  $('.face').on('click', function () {
    var $this = $(this),
      faceTop = $this.position().top,
      vertMath = -1 * (faceTop - 150),
      faceLeft = $this.position().left,
      horizMath = 0 - faceLeft;
    console.log(faceTop + ' faceTop ' + vertMath + " vertMath " + faceLeft + " faceLeft " + horizMath + " horizMath ");

    if ($(window).width() > 640) {
      $this.parent().css('top', +vertMath + 'px');
    } else {
      if ($this.hasClass('back-btn')) {
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', +horizMath + 'px');
      }
    }

    if (!$this.hasClass('back-btn')) {
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });
}


$(window).scroll(function () {
  youtubeVidScroll();
  //startMentoring();
  startArticles();
});


function youtubeVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}

function startArticles() {
  var wScroll = $(window).scrollTop();

  if ($('section.articles').offset().top - $(window).height() / 1.2 < wScroll) {
    $('.article-thumb').each(function (i) {
      setTimeout(function () {
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 100 * i);
    });
  }
}

function startMentoring() {

  var wScroll = $(window).scrollTop();

  if ($('section.mentoring').offset().top - $(window).height() / 2 < wScroll) {
    if ($(window).width() > 640) {
      $('.faces').addClass('launched');
      if (!$('.face').hasClass('has-bubble-open')) {
        setTimeout(function () {
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    } else {
      mentoringNarrowStart();
    }
  }

}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '300px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}


$(window).resize(function () {
  if ($(window).width() > 640) {
    //mentoringWideStart();
  } else {
    //mentoringNarrowStart();
  }

});