var wWidth = $(window).width()

if ( wWidth < 767) {
    $(".navbar").removeClass("navbar-fixed-top")
} 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
