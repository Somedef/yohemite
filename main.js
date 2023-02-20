AOS.init();

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});
// 헤더

$(document).ready(function(){
    $('.s1_slide > li').click(function(){
      $(this).addClass('on');
      $('.s1_slide > li').not(this).removeClass('on');
    });	
  });
//   sec2

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 40,
  });
// 스와이퍼

$(document).on('click','a[href="#"]',function(e){
  e.preventDefault();
});
// 탑이동방지

  