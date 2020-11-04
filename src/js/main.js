import Swiper from "swiper/bundle"

document.addEventListener(`DOMContentLoaded`, function () {
    const mySwiper = new Swiper(`.swiper-container`, {
        loop: true,
        simulateTouch: false,
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
