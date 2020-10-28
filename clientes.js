var swiper = new Swiper('.swiper-cliente', {
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
  });


  var swiperPremium = new Swiper('.swiper-premium-mobile', {
    effect:'coverflow',
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

  var swiperFull = new Swiper('.swiper-full-mobile', {
    effect:'coverflow',
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

  var swiperCloud = new Swiper('.swiper-cloud-mobile', {
    effect:'coverflow',
    speed:500,
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

  var swiperModulo = new Swiper('.swiper-modulo-mobile', {
    effect:'coverflow',
    speed:400,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
