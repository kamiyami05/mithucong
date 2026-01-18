$(document).ready(function(){
    // 1. Slider Banner (Chạy tự động)
    new Swiper('.swiper-slider-main', {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    // 2. Slider Danh mục
    new Swiper('.swiper-cate', {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 15 }
        }
    });

    // 3. Logic Lọc Sản phẩm (Filter)
    window.filterSelection = function(category, element) {
        // Xóa class active ở nút cũ
        $('.product-item--cate').removeClass('active');
        // Thêm class active cho nút vừa bấm
        $(element).addClass('active');

        if (category == 'all') {
            // Nếu chọn tất cả -> Hiện hết
            $('.filter-item').addClass('show');
        } else {
            // Ẩn hết trước
            $('.filter-item').removeClass('show');
            // Chỉ hiện món thuộc danh mục đó
            $('.filter-item.cat-' + category).addClass('show');
        }
    };

    // Mặc định chọn "Tất cả" khi tải trang
    filterSelection('all', $('.product-item--cate').first());
});