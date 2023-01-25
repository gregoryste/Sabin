const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.js-button-next',
      prevEl: '.js-button-prev',
    },
});

