$(document).ready(() => {
    new WOW().init();

    particlesJS.load('particles-js', '../assets/data/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    $('.fancybox').fancybox();
});