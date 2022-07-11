
//cover
setTimeout(function () {

    document
        .getElementById("cover")
        .classList
        .add("cover-left");
});


// cursor
$(document).mousemove(function (e) {
    var cursorWidth = $(".cursor").width() / 2;
    gsap.to(".cursor", {
        duration: 0.5,
        delay: 0.05,
        left: e.pageX - cursorWidth - 17,
        top: e.pageY - cursorWidth,
        ease: "Power4.easeOut"
    });
});

//mouse pointer hover effect
$(".hoverEffect").hover(function () {
    $(".cursor").addClass("active");

}, function () {
    $(".cursor").removeClass("active");

});
// progress
const progressTag = document.querySelector('.progress');
const progressText = document.querySelector('p');
const bodyTag = document.querySelector('body');

document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag
        .getBoundingClientRect()
        .height;
    const totalHeight = pageHeight - window.innerHeight;
    const percentage = pixels / totalHeight;

    progressTag.style.width = `${ 100 * percentage}%`;

});
// header sticky
var win = $(window),
    nav = $('.scroll_ani');

pos = 10,
sticky = function () {
    win.scrollTop() > pos
        ? nav.addClass('sticky')
        : nav.removeClass('sticky');

}

// gsap text
win.scroll(sticky)

let viewHeight = window.innerHeight;
let viewWidth = window.innerWidth;

let textContainers = document.querySelectorAll('.headline_txt');

textContainers.forEach((element, index) => {
    let top = element
        .getBoundingClientRect()
        .top;
    let start = top;

    let firstText = element.querySelector('.heading:first-child');
    let secondText = element.querySelector('.heading:nth-child(2)');
    let lastText = element.querySelector('.heading:last-child');

    gsap.to(firstText, {
        scrollTrigger: {
            trigger: element,
            duration: 0.8,
            scrub: 5,
            start: start + "px bottom",
            end: "bottom top"
        },
        x: '-60vw',
        transformOrigin: "left center",
        ease: 'power1.inOut'
    });

    gsap.to(secondText, {
        scrollTrigger: {
            trigger: element,
            duration: 0.8,
            scrub: 2,
            start: start + "px bottom",
            end: "bottom top"
        },
        x: '-5vw',
        transformOrigin: "left center",
        ease: 'power1.inOut'
    });

    gsap.to(lastText, {
        scrollTrigger: {
            trigger: element,
            duration: 0.8,
            scrub: 3,
            start: start + "px bottom",
            end: "bottom top"
        },
        x: '50vw',
        transformOrigin: "left center",
        ease: 'power1.inOut'
    });
});

// parallax
$(window).scroll(function () {
    var top = $(window).scrollTop();
    var scrollTop = $(window).scrollTop() + $(window).height() / 1;
    for (var i = 1; i <= 10; i++) {
        if (scrollTop > $(".parallax_item" + i).offset().top) {
            $(".parallax_item" + i).addClass("show");
        } else {
            $(".parallax_item" + i).removeClass("show");
        }
    }
    if (top > 0) {
        $(".icon-scroll").addClass('hide');
    } else {
        $(".icon-scroll").removeClass('hide');
    }

});
