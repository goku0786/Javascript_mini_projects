window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector('.rect');
 
    var X_val = gsap.utils.mapRange(0, 
        window.innerWidth, 
        150 + rect.getBoundingClientRect().width/2,
        window.innerWidth - ( 150 + rect.getBoundingClientRect().width/2), 
        details.clientX);

    gsap.to('.rect', {
        left: X_val + "px",
        ease: Power3
    });
});

