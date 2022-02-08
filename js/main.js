//loading
let Isloader = document.querySelector('.loading_wrap');

function Isloading(){
    setTimeout(function(){
        Isloader.classList.add('active');
    },2000);
}
Isloading();


//앵커기능 부드럽게 스크롤
document.querySelectorAll(".nav_wrap ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})

// cursor
$(document).mousemove(function (e) {
    var cursorWidth = $(".cursor").width() / 3;
    gsap.to(".cursor", {
        duration: 0.5,
        delay:0.1,
        left: e.pageX - cursorWidth,
        top: e.pageY - cursorWidth,
        ease: "power1.out"
    });
});

//마우스 오버효과
$(".hoverEffect").hover(function () {
    $(".cursor").addClass("active");

}, function () {
    $(".cursor").removeClass("active");

});

                 

