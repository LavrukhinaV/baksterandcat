$(document).ready(function () {
  
  $(".categories-btn").on("click", function (e) {
    e.preventDefault();
    $(".categories-drop-menu").toggleClass("open");
    $(this).find("img").toggleClass("rotate");
  });
  
  $(".categories-btn").on("click", function (e) {
    e.stopPropagation();
  });
  
  $(".categories-drop-menu").on("click", function (e) {
    e.stopPropagation();
  });
  
  $(document).on("click", function () {
    $(".categories-drop-menu").removeClass("open");
    $(".categories-btn").find("img").removeClass("rotate");
  });
  
  $(".categories-menu-wrap h3").on("click", function () {
    $(this).closest(".categories-menu-wrap").find("ul").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });
  
  
  $('.partners-slider').slick({
    dots: false, arrows: false, infinite: true, autoplay: true, autoplaySpeed: 2000, variableWidth: true, responsive: [{
      breakpoint: 476, settings: {
        arrows: false, variableWidth: false, slidesToShow: 3, slidesToScroll: 1,
      }
    },]
  });
  
  $('.feed-slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: $('.feed-slider-wrap .slider-navigation .slick-prev'),
    nextArrow: $('.feed-slider-wrap .slider-navigation .slick-next'),
    responsive: [{
      breakpoint: 768, settings: {
        arrows: false,
      }
    },
      
      {
        breakpoint: 476, settings: {
          arrows: false, variableWidth: false, slidesToShow: 2, slidesToScroll: 1,
        }
      },]
  });
  
  $('.gadgets-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: $('.gadgets-slider-wrap .slider-navigation .slick-prev'),
    nextArrow: $('.gadgets-slider-wrap .slider-navigation .slick-next'),
    responsive: [{
      breakpoint: 768, settings: {
        arrows: false,
      }
    }, {
      breakpoint: 476, settings: {
        arrows: false, variableWidth: false, slidesToShow: 2, slidesToScroll: 1,
      }
    },]
  });
  
  $('.searched-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: $('.searched-slider-wrap .slider-navigation .slick-prev'),
    nextArrow: $('.searched-slider-wrap .slider-navigation .slick-next'),
    responsive: [{
      breakpoint: 768, settings: {
        arrows: false,
      }
    }, {
      breakpoint: 476, settings: {
        arrows: false, variableWidth: false, slidesToShow: 2, slidesToScroll: 1,
      }
    },]
  });
  
  $('.banner-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });
  
  //    $(".product-count .btn-minus").addClass("btn-disabled");
  
  $(".product-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this).closest(".product-count").find(".btn-minus").addClass("btn-disabled");
    } else {
      $(this).closest(".product-count").find(".btn-minus").removeClass("btn-disabled");
    }
  });
  
  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number = parseInt($(this).closest(".product-count").find(".product-number").text()) - 1;
    $(this).closest(".product-count").find(".product-number").text(number > 0 ? number : 1);
  });
  
  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number = parseInt($(this).closest(".product-count").find(".product-number").text()) + 1;
    $(this).closest(".product-count").find(".product-number").text(number);
  });
  
  $(".product-item .main-btn").on("click", function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).closest(".text-wrap").find(".product-count").addClass("show");
  })
  
  $(".product-item .heart").on("click", function () {
    $(this).addClass("active");
  })
  
  $('.footer-menu-wrap h3').on('click', function () {
    $(this).closest('.footer-menu-wrap').find('ul').toggleClass('hide');
    $(this).toggleClass("rotate");
  })
  
  $(window).on("resize", function (e) {
    if ($(window).width() > 767) {
      $('.footer-menu-wrap ul').removeClass('hide');
    }
  });
  
  // on tab click
  $(document).on('click', '.catalog-items .catalog-item', function (e) {
    e.preventDefault();
    let id = $(this).data('content-id');
    $('.catalog-items .catalog-item').removeClass('active');
    $('.catalog-content-list').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active');
  });
  
  // on accordion click (1 level)
  $(document).on('click', '.catalog-content-list .catalog-item', function (e) {
    e.preventDefault();
    let id = $(this).data('content-id');
    $('.catalog-content-list .catalog-item').addClass('hidden-mobile').removeClass('active-mobile');
    $(this).removeClass('hidden-mobile').addClass('active-mobile');
    $('#' + id).addClass('active-mobile');
  });
  
  // on accordion click (2 level)
  $(document).on('click', '.catalog-content .catalog-content-title', function (e) {
    e.preventDefault();
    $('.catalog-content').addClass('hidden-mobile').removeClass('active-mobile');
    $(this)
    .closest('.catalog-content-list')
    .find('.catalog-item')
    .addClass('hidden-mobile')
    .removeClass('active-mobile');
    $(this).closest('.catalog-content').removeClass('hidden-mobile').addClass('active-mobile');
  });
  
  // on back arrow click (1 level)
  $(document).on('click', '.catalog-item.active-mobile .catalog-item-arrow', function (e) {
    e.stopPropagation();
    $('.catalog-content-list .catalog-item').removeClass('hidden-mobile').removeClass('active-mobile');
    $('.catalog-content-list').removeClass('active-mobile');
  });
  
  // on back arrow click (2 level)
  $(document).on('click', '.catalog-content.active-mobile .catalog-content-arrow', function (e) {
    e.stopPropagation();
    $('.catalog-content-list .catalog-content').removeClass('hidden-mobile').removeClass('active-mobile');
    $(this)
    .closest('.catalog-content-list')
    .find('.catalog-item')
    .removeClass('hidden-mobile')
    .addClass('active-mobile');
  });
  
  $(".catalog-wrap .drop-menu").on("click", function () {
    $(".catalog").toggleClass("open");
    $(this).find("img").toggleClass("rotate");
  });

  $(".catalog-wrap .catalog-batton-close").on("click", function () {
    $(".catalog").toggleClass("open");
    $(this).find("img").toggleClass("rotate");
  });
  
  $(".drop-menu-mobile").click(function (e) {
    e.preventDefault();
    $(".catalog").toggleClass("open");
    $(this).find("img").toggleClass("rotate");
    $(this).toggleClass("is-active");
  });
  
  $(".categories-btn2").click(function (e) {
    e.preventDefault();
    $(".catalog").toggleClass("open");
    $(".drop-menu-mobile").find("img").toggleClass("rotate");
    $(".drop-menu-mobile").toggleClass("is-active");
  });
  
  let minVal = 0;
  let maxVal = 100000;
  $(function () {
    const sliderRange = $("#slider-range")
    sliderRange.slider({
      range: true, min: 0, max: 100000, values: [minVal, maxVal], slide: function (event, ui) {
        $('#sliderRangeMin').val(ui.values[0]);
        $('#sliderRangeMax').val(ui.values[1]);
      }
    })
  });
  
  // обработка input минимального значения цены
  const sliderRangeMin = $('#sliderRangeMin')
  const sliderRangeMax = $('#sliderRangeMax')
  sliderRangeMin.on('change', function () {
    minVal = +sliderRangeMin.val()
    maxVal = +sliderRangeMax.val()
    
    if (isNaN(minVal) && isNaN(maxVal)) return alert('Введите только цифры')
    $("#slider-range").slider('values', [minVal, maxVal]).trigger('change')
  })
  
  // обработка input максимального значения цены
  sliderRangeMax.on('change', function () {
    minVal = +sliderRangeMin.val()
    maxVal = +sliderRangeMax.val()
    
    if (isNaN(minVal) && isNaN(maxVal)) return alert('Введите только цифры')
    $("#slider-range").slider('values', [minVal, maxVal]).trigger('change')
  })
  
  $(function () {
    $("#slider-range2").slider();
  });
  
  $(function () {
    $("#slider-range3").slider();
  });
  
  // селект сортировки товаров
  const selectSort = $('#selectSort');
  selectSort.select2({
    minimumResultsForSearch: -1,
  });

  const selectDelivery = $('#selectDelivery');
  selectDelivery.select2({
    minimumResultsForSearch: -1,
  });

  const selectDate = $('#selectDate');
  selectDate.select2({
    minimumResultsForSearch: -1,
  });

  const selectTime = $('#selectTime');
  selectTime.select2({
    minimumResultsForSearch: -1,
  });

  const selectFavorites = $('#selectFavorites');
  selectFavorites.select2({
    minimumResultsForSearch: -1,
  });

  const selectAvailability = $('#selectAvailability');
  selectAvailability.select2({
    minimumResultsForSearch: -1,
  });
  
  //обработка выбора сортировки товаров, перенаправление по ссылке из data-href
  selectSort.on('change', function () {
    const regUrl = new RegExp('\\?sort=\\D')
    let href = selectSort.val()
    
    if (!href) return console.log('ошибка сортировки товаров #selectSort')
    if (!regUrl.test(href)) return alert('значение в выбранной опции не является ссылкой #selectSort')
    
    location.href = href;
  })
  
  $('.product-card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.product-card-slider-wrap .slider-navigation .slick-prev'),
    nextArrow: $('.product-card-slider-wrap .slider-navigation .slick-next'),
  });
  
  $('.scroll').smoothScroll({
    speed: 1000,
  });
  
  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });
  
  $(".contact-form").validate({
    errorPlacement: function (error, element) {
    }
  });
  
  
  $(".phone-number-input").inputmask({
    "mask": "+7 (999)-999-99-99",
  });

  // изменения в коде до 329 строки
  let activeButton = null;
  $(".courier-delivery").on("click", function (e) {
    e.preventDefault();
    if (activeButton === "point-issue") {
      $(".point-issue").removeClass("active");
      $(".hide-wrap_point").removeClass("shown");
    }
    $(this).toggleClass("active");
    $(".hide-wrap").toggleClass("shown");
    activeButton = "courier-delivery";
    
  })
  //при клике на ПВ
  $(".point-issue").on("click", function (e) {
    e.preventDefault();
    if (activeButton === "courier-delivery") {
      $(".courier-delivery").removeClass("active");
      $(".hide-wrap").removeClass("shown");
    }
    $(this).toggleClass("active");
    $(".hide-wrap_point").toggleClass("shown");
    activeButton = "point-issue";
  })
  
  $('.popup').magnificPopup({
    type: 'inline', mainClass: 'mfp-fade'
  });
  
  $(".product-catalog-title").on("click", function () {
    $(this).closest(".product-catalog-block").find(".catalog-block-wrap").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });
  
  $(".product-catalog-title2").on("click", function () {
    $(this).closest(".product-catalog-block").find(".categories-drop-wrap .categories-drop-menu2").toggleClass("open");
    $(this).find("img").toggleClass("rotate");
  });
  
  $('.visible-filters-toggle').on('click', function (el) {
    el.preventDefault()
    $('.product-item').toggleClass('not-filter')
    $('.categories-drop-menu').toggleClass('close')
    $('.product-catalog-buttons').toggleClass('ps-0')
  })
  
  //при клике на иконку поиска в header'
  $(".header-search-link").on("click", function (el) {
    el.preventDefault();
    $(".wrapper-header").hide(300);
    $(".wrapper-search").show(300)
  })
  
  $(".search-arrow").on("click", function (el) {
    el.preventDefault();
    $(".wrapper-header").show(300)
    $(".wrapper-search").hide(300)
  })
  
});

var textarea = document.querySelector('.contact-form__textarea');
console.log(textarea)

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});