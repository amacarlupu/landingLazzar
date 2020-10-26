var swiper = new Swiper('.swiper-container', {
    // effect: 'flip',
    // grabCursor: true,
    speed:400,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });