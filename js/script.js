$(document).ready(function(){
    new Swiper('.swiper-slider-main', {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    new Swiper('.swiper-cate', {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 15 }
        }
    });

   window.filterSelection = function(category, element) {
        $('.product-item--cate').removeClass('active');
        $(element).addClass('active');

        if (category == 'all') {
            $('.filter-item').addClass('show');
        } else {
            $('.filter-item').removeClass('show');
            $('.filter-item.category-' + category).addClass('show'); 
        }
    };
    filterSelection('all', $('.product-item--cate').first());
});