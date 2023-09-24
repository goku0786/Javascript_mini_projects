const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector('.center').addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imgDiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
   
    var img = document.createElement("img");
    img.setAttribute("src", "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400")
     div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .5
    });
    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2
        
    });

    setTimeout(function(){
  div.remove();
    }, 2000)

}, 200));