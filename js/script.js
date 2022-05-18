$(function(){
    //bx-slider
    $('.img-slider').bxSlider({
        mode: 'horizontal',
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        speed: 800,
        pager: true
      });

      //slick-slider
      $('.product-slide').slick({
        slide: 'li',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
})