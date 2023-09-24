var rect = document.querySelector('.rect');

rect.addEventListener('mousemove', function (details) {
    var rectLoc = rect.getBoundingClientRect()
    var rectLocX = details.clientX - rectLoc.left;

    // mapRange(inMin, inMax, outMin, outMax, valueToMap)

    if (rectLocX < rectLoc.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectLoc.width / 2, 255, 0, rectLocX );
   
    gsap.to(rect, {
        backgroundColor : `rgb(${redColor},0,0)`,
        ease : Power4,
    });
}
    else {
        var blueColor = gsap.utils.mapRange(rectLoc.width / 2, rectLoc.width, 0, 255, rectLocX );
   
        gsap.to(rect, {
            backgroundColor : `rgb(0,0,${blueColor})`,
            ease : Power4,
        });
    }
});

rect.addEventListener('mouseleave', function(){
    gsap.to(rect,{
    backgroundColor:"white"
    });
})