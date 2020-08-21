$(document).ready(function(){

    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination:{
            el: '.swiper-pagination',
            bulletActiveClass: 'pagination-dot',
        },
        });

});