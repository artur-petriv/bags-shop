import Swiper from "swiper/bundle"

document.addEventListener(`DOMContentLoaded`, function () {
    // Swiper
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

    // Nav menu actions
    const menuBtn = document.querySelector(`.hamburger`)
    const navMenu = document.querySelector(`.nav-mob`)
    const body = document.querySelector(`.body`)

    function toggleMenu() {
        menuBtn.classList.toggle(`is-active`)
        navMenu.classList.toggle(`is-visible`)
        body.classList.toggle(`overflow-hidden`)
    }

    menuBtn.addEventListener(`click`, toggleMenu)
})
