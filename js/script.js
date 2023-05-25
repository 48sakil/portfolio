$(function(){
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
      });
    // ==========
    $('.counter').countUp({
      'time': 2000,
      'delay': 10
    });
    // progress
    jQuery('.barChart').barChart({easing: 'easeOutQuart'});
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    // team part
    $('.slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      speed: 300,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  
             
})

$('.bt_top').click(function () {
  $('html,body').animate({
      scrollTop: 0,
  }, 3000);
});

$(window).scroll(function () {
  var abc = $(this).scrollTop();


  if (abc > 200) {
      $('.bt_top').fadeIn();
  } else {
      $('.bt_top').fadeOut();
  }
});