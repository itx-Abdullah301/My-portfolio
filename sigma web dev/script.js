// Adding some simple animations or interactions
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let homeSection = document.querySelector('#home');
    let aboutSection = document.querySelector('#about');
    
    // Add fade-in effect on scroll
    if (scrollPosition > homeSection.offsetHeight) {
        aboutSection.style.opacity = 1;
        aboutSection.style.transition = "opacity 1.5s ease-in";
    }
});
