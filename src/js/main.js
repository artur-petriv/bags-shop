import Swiper from "swiper/bundle"

document.addEventListener(`DOMContentLoaded`, function () {
    const mySwiper = new Swiper(`.swiper-container`, {
        loop: true,
        simulateTouch: false,
        flipEffect: {
            slideShadows: false,
        },
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
        },
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
    })
})
