$(document).ready(() => {
    new WOW().init();

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    particlesJS.load('particles-js', 'assets/data/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    $('.fancybox').fancybox();

    $('.toggle-btn').click(function() {
        $('#sidebar').toggleClass('active');
    });

    $('#sidebar ul a li').click(function() {
        $('#sidebar').toggleClass('active');
    });
});