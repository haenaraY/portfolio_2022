//resize
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
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
    var cursorWidth = $(".cursor").width() / 2;
    gsap.to(".cursor", {
        duration: 0.5,
        delay: 0.05,
        left: e.pageX - cursorWidth - 17,
        top: e.pageY - cursorWidth,
        ease: "Power4.easeOut"
    });
});

//마우스 오버효과
$(".hoverEffect").hover(function () {
    $(".cursor").addClass("active");

}, function () {
    $(".cursor").removeClass("active");

});

                 


 setTimeout(function () {

    document.getElementById("cover").classList.add("cover-left");

});


