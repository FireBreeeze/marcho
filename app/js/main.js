$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('footer-top__title--active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812"/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812"/></g></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function(e){

    e.preventDefault(); //отменяет стандартную обработку по ссылке
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
     type: "double",
     prefix: "$",
    
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },   
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    // starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style="stroke:none;fill-rule:nonzero;;fill-opacity:1;" d="M 8.996094 0 C 9.285156 0 9.546875 0.164062 9.671875 0.421875 L 11.816406 4.835938 L 16.605469 5.546875 C 16.886719 5.585938 17.117188 5.785156 17.210938 6.054688 C 17.296875 6.324219 17.226562 6.621094 17.023438 6.820312 L 13.550781 10.261719 L 14.371094 15.121094 C 14.417969 15.402344 14.304688 15.691406 14.070312 15.855469 C 13.835938 16.023438 13.503906 16.042969 13.277344 15.910156 L 8.996094 13.621094 L 4.691406 15.910156 C 4.464844 16.042969 4.160156 16.023438 3.925781 15.855469 C 3.695312 15.691406 3.578125 15.402344 3.597656 15.121094 L 4.445312 10.261719 L 0.972656 6.820312 C 0.769531 6.621094 0.699219 6.324219 0.789062 6.054688 C 0.875 5.785156 1.109375 5.585938 1.390625 5.546875 L 6.179688 4.835938 L 8.320312 0.421875 C 8.449219 0.164062 8.710938 0 8.996094 0 Z M 8.996094 2.46875 L 7.355469 5.851562 C 7.246094 6.070312 7.035156 6.226562 6.789062 6.265625 L 3.09375 6.808594 L 5.777344 9.46875 C 5.949219 9.640625 6.027344 9.886719 5.988281 10.128906 L 5.355469 13.867188 L 8.644531 12.109375 C 8.867188 11.992188 9.132812 11.992188 9.351562 12.109375 L 12.636719 13.867188 L 12.007812 10.128906 C 11.964844 9.886719 12.046875 9.640625 12.21875 9.46875 L 14.902344 6.808594 L 11.207031 6.265625 C 10.960938 6.226562 10.746094 6.070312 10.640625 5.851562 Z M 8.996094 2.46875"/></g></svg>',
  });

  function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);
  



});