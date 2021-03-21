// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// //   all ------------------
// function initParadoxWay() {
//     "use strict";
   
//     if ($(".testimonials-carousel").length > 0) {
//         var j2 = new Swiper(".testimonials-carousel .swiper-container", {
//             preloadImages: false,
//             slidesPerView: 1,
//             spaceBetween: 20,
//             loop: true,
//             grabCursor: true,
//             mousewheel: false,
//             centeredSlides: true,
//             pagination: {
//                 el: '.tc-pagination',
//                 clickable: true,
//                 dynamicBullets: true,
//             },
//             navigation: {
//                 nextEl: '.listing-carousel-button-next',
//                 prevEl: '.listing-carousel-button-prev',
//             },
//             breakpoints: {
//                 1024: {
//                     slidesPerView: 3,
//                 },
                
//             }
//         });
//     }
    
// // bubbles -----------------
    
    
//     setInterval(function () {
//         var size = randomValue(sArray);
//         $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
//         $('.individual-bubble').animate({
//             'bottom': '100%',
//             'opacity': '-=0.7'
//         }, 4000, function () {
//             $(this).remove()
//         });
//     }, 350);
    
// }

// //   Init All ------------------
// $(document).ready(function () {
//     initParadoxWay();
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// const body = document.querySelector("body");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = ()=>{
//   navbar.classList.add("show");
//   menuBtn.classList.add("hide");
//   body.classList.add("disabled");
// }
// cancelBtn.onclick = ()=>{
//   body.classList.remove("disabled");
//   navbar.classList.remove("show");
//   menuBtn.classList.remove("hide");
// }

var wWidth = $(window).width()

if ( wWidth < 767) {
    $(".navbar").removeClass("navbar-fixed-top")
} 