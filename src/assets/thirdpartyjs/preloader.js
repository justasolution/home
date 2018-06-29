var $circles = $(".circle"),
    tl = new TimelineMax(),
    imageUrls = [+getRandomNum(), ],
    images = [];

function getRandomNum() {
    return Math.floor(Math.random() * 10000);
}

function loaderOut() {
    console.log("Image is done loading");
}

TweenMax.set($circles, {
    scale: 0
});

tl.insert(
    TweenMax.staggerTo($circles.toArray(), 1, {
        opacity: 1,
        scale: 1,
        ease: Power1.easeIn
    }, .2)
);

tl.insert(
    TweenMax.staggerTo($circles.toArray(), .5, {
        scale: 1.2,
        boxShadow: "0 25px 25px rgba(0,0,0,.4)",
        repeat: -1,
        yoyo: true,
        ease: Power1.easeOut
    }, .2), "-=.4"
);